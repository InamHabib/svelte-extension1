<script>

    import {
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

        <Column class="welcome-container">
        <Row>
            <Column>
                <img src="./images/logo.png" width="100px" />
            </Column>
            
        </Row>
        <Row>
            <Column>
                <h1> Welcome to <br />
                    Authnull Wallet</h1>
            </Column>
            
        </Row>
        <Row>
            <Column>
                <Button type="primary" on:click={()=>goto('/listCredential')}>Login </Button>
            
            </Column>
        </Row>
        </Column>


    