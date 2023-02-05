<script>
    import { onMount } from "svelte";
    
    onMount(async () => {
    Notification.requestPermission().then((result) => {
  console.log(result);
  const img = '' ;
const text = `HEY! You have a new authnull wallet notification.`;
const notification = new Notification('Authnull wallet', { body: text, icon: img });

});
	});
</script>


<body>
    <h1>Wallet test notification</h1>
    
</body>
