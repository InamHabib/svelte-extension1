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
            chrome.storage.local.get("credentialNotification", function(result) {
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
               
              }
            );
            chrome.notifications.onButtonClicked.addListener(function (
              notifId,
              btnIdx
            ) {
              
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
              tempCredentialRequest[i].requestId = res.id;
            }
          }
          console.log(tempCredentialRequest);

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
