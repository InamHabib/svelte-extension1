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
        PasswordInput,
    } from "carbon-components-svelte";
    
    import {
        Add,
        Upload,
    
    } from "carbon-icons-svelte"
    </script>
    
    <div class="backup-container">

        <div class="title-container">
            <h1> Account 1 </h1>
         </div>
    <Form >
        <TextInput size="sm" labelText="" placeholder="01XE49C4RF65VB22D"/>
        <Column></Column>
        <Row class=title2-container>
            <Column>
            <h4>Show Private Keys</h4>
            </Column>
        </Row>
        <Row>
        <PasswordInput size="sm" labelText="Type Your Broadcom Wallet Password" placeholder=""/>
    </Row>
      
    </Form>

    <Row class="button-container" >
        <Column><Button kind="tertiary">Backup to Broadcom</Button> </Column>
        <Column>
        <Button type="primary">Submit</Button>
        </Column>
    </Row>

    <Row class=warning-container>
        <Column>
        <p>
            Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.
            </p>
        </Column>
    </Row>

     </div>
    