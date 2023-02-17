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

const handleNotification = () =>{
    Notification.requestPermission().then((result) => {
  console.log(result);
  const img = '' ;
const text = `HEY! You have a new authnull wallet notification.`;
const notification = new Notification('Authnull wallet', { body: text, icon: img });

});
}

onMount(async ()=>{
    let pageDetails =  {
    "domainId": 1
 }
 let config = {
      headers: {
        Authorization: "34rfdhuytqwrtttbcv",
      },
    };
    axios
      .post(
        `https://api.did.kloudlearn.com/api/v1/credential/credentialList`,
        pageDetails
      )
      .then((res) => {
        // console.log(res.data);
        data = res.data.map((ad, i) => ({
          id: i,
          directory: ad.DirectoryName,
          type: ad.IntegrationType,
          userCount: ad.UsersCount.length,
          groupCount: ad.GroupCount.length,
        }));
        loading = false;
      })
      .catch(() => {
        // alert("Error fetching data");
        loading = false;
      });
})

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
        <Button class={selected == "Apps" ? "selected-tab" : ""} on:click={() => selected="Apps"}>Apps</Button>
    </Row>
    <Row>
        <Column class="search-bar">
            <Search  size="sm" />
        </Column>
    </Row>
{#if selected=="All"}
    <Row>
        <Column  class="data-container">
            {#each Array(5) as _, index (index)}
            <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                <Column class="sub-tab2">
                    <div class="card">
                        <div class="image-container">
                            <img src="/images/share.svg" height="50px" width="50px" />
                        </div>
                        <div class="content-container">
                            <h4 on:click={()=>handleNotification()}>Credential for Server 1
                            </h4>
                            <span>Credential type: SSH Keys </span>
                <p>Issued at 5.45pm for Asif</p>
                        </div>
                    </div>
               
                
                
                </Column>
            </Row>
            {/each}
        </Column>

    </Row>
   
    {/if}


   



</div>
