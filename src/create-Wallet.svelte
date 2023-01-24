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

    import {Add} from "carbon-icons-svelte"

</script>


    <div class="createwallet-container">
        <div class="title-container">
            <h1>Wellcome to
                Authnull Wallet
            </h1>
        </div>
        <Row>
          <Row class="import-wallet-container">
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
            <Row>
              <Column>
               <p>No, I already have a secret recovery phrase</p>
              </Column>
            </Row>
            <Row>
              <Column>
               <p>Import your existing wallet using secret recovery phrase</p>
              </Column>
            </Row>
            <Row>
              <Button type="primary">Import Wallet</Button>
            </Row>
          </Row>
          <Row class="import-wallet-container">
            <!-- <Row>
              <Column>
                <FileUploader
                multiple
                labelTitle="No,I Already have a Secret Recovery Phrase"
                buttonLabel="Import Wallet"
                labelDescription="Import your existing wallet using a secret recovery phrase"
                accept={[".csv", ".jpeg"]}
                status="complete"
              />
              </Column>
            </Row> -->
            <Row>
              <Column>
               <p>No, I already have a secret recovery phrase</p>
              </Column>
            </Row>
            <Row>
              <Column>
               <p>Import your existing wallet using secret recovery phrase</p>
              </Column>
            </Row>
            <Row>
              <Button type="primary">Create Wallet</Button>
            </Row>
          </Row>
        </Row>

 
        
    </div>