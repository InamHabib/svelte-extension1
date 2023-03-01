<script>
import { pattern, goto } from 'svelte-pathfinder';
import CreateWallet from "./create-Wallet.svelte";
import "carbon-components-svelte/css/g100.css";
import ListOfCredentials from "./list-of-Credentials.svelte";
import ReceivingCredentials from "./receiving-Credentials.svelte";
import Activity from "./activity.svelte";
import axios from 'axios';
import Notifications from "./notifications.svelte";
import Footer from "./footer.svelte";
import LoginSignup from "./login-Signup.svelte";
import Message from "./message.svelte";
import WalletRegistration from "./wallet-Registration.svelte";
import Backup from "./backup.svelte";
import ShareCredentials from "./share-Credentials.svelte";
// import {machineIdSync} from 'node-machine-id';
import "./index.scss";
import {
    get,
    onMount
} from "svelte";
import "./styles/footer.scss";
import {
    Button,
    Loading,
    TextArea,
    TextInput,
    Row,
    Column,
    Search,
    Tab,
    Tabs,
    TabContent,
} from "carbon-components-svelte";

import {
    Home,
    Password,
    Notification,
    AppConnectivity,
    CloudDownload,
    Login,
    MessageQueue,
    DataBackup,
    UserActivity,
    Share
} from "carbon-icons-svelte";
  import Credentials from './credentials.svelte';
// let page = 'createWallet';
// const delayInMinutes = 0.1;
// chrome.alarms.create({
//        delayInMinutes: 0.1, periodInMinutes: 0.1});

// function handleAlarm(alarmInfo) {
//   console.log(`on alarm: ${alarmInfo.name}`);
//   chrome.notifications.create(
//             // "drink_water",
//             {
//                 type: "basic",
//                 iconUrl: "images/bijay.jpeg",
//                 title: "Stay Hydrated",
//                 message: "Have a sip of water human!",
//                 silent: false
//             },
//             () => { }
//         )
// }

// chrome.alarms.onAlarm.addListener(handleAlarm);

let userInfo;
chrome.storage.local.get(["userInfo"]).then((result) => {
  userInfo = JSON.parse(result.userInfo)
})

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
if(!userInfo)
{
    registerUser();


}
async function registerUser() {
    let deviceId = makeid(7);
    let data = {
    "deviceId": deviceId,
    "email": "iname@kloudone.com"

    };
    let url = 'https://api.did.kloudlearn.com/api/v1/wallet/registerUser';
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      registerWallet();
    //   chrome.storage.local.set("userInfo", data);
    } catch (err) {
      let tempUserInfo = {
      
      email : 'inam@kloudone.com',
      deviceId : 'XYXYXYXYXYX',
    
  }
  chrome.storage.local.set({ userInfo: JSON.stringify(tempUserInfo) })
      userInfo = tempUserInfo;
       registerWallet();
       console.log(err);
    }
}

async function registerWallet() {
    let data = {
    "walletKey": 'dnfdm-dfdsfdf-dfdfd=dfdasfn',
    "email": userInfo.email

    };
    let url = 'https://api.did.kloudlearn.com/api/v1/walletService/registerDevice';
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      let tempUserInfo = userInfo;

      tempUserInfo = {
        ...
        walletKey = 'dnfdm-dfdsfdf-dfdfd=dfdasfn'
      }
      chrome.storage.local.set({userInfo: JSON.stringify(tempUserInfo)})
    //   chrome.storage.local.set("userInfo", data);
    } catch (err) {
        
       console.log(err);
    }
}
</script>

<div class="page-container">
    {#if $pattern('/createWallet')}
    <CreateWallet/>
{:else if $pattern('/listCredential')} <!-- eg. /products?page=2&q=Apple -->
<ListOfCredentials/>
{:else if $pattern('/activity')} <!-- eg. /products?page=2&q=Apple -->
<Activity/>
{:else if $pattern('/login')} <!-- eg. /products?page=2&q=Apple -->
<LoginSignup/>
{:else if $pattern('/login/form')} <!-- eg. /products?page=2&q=Apple -->
<WalletRegistration/>
{:else if $pattern('/backup')} <!-- eg. /products?page=2&q=Apple -->
<Backup/>
{:else if $pattern('/shareCredential')} <!-- eg. /products?page=2&q=Apple -->
<ShareCredentials/>
{:else if $pattern('/credentials')} <!-- eg. /products?page=2&q=Apple -->
<Credentials/>
{:else}
<ListOfCredentials/>
{/if}
                        <div class="footer">

                            <Row class="footer-container">
                                <Row class="footer-tab tab-background">
                                    <div on:click={()=>goto('/listCredential')} class="sub-tab1 bx--col" id="list-cred"><Password/></div>
                                            <div on:click={()=>goto('/activity')} class="sub-tab1 bx--col" id="activity"><UserActivity/></div>
                                            <div on:click={()=>{goto('/shareCredential'),registerUser()}} class="sub-tab1 bx--col" id="backup"><Share/></div>  
                                                <!-- <div on:click={()=>goto('/backup')} class="sub-tab1 bx--col" id="notification"><DataBackup/></div> 
                                                                -->
                                            </Row>
                                                    </Row>

                                                    </div>
                                                    </div>
