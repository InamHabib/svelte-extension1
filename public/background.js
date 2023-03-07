chrome.alarms.create({
  delayInMinutes: 0.17,
  periodInMinutes: 0.17,
});

function handleAlarm(alarmInfo) {
  pollCredential();
  pollCredentialRequest();
}

async function pollCredential() {
  // Default options are marked with *
  chrome.storage.local.get(["userInfo"]).then((result) => {
    let userInfo = result && result.userInfo && JSON.parse(result.userInfo);
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
          let tempCredentials = [];
          chrome.storage.local.get(["credentials"]).then((result) => {
            tempCredentials = JSON.parse(result.credentials);
          });
          tempCredentials.push(res.credentials[0]);
          if (res && res.credentials[0]) {
            if (res.credentials)
              chrome.notifications.create(
                // "drink_water",
                {
                  type: "basic",
                  iconUrl: "images/logo.png",
                  title: "Authnull",
                  message: `Credential have been assigned to you by ${res.credentials[0].issuerId}`,
                  silent: false,
                },
                () => {}
              );
          } else {
            tempCredentials = [];
          }
          chrome.storage.local.set({
            credentials: JSON.stringify(tempCredentials),
          });
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
      let data = { walletKey: userInfo.walletKey, email: userInfo.email, walletId:userInfo.walletId, userId:userInfo.userId };
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
          console.log(res); // JSON data parsed by `data.json()` call
        })
        .catch((error) => {});
    }
  });
}

chrome.alarms.onAlarm.addListener(handleAlarm);
