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
        Download,
    
    } from "carbon-icons-svelte"

</script>


    <div class="createwallet-container">
        <div class="title-container">
            <span>Welcome to
                Authnull Wallet </span>
            
        </div>
        <Row>
          <Row class="import-wallet-container">
          <Row><Download class="icon-size" /></Row>
            <Row>
                
              <Column>
                <FileUploader
                multiple
                labelTitle="No,I Already have a Secret Recovery Phrase"
                buttonLabel="Import Wallet"
                labelDescription="Import your existing wallet using a secret recovery phrase"
                accept={[".csv", ".xlxs"]}
                status="complete"
              />
              </Column>
            </Row>
        </Row>
        <Row class="create-wallet-button">
  
            <Row>
              <Column class="font-size">
               <p>Yes, let's get set up!</p>
              </Column>
            </Row>
            <Row>
              <Column class="font-weight-wallet">
               <p>This will create a new wallet and secret recovery phrase</p>
              </Column>
            </Row>
            <Row>
              <Button type="primary">Create a wallet </Button>
            </Row>
          </Row>
        </Row>  

       
    

 
        
    </div>