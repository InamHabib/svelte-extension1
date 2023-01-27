<script>
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
} from "carbon-icons-svelte"
</script>

<div class="footer">
    <Row class="footer-container">
        <Row class="footer-tab tab-background">
            <div on:click={()=>localStorage.setItem('page', 'listCredential')} class="sub-tab1" id="list-cred"><Password/></div>
                <div on:click={()=>localStorage.setItem('page', 'receiveCredential')} class="sub-tab1" id="receive-cred"><CloudDownload/></div>
                    <div on:click={()=>localStorage.setItem('page', 'activity')} class="sub-tab1" id="activity"><AppConnectivity/></div>
                        <div on:click={()=>localStorage.setItem('page', 'notification')} class="sub-tab1" id="notification"><Notification/></div>
                            </Row>
                            </Row>
                            </div>
