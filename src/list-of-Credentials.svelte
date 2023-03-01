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
let data;
chrome.storage.local.get(["credentials"]).then((result) => {
 data = result && result.credentials && JSON.parse(result.credentials)
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
    </Row>
    <Row>
        <Column class="search-bar">
            <Search  size="sm" />
        </Column>
    </Row>
{#if selected=="All"}
    <Row>
        <Column  class="data-container">
            {#if data && data.length > 0}
            {#each data as credential}
            <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                <Column class="sub-tab2">
                    <div class="card">
                        <div class="image-container">
                            <img src="/images/share.svg" height="50px" width="50px" />
                        </div>
                        <div class="content-container">
                            <h4>Credential for {credential.name}
                            </h4>
                            <span>Credential type: SSH Keys </span>
                            <p>Issued at 5.45pm by Broardcom</p>
                        </div>
                    </div>
               
                
                
                </Column>
            </Row>
            {/each}
            {/if}
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
