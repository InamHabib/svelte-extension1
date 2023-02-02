<script>
import CreateWallet from "./create-Wallet.svelte";
import "carbon-components-svelte/css/g100.css";
import ListOfCredentials from "./list-of-Credentials.svelte";
import ReceivingCredentials from "./receiving-Credentials.svelte";
import Activity from "./activity.svelte";
import Notifications from "./notifications.svelte";
import Footer from "./footer.svelte";
import LoginSignup from "./login-Signup.svelte";
import Message from "./message.svelte";
import {
    getContext,
    onMount
} from "svelte";
import "./styles/footer.scss";
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
    Home,
    Password,
    Notification,
    AppConnectivity,
    CloudDownload,
    Login,
    MessageQueue,
} from "carbon-icons-svelte";
let page = 'createWallet';
</script>

<div class="page-container">
    {#if page === 'createWallet'}
    <CreateWallet/>

        {:else if page === 'listCredential'}
        <ListOfCredentials/>
            {:else if page === 'receiveCredential'}
            <ReceivingCredentials/>
                {:else if page === 'activity'}
                <Activity/>
                    {:else if page === 'notification'}
                    <Notifications/>
                    {:else if page === 'loginSignup'}
                    <LoginSignup/>
                    {:else if page === 'message'}
                    <Message/>    
                    {/if}
                        <div class="footer">

                            <Row class="footer-container">
                                <Row class="footer-tab tab-background">
                                    <div on:click={()=>page='listCredential'} class="sub-tab1 bx--col" id="list-cred"><Password/></div>
                                        <div on:click={()=>page='receiveCredential'} class="sub-tab1 bx--col" id="receive-cred"><CloudDownload/></div>

                                            <div on:click={()=>page='activity'} class="sub-tab1 bx--col" id="activity"><AppConnectivity/></div>
                                                <div on:click={()=>page='notification'} class="sub-tab1 bx--col" id="notification"><Notification/></div>
                                                <div on:click={()=>page='loginSignup'} class="sub-tab1 bx--col" id="loginSignup"><Login/></div>
                                                <div on:click={()=>page='message'} class="sub-tab1 bx--col" id="send"><MessageQueue/></div>
                                                    </Row>

                                                    </Row>

                                                    </div>
                                                    </div>
