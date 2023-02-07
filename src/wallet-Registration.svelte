<script>
    import "./styles/wallet-Registration.scss";
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
    </script>
    
    <div class="registration-container">

        <div class="title-container">
            <h1> Create a wallet </h1>
         </div>
    <Form >
        <TextInput size="sm" labelText="Username" placeholder=""/>
        <TextInput size="sm" labelText="Wallet name" placeholder=""/>
        <TextInput size="sm" labelText="Organization name" placeholder=""/>

        <Row>
            <Column>
            <Button type="primary">Submit</Button>
            </Column>
        </Row>

    </Form>

     </div>
    