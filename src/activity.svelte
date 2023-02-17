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
    
    let selected="All"
    
    const handleNotification = () =>{
        Notification.requestPermission().then((result) => {
      console.log(result);
      const img = '' ;
    const text = `HEY! You have a new authnull wallet notification.`;
    const notification = new Notification('Authnull wallet', { body: text, icon: img });
    
    });
    }
    
    
    </script>
    
    <div class="list-of-credentials">
        <Row>
            <Column class="title-container">
            <h1>Activity Log</h1>
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
                                <h4 on:click={()=>handleNotification()}>Server Group #1 requested access to Password
                                </h4>
                                <span>2/2/2023 at 4:45pm</span>
                    <p class="user-type">User Type: Active Directory</p>
                            </div>
                        </div>
                   
                    
                    
                    </Column>
                </Row>
                {/each}
            </Column>
    
        </Row>
       
        {/if}
    
    
       
    
    
    
    </div>
    