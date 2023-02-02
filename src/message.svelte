<script>
    import { onMount } from "svelte";
function notification() {
    chrome.notifications.create('NOTFICATION', {
        type: 'basic',
        iconUrl: '',
        title: 'authnull wallet',
        message: 'this is a test notification',
        priority: 0
    })
}
onMount(async () => {
		notification();
	});
</script>


<body>
    <h1>Wallet test notification</h1>
    
</body>
