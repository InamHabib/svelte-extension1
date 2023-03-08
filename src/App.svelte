<script>
  import { pattern, goto } from "svelte-pathfinder";
  import CreateWallet from "./create-Wallet.svelte";
  import "carbon-components-svelte/css/g100.css";
  import ListOfCredentials from "./list-of-Credentials.svelte";
  import ReceivingCredentials from "./receiving-Credentials.svelte";
  import Activity from "./activity.svelte";
  import axios from "axios";
  import Notifications from "./notifications.svelte";
  import Footer from "./footer.svelte";
  import LoginSignup from "./login-Signup.svelte";
  import Message from "./message.svelte";
  import WalletRegistration from "./wallet-Registration.svelte";
  import Backup from "./backup.svelte";
  import ShareCredentials from "./share-Credentials.svelte";
  // import {machineIdSync} from 'node-machine-id';
  import "./index.scss";
  import { get, onMount } from "svelte";
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
    Share,
  } from "carbon-icons-svelte";
  import Credentials from "./credentials.svelte";
  import CredentialDetail from "./credential-detail.svelte";

  let userInfo;
  chrome.storage.local.get(["userInfo"]).then((result) => {
    userInfo = result && result.userInfo && JSON.parse(result.userInfo);
    console.log(userInfo);
    if (!userInfo) {
      goto("/login");
    }
  });
</script>

<div class="page-container">
  {#if $pattern("/createWallet")}
    <CreateWallet />
  {:else if $pattern("/listCredential")}
    <!-- eg. /products?page=2&q=Apple -->
    <ListOfCredentials />
  {:else if $pattern("/activity")}
    <!-- eg. /products?page=2&q=Apple -->
    <Activity />
  {:else if $pattern("/login")}
    <!-- eg. /products?page=2&q=Apple -->
    <WalletRegistration />
  {:else if $pattern("/backup")}
    <!-- eg. /products?page=2&q=Apple -->
    <Backup />
  {:else if $pattern("/shareCredential")}
    <!-- eg. /products?page=2&q=Apple -->
    <ShareCredentials />
  {:else if $pattern("/credential-detail")}
    <CredentialDetail />
  {:else}
    <ListOfCredentials />
  {/if}
  <div class="footer">
    <Row class="footer-container">
      <Row class="footer-tab tab-background">
        <div
          on:click={() => goto("/listCredential")}
          class="sub-tab1 bx--col"
          id="list-cred"
        >
          <Password />
        </div>
        <div
          on:click={() => goto("/activity")}
          class="sub-tab1 bx--col"
          id="activity"
        >
          <UserActivity />
        </div>
        <div
          on:click={() => {
            goto("/shareCredential");
          }}
          class="sub-tab1 bx--col"
          id="backup"
        >
          <Share />
        </div>
      </Row>
    </Row>
  </div>
</div>
