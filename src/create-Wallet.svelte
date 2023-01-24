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


<body>
    <div class="createwallet-container">
        <div class="title-container">
            <h1>Wellcome to
                Authnull Wallet
            </h1>
        </div>
        <Row>
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
  </Row>
 
        
    </div>
    
</body>
