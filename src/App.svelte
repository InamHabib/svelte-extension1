<script>
   // import "./styles/index.scss"; 
   //import "./styles/list-of-Credentials.scss";
  // import "./styles/receiving-Credentials.scss";
  // import "./styles/activity.scss"
     import "./styles/notifications.scss"
    import CreateWallet from "./create-Wallet.svelte";
    import listofCredentials from "./list-of-Credentials.svelte"; 
    import "carbon-components-svelte/css/g100.css";
  import ListOfCredentials from "./list-of-Credentials.svelte";
  import ReceivingCredentials from "./receiving-Credentials.svelte";
  import Activity from "./activity.svelte";
  import Notifications from "./notifications.svelte";
</script>

<div class="page-container">
   <!-- <CreateWallet/>  -->
   <!-- <ListOfCredentials/>  -->
    <!-- <ReceivingCredentials/> -->
   <!-- <Activity/> -->
   <Notifications/>
</div>