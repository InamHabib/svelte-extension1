

chrome.alarms.create({
    delayInMinutes: 0.17, periodInMinutes: 0.17});

function handleAlarm(alarmInfo) {
 pollCredential();

}

async function pollCredential() {
  // Default options are marked with *
  chrome.storage.local.get(["userInfo"]).then((result) => {
    let userInfo = JSON.parse(result.userInfo)
    let data ={ "walletKey": userInfo.walletKey,
    "email": userInfo.email }
    fetch("https://api.did.kloudlearn.com/api/v1/walletService/pollCredentials", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
  let tempCredentials;
  chrome.storage.local.get(["credentials"]).then((result) => {
    tempCredentials = JSON.parse(result.credentials);
  })
  if(tempCredentials && tempCredentials.length)
  {
  tempCredentials.push(res.data.credentials[0])
  chrome.notifications.create(
    // "drink_water",
    {
        type: "basic",
        iconUrl: "images/logo.png",
        title: "Authnull",
        message: `Credential have been assigned to you by ${res.data.credentials[0].issuerId}`,
        silent: false
    },
    () => { }
  )
  }
  else{
  tempCredentials = [];
  chrome.notifications.create(
    // "drink_water",
    {
        type: "basic",
        iconUrl: "images/logo.png",
        title: "Authnull",
        message: `Credential have been assigned to you by`,
        silent: false
    },
    () => { }
  )
  }
  chrome.storage.local.set({ credentials: JSON.stringify(tempCredentials) })
      })
      .catch((error) => {
        chrome.notifications.create(
          // "drink_water",
          {
              type: "basic",
              iconUrl: "images/logo.png",
              title: "Authnull",
              message: `Error have been assigned to you by`,
              silent: false
          },
          () => { }
        )
      });
  });

}


chrome.alarms.onAlarm.addListener(handleAlarm);

