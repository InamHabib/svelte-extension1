<script>
    import {
        Form,
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
    
    } from "carbon-icons-svelte"
  import { goto } from "svelte-pathfinder";
    </script>
    
    <div class="registration-container">

        <div class="title-container">
            <h1> Credential for Sever #1</h1>
         </div>

        <TextInput size="sm" labelText="Username" placeholder="" value="xssjnfkfnd" />
        <TextInput size="sm" labelText="Passkey" placeholder="" value="xssjnfk123@fnd"/>

        <Row>
            <Column>
            <Button type="primary" on:click={()=>goto('/shareCredentials')}>Share</Button>
            </Column>
        </Row>


     </div>
    