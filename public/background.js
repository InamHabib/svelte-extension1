

chrome.alarms.create({
    delayInMinutes: 0.17, periodInMinutes: 0.17});

function handleAlarm(alarmInfo) {
    pollCredential("https://api.did.kloudlearn.com/api/v1/walletService/pollCredentials", { "walletKey": JSON.parse(chrome.storage.local.get('userInfo')),
"email": JSON.parse(chrome.storage.local.get('userInfo')).email }).then((res) => {
console.log(data); // JSON data parsed by `data.json()` call
let tempCredentials = JSON.parse(chrome.storage.local.get('credentials'));

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
chrome.storage.local.set('credentials', JSON.stringify(tempCredentials));
});

}

async function pollCredential(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


chrome.alarms.onAlarm.addListener(handleAlarm);

