chrome.alarms.create({
  delayInMinutes: 0.17,
  periodInMinutes: 0.17,
});

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
      console.log(userInfo);
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
          console.log(res); // JSON data parsed by `data.json()` call

          currentCredential = res.credentials[0];
          if (currentCredential) {
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
            chrome.notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
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
                      tempCredentials = JSON.parse(result.credentials);
                    });
                    tempCredentials.push(currentCredential);
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
      console.log(userInfo);
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
          chrome.notifications.create(
            {
              type: "basic",
              iconUrl: "images/logo.png",
              title: "Authnull",
              message: `You have recieved a credential request`,
              silent: false,
             
            },
            () => {
              
            }
          );

        })
        .catch((error) => {});
    }
  });
}

chrome.alarms.onAlarm.addListener(handleAlarm);
