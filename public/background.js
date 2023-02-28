import axios from "axios";


chrome.alarms.create({
    delayInMinutes: 0.17, periodInSe: 0.17});

function handleAlarm(alarmInfo) {
    pollCredential();
}
async function pollCredential() {
    let data = {
    "walletKey": 'dnfdm-dfdsfdf-dfdfd=dfdasfn',
    "email": JSON.parse(localStorage.getItem('userInfo')).email

    };
    let url = 'https://api.did.kloudlearn.com/api/v1/walletService/pollCredentials';
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      let tempCredentials = localStorage.getItem('credentials');
      if(tempCredentials && tempCredentials.length)
      {
        tempCredentials.push(res.data.credentials[0])
      }
      else{
        tempCredentials = [];
      }
      localStorage.setItem('credentials', tempCredentials);
    //   localStorage.setItem("userInfo", data);
    } catch (err) {     
       console.log(err);
    }
}
chrome.alarms.onAlarm.addListener(handleAlarm);

