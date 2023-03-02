<script>
    import {
        Form,
        Button,
        Link,
        Loading,
        TextArea,
        TextInput,
        Row,
        Column,
        FileUploader,
    } from "carbon-components-svelte";
    import axios from "axios";

  import { goto } from "svelte-pathfinder";
    let username;
    let walletKey;
    let userInfo;
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
//     async function registerUser() {
//         console.log("Inam")
//     let deviceId = makeid(7);
//     let data = {
//     deviceId: deviceId,
//     email: username

//     };
//     let url = 'https://api.did.kloudlearn.com/api/v1/wallet/registerUser';
//     try {
//       const res = await axios.post(url, data);
//       console.log(res.data);
//       let tempUserInfo = {
      
//       email : username,
//       deviceId : deviceId,
    
//   }
//   chrome.storage.local.set({ userInfo: JSON.stringify(tempUserInfo) })
//       userInfo = tempUserInfo;
//       registerWallet();
//     //   chrome.storage.local.set("userInfo", data);
//     } catch (err) {
//       let tempUserInfo = {
      
//       email : username,
//       deviceId : deviceId,
    
//   }
//   chrome.storage.local.set({ userInfo: JSON.stringify(tempUserInfo) })
//       userInfo = tempUserInfo;
//        registerWallet();
//        console.log(err);
//     }
// }


async function registerWallet() {
    let data = {
    walletKey: walletKey,
    email: username

    };
    let url = 'https://api.did.kloudlearn.com/api/v1/walletService/registerDevice';
    try {
      const res = await axios.post(url, data);
      console.log(data);
      let tempUserInfo = {
        email:username,
        walletKey:walletKey
      }

      tempUserInfo.walletKey = walletKey;
      chrome.storage.local.set({userInfo: JSON.stringify(tempUserInfo)})
      goto('/listCredential');
    //   chrome.storage.local.set("userInfo", data);
    } catch (err) {
        
       console.log(err);
    }
}
    </script>
    
    <div class="registration-container">

        <Row>
            <Column class="title-container">
            <h1>Register Wallet</h1>
            </Column>
        </Row>
    <Form >
        <TextInput size="sm" labelText="Username" placeholder="" bind:value={username} />
        <TextInput size="sm" labelText="Wallet Key" placeholder=""  bind:value={walletKey}/>

        <Row>
            <Column>
            <Button type="primary" on:click={(e)=>{e.preventDefault(),registerWallet()}}>Login</Button>
            </Column>
        </Row>

    </Form>

     </div>
    