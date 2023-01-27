<script>






    import CreateWallet from "./create-Wallet.svelte";
    import "carbon-components-svelte/css/g100.css";
  import ListOfCredentials from "./list-of-Credentials.svelte";
  import ReceivingCredentials from "./receiving-Credentials.svelte";
  import Activity from "./activity.svelte";
  import Notifications from "./notifications.svelte";
  import Footer from "./footer.svelte";
  import { getContext, onMount } from "svelte";

  onMount(() => {
localStorage.setItem('page', 'createWallet')
  });
  let page = localStorage.getItem("page");
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
   {:else}
  <Notifications/>
  {/if}
   <Footer/>
</div>