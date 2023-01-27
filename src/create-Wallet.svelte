<script>
import "./styles/index.scss";
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
</script>

<div class="createwallet-container">
    <div class="title-container">
        <h1> Welcome to
            Authnull Wallet </h1>

    </div>

    <Row class="import-wallet-container">
        <Row class="upload-icon">
            <Upload />
        </Row>
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
                    <Column>
                    <Row class="add-icon"><Add />

                    </Row>
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
                    </Column>
                </Row>

                </div>
