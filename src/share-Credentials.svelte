<script>
import "./styles/share-Credentials.scss";
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

    <div class="title-container">
        <h1> Share the following credentials?
        </h1>
        <h2>Server Group #1</h2>
        <h6>SSH Keys</h6>

    </div>

    <Row>
        <Column></Column>
    </Row>
    <Row class="bottom-container">
        <Row>
            <Column><NotificationFilled/></Column>
                </Row>
                <Row>
                    <Column><h5>Press Share if you would like to share these credentials</h5></Column>
                </Row>

                <Row>
                    <p>If you press accept, the receiving resource will authenticate you.</p>
                </Row>
                </Row>

                <Row class="share-button">
                    <Column>
                    <Row>
                        <ButtonSet stacked>
                            <Button>Share</Button>
                            <Button kind="ghost">Decline</Button>
                        </ButtonSet>
                    </Row>
                    </Column>
                </Row>

                </div>
