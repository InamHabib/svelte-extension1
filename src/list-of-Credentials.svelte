<script>
import { goto } from "svelte-pathfinder";
import {
    Button,
    Link,
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
import axios from 'axios';
import {onMount} from 'svelte';
let selected="All"
let data = [];
const handleNotification = () =>{
    Notification.requestPermission().then((result) => {
  console.log(result);
  const img = '' ;
const text = `HEY! You have a new authnull wallet notification.`;
const notification = new Notification('Authnull wallet', { body: text, icon: img });

});
}

onMount(async ()=>{
    pollCredential();
})
chrome.alarms.onAlarm.addListener(handleAlarm);
function handleAlarm(alarmInfo) {
chrome.notifications.create(
         // "drink_water",
         {
             type: "basic",
             iconUrl: "images/logo.png",
             title: "Authnull",
             message: "Credential have been assigned to you",
             silent: false
         },
         () => { }
     )
}
async function pollCredential() {
    let pageDetails = {
    "walletKey": 'dnfdm-dfdsfdf-dfdfd=dfdasfn',
    "email": JSON.parse(localStorage.getItem('userInfo')).email

    };
    let url = 'https://api.did.kloudlearn.com/api/v1/walletService/pollCredentials';
    axios
      .post(
        url,
        pageDetails
      )
      .then((res) => {
        console.log(res.data);
      let tempCredentials = localStorage.getItem('credentials');
      if(tempCredentials && tempCredentials.length)
      {
        tempCredentials.push(res.data.credentials[0])
      }
      else{
        tempCredentials = [];
      }
      if(res.data.credentials[0])
      {
        chrome.alarms.create({
    delayInMinutes: 0.1, periodInMinutes: 0.1});
      }
      let data = tempCredentials;
      localStorage.setItem('credentials', tempCredentials);
         


      })
      .catch(() => {
        // alert("Error fetching data");

      });

}
</script>

<div class="list-of-credentials">
    <Row>
        <Column class="title-container">
        <h1>Available Credentials</h1>
        </Column>
    </Row>
    <Row class="tabs-container">
        <Button class={selected == "All" ? "selected-tab" : ""} on:click={() => selected="All"} >All</Button>
        <Button class={selected == "Server" ? "selected-tab" : ""} on:click={() => selected="Server"} >Server</Button>
        <Button class={selected == "Groups" ? "selected-tab" : ""} on:click={() => selected="Groups"} >Groups</Button>
    </Row>
    <Row>
        <Column class="search-bar">
            <Search  size="sm" />
        </Column>
    </Row>
{#if selected=="All"}
    <Row>
        <Column  class="data-container">
            {#each data as credential}
            <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                <Column class="sub-tab2">
                    <div class="card">
                        <div class="image-container">
                            <img src="/images/share.svg" height="50px" width="50px" />
                        </div>
                        <div class="content-container">
                            <h4 on:click={()=>handleNotification()}>Credential for {credential.name}
                            </h4>
                            <span>Credential type: SSH Keys </span>
                            <p>Issued at 5.45pm by Broardcom</p>
                        </div>
                    </div>
               
                
                
                </Column>
            </Row>
            {/each}
        </Column>

    </Row>
   
    {/if}

    {#if selected=="Server"}
    <Row>
        <Column  class="data-container">
            {#each data as credential}
            <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                <Column class="sub-tab2">
                    <div class="card">
                        <div class="image-container">
                            <img src="/images/share.svg" height="50px" width="50px" />
                        </div>
                        <div class="content-container">
                            <h4 on:click={()=>handleNotification()}>Credential for {credential.name}
                            </h4>
                            <span>Credential type: SSH Keys </span>
                            <p>Issued at 3.45pm by Broardcom</p>
                        </div>
                    </div>
               
                
                
                </Column>
            </Row>
            {/each}
        </Column>

    </Row>
   
    {/if}
    {#if selected=="Groups"}
    <Row>
        <Column  class="data-container">
            {#each data as credential}
            <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                <Column class="sub-tab2">
                    <div class="card">
                        <div class="image-container">
                            <img src="/images/share.svg" height="50px" width="50px" />
                        </div>
                        <div class="content-container">
                            <h4 on:click={()=>handleNotification()}>Credential for {credential.name}
                            </h4>
                            <span>Credential type: SSH Keys </span>
                            <p>Issued at 4.45pm by Broardcom</p>
                        </div>
                    </div>
               
                
                
                </Column>
            </Row>
            {/each}
        </Column>

    </Row>
   
    {/if}
   



</div>
