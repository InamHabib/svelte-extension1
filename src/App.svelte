<script>
import { pattern, goto } from 'svelte-pathfinder';
import {sign} from 'did-jwt';
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
  import CredentialDetail from './credential-detail.svelte';
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
  userInfo = result && result.userInfo && JSON.parse(result.userInfo);
  console.log(userInfo);
  if(!userInfo)
{
 
goto('/login')

}
})



async function generateVerifiablePresentation(privateKey, presentationPayload, did) {
  const presentation = {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/2018/credentials/examples/v1',
    ],
    type: ['VerifiablePresentation'],
    holder: did,
    verifiableCredential: [presentationPayload],
  };

  const vp = await sign(presentation, {
    issuer: did,
    signer: async (data) => {
      const signature = await crypto.subtle.sign(
        { name: 'ECDSA', hash: { name: 'SHA-256' } },
        privateKey,
        data,
      );
      return Buffer.from(signature);
    },
    alg: 'ES256K',
  });

  console.log('Inam', vp);

  return vp;
}

generateVerifiablePresentation('ZaK2WhfeK/tS7gQKWXeMpVcGcseGzqUtYd20F8gpkbZevKpJgtWBkZdx4/gsLGSiUCiPw71SsD/MvUZfbmTjiQq5qW6j2pI5hC/fAzJa2dOfaa9KSmRB5g==', {"nonce": "b0873fc9-9d14-4739-abc0-69376eb9d292",
  "vp": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://identity.foundation/presentation-exchange/submission/v1"
    ],
    "id": "97230625-33b1-408d-ab17-6969b60c8ec5",
    "type": [
      "VerifiablePresentation",
      "PresentationSubmission"
    ],
    "presentation_submission": {
      "id": "3bfe3564-a28b-4388-a367-210bc0a60c23",
      "definition_id": "45b40d1d-c5aa-4dc1-a0bc-14361f1358bd",
      "descriptor_map": [
        {
          "id": "epmUser",
          "format": "jwt_vc",
          "path": "$.verifiableCredential[0]"
        }
      ]
    },
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1"
        ],
        "credentialSchema": {
          "id": "e3530f95-7fff-418e-9ba9-97d258ca5603",
          "type": "JsonSchemaValidator2018"
        },
        "credentialStatus": {
          "id": "http://localhost:8080/v1/credentials/257cb752-d513-4c63-abcb-d466ad8dba4e/status",
          "statusListCredential": "http://localhost:8080/v1/credentials/status/45c74eb0-c6d6-4075-b1d1-10300515e13b",
          "statusListIndex": "111936",
          "statusPurpose": "revocation",
          "type": "StatusList2021Entry"
        },
        "credentialSubject": {
          "epmPassword": "doe",
          "epmUsername": "john",
          "holderDID": "did:key:z6MkqkZzcXKa4yeLWjeytfEpMpbnNjt5zQ2hr6PUBeRCpQnN",
          "holderId": 1,
          "id": "did:key:z6MkqkZzcXKa4yeLWjeytfEpMpbnNjt5zQ2hr6PUBeRCpQnN"
        },
        "expirationDate": "2024-01-01T00:00:00Z",
        "id": "257cb752-d513-4c63-abcb-d466ad8dba4e",
        "issuanceDate": "2023-03-07T13:08:13Z",
        "issuer": "did:key:z6MksHxeNPe1jNLCSrSpV7cjhQg6A5Cnp6A2sJwp6GAvK1NK",
        "type": [
          "VerifiableCredential"
        ]
      }
    ]
  }
}, userInfo.holderDID)


</script>

<div class="page-container">
    {#if $pattern('/createWallet')}
    <CreateWallet/>
{:else if $pattern('/listCredential')} <!-- eg. /products?page=2&q=Apple -->
<ListOfCredentials/>
{:else if $pattern('/activity')} <!-- eg. /products?page=2&q=Apple -->
<Activity/>
{:else if $pattern('/login')} <!-- eg. /products?page=2&q=Apple -->
<WalletRegistration/>
{:else if $pattern('/backup')} <!-- eg. /products?page=2&q=Apple -->
<Backup/>
{:else if $pattern('/shareCredential')} <!-- eg. /products?page=2&q=Apple -->
<ShareCredentials/>
{:else if $pattern('/credential-detail')}
<CredentialDetail />

{:else}
<ListOfCredentials/>
{/if}
                        <div class="footer">

                            <Row class="footer-container">
                                <Row class="footer-tab tab-background">
                                    <div on:click={()=>goto('/listCredential')} class="sub-tab1 bx--col" id="list-cred"><Password/></div>
                                            <div on:click={()=>goto('/activity')} class="sub-tab1 bx--col" id="activity"><UserActivity/></div>
                                            <div on:click={()=>{goto('/shareCredential')}} class="sub-tab1 bx--col" id="backup"><Share/></div>  
                                                <!-- <div on:click={()=>goto('/backup')} class="sub-tab1 bx--col" id="notification"><DataBackup/></div> 
                                                                -->
                                            </Row>
                                                    </Row>

                                                    </div>
                                                    </div>
