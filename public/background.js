chrome.alarms.create({
  delayInMinutes: 0.17,
  periodInMinutes: 0.17,
});
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function handleAlarm(alarmInfo) {
  pollCredential();
  pollCredentialRequest();
}
let currentCredential;
let userInfo;
async function pollCredential() {
  // Default options are marked with *
  chrome.storage.local.get(["userInfo"]).then((result) => {
    userInfo = result && result.userInfo && JSON.parse(result.userInfo);
    if (userInfo) {
      let data = { walletKey: userInfo.walletKey, email: userInfo.email };
      fetch(
        "https://api.did.kloudlearn.com/api/v1/walletService/pollCredentials",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          currentCredential = res.credentials[0];
          if (currentCredential) {
            currentCredential.status = "pending";
            currentCredential.message =  `Credential have been assigned to you by ${currentCredential.issuerName}`
            let tempCredentialNotificationList = [];
            chrome.storage.local.get(["credentialNotification"]).then((result) => {
              tempCredentialNotificationList =
                result &&
                result.credentialNotification &&
                JSON.parse(result.credentialNotification);
            });
            tempCredentialNotificationList.push(currentCredential);
            chrome.storage.local.set({
              credentialNotification: JSON.stringify(tempCredentialNotificationList),
            });
            console.log(tempCredentialNotificationList);
            chrome.notifications.create(
              {
                type: "basic",
                iconUrl: "images/logo.png",
                title: "Authnull",
                message: `Credential have been assigned to you by ${res.credentials[0].issuerName}`,
                silent: false,
                buttons: [
                  {
                    title: "Accept",
                    iconUrl: "",
                  },
                  {
                    title: "Reject",
                    iconUrl: "",
                  },
                ],
              },
              (id) => {
                assigned = id;
              }
            );
            chrome.notifications.onButtonClicked.addListener(function (
              notifId,
              btnIdx
            ) {
              if (notifId === assigned) {
                if (btnIdx === 0) {
                  let data = {
                    walletId: userInfo.walletId,
                    userId: userInfo.userId,
                    credentialId: currentCredential.credentialId,
                    accept: true,
                  };
                  fetch(
                    "https://api.did.kloudlearn.com/api/v1/walletService/acknowledgeCredential",
                    {
                      method: "POST", // or 'PUT'
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  ).then((res) => {
                    let tempCredentials = [];
                    chrome.storage.local.get(["credentials"]).then((result) => {
                      tempCredentials =
                        result &&
                        result.credentials &&
                        JSON.parse(result.credentials);
                    });
                    if(tempCredentialNotificationList && tempCredentialNotificationList.length > 0)
                    {
                      for(let i =0; i <tempCredentialNotificationList; i++)
                      {
                        if(tempCredentialNotificationList[i].credentialId === currentCredential.credentialId)
                        {
                            tempCredentials.push(tempCredentialNotificationList);
                        }
                        
                      }
                    }
                    chrome.storage.local.set({
                      credentials: JSON.stringify(tempCredentials),
                    });
                    chrome.notifications.create(
                      {
                        type: "basic",
                        iconUrl: "images/logo.png",
                        title: "Authnull",
                        message: `Credential assigned by ${currentCredential.issuerName} has been successfully stored`,
                        silent: false,
                      },
                      () => {}
                    );
                  });
                } else if (btnIdx === 1) {
                  let data = {
                    walletId: userInfo.walletId,
                    userId: userInfo.userId,
                    credentialId: currentCredential.credentialId,
                    accept: false,
                  };
                  fetch(
                    "https://api.did.kloudlearn.com/api/v1/walletService/acknowledgeCredential",
                    {
                      method: "POST", // or 'PUT'
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  );
                }
              }
            });
          }
        })
        .catch((error) => {});
    }
  });
}

async function pollCredentialRequest() {
  // Default options are marked with *
  chrome.storage.local.get(["userInfo"]).then((result) => {
    let userInfo = result && result.userInfo && JSON.parse(result.userInfo);
    if (userInfo) {
      let data = {
        walletKey: userInfo.walletKey,
        email: userInfo.email,
        walletId: userInfo.walletId,
        userId: userInfo.userId,
      };
      fetch(
        "https://api.did.kloudlearn.com/api/v1/walletService/pollPresentationRequest",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((res) => {
          let tempCredentialRequest;
          let tempCredentialsFiltered = [];

          if (
            res &&
            res.input_descriptors &&
            res.input_descriptors.length > 0
          ) {
            tempCredentialRequest =
              res.input_descriptors[0].constraints &&
              res.input_descriptors[0].constraints.fields;
            for (let i = 0; i < tempCredentialRequest.length; i++) {
              tempCredentialRequest.requestId = res.id;
            }
          }

          chrome.storage.local.set({
            credentialRequest: JSON.stringify(tempCredentialRequest),
          });

          chrome.notifications.create(
            {
              type: "basic",
              iconUrl: "images/logo.png",
              title: "Authnull",
              message: `You have recieved a credential request`,
              silent: false,
            },
            () => {}
          );
        })
        .catch((error) => {});
    }
  });
}

chrome.alarms.onAlarm.addListener(handleAlarm);
