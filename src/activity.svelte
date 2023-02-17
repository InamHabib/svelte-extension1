<script>
    import { goto } from "svelte-pathfinder";
    import { onMount } from "svelte";
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
    import {
    CheckmarkFilled,
    CloseFilled

} from "carbon-icons-svelte"
    let selected="All"
    

    onMount(async () => {
    Notification.requestPermission().then((result) => {
  console.log(result);
  const img = '/images/logo.png' ;
const text = `Server Group has just requested for credentials`;
const notification = new Notification('Authnull wallet', { body: text, icon: img });

});
	});

    
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
                                <CheckmarkFilled size={50} class="approved" />
                            </div>
                            <div class="content-container">
                                <h4>Server Group #1 requested access to Password
                                </h4>
                                <span>2/2/2023 at 4:45pm</span>
                    <p class="user-type">User Type: Active Directory</p>
                            </div>
                        </div>
                   
                    
                    
                    </Column>
                </Row>
                <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                    <Column class="sub-tab2">
                        <div class="card">
                            <div class="image-container">
                                <CloseFilled size={50} class="denied" />
                            </div>
                            <div class="content-container">
                                <h4 >Server Group #2 requested access to Password
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

        {#if selected=="Server"}
        <Row>
            <Column  class="data-container">
                {#each Array(5) as _, index (index)}
                <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                    <Column class="sub-tab2">
                        <div class="card">
                            <div class="image-container">
                                <CheckmarkFilled size={50} class="approved" />
                            </div>
                            <div class="content-container">
                                <h4 >Server  #1 requested access to Password
                                </h4>
                                <span>2/2/2023 at 4:45pm</span>
                    <p class="user-type">User Type: Active Directory</p>
                            </div>
                        </div>
                   
                    
                    
                    </Column>
                </Row>
                <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                    <Column class="sub-tab2">
                        <div class="card">
                            <div class="image-container">
                                <CloseFilled size={50} class="denied" />
                            </div>
                            <div class="content-container">
                                <h4 >Server #2 requested access to Password
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

        {#if selected=="Groups"}
        <Row>
            <Column  class="data-container">
                {#each Array(5) as _, index (index)}
                <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                    <Column class="sub-tab2">
                        <div class="card">
                            <div class="image-container">
                                <CheckmarkFilled size={50} class="approved" />
                            </div>
                            <div class="content-container">
                                <h4 >Server Group #1 requested access to Password
                                </h4>
                                <span>2/2/2023 at 4:45pm</span>
                    <p class="user-type">User Type: Active Directory</p>
                            </div>
                        </div>
                   
                    
                    
                    </Column>
                </Row>
                <Row class="data-tabs" onClick={()=>goto('/credentials')}>
                    <Column class="sub-tab2">
                        <div class="card">
                            <div class="image-container">
                                <CloseFilled size={50} class="denied" />
                            </div>
                            <div class="content-container">
                                <h4 >Server  #1 requested access to Password
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
    