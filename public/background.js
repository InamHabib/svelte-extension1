chrome.alarms.create({
    delayInMinutes: 0.1, periodInMinutes: 0.1});

function handleAlarm(alarmInfo) {
console.log(`on alarm: ${alarmInfo.name}`);
chrome.notifications.create(
         // "drink_water",
         {
             type: "basic",
             iconUrl: "images/bijay.jpeg",
             title: "Background API Call",
             message: "Can run api call in backend",
             silent: false
         },
         () => { }
     )
}

chrome.alarms.onAlarm.addListener(handleAlarm);