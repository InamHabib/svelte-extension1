<script>
import {
    ButtonSet,
    Button,
    Link,
    Loading,
    TextArea,
    TextInput,
    Row,
    Column,
    FileUploader,
} from "carbon-components-svelte";

import {
    Add,
    Upload,
    NotificationFilled,

} from "carbon-icons-svelte"
</script>


<div class="share-container">
    <div class="top">
        <h1>Share the following credentials</h1>
        <h1>Server Group 1</h1>
        <p>SSH Keys</p>
        <div class="image-container">
            <img src="/images/share.svg" width="100px" height="100px" />
        </div>
    </div>
<div class="bottom">
    <!-- <div class="image-container">
        <NotificationFilled size={64} />
    </div> -->
    <h2>Press share if you would like to share these credentials</h2>
    <h5>If you press accept the receiving resource will authenticate you</h5>
    <div class="button-container">
        <Button type="primary" on:click={()=>goto('/listCredential')}>Accept</Button>
        <Button kind="ghost">Decline</Button>
    </div>

</div></div>