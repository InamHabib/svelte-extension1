<script>
    import { onMount } from "svelte";
function notification() {
    chrome.notifications.create('NOTFICATION', {
        type: 'basic',
        iconUrl: 'my-extension/images/firebase.png',
        title: 'authnull wallet',
        message: 'this is a test notification',
        priority: 2
    })
}
onMount(async () => {
		notification();
        console.log("notification done")
	});
</script>


<body>
    <h1>Wallet test notification</h1>
    
</body>
