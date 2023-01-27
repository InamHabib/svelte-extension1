<script>
import "./styles/receiving-Credentials.scss";
import {
    Button,
    Link,
    Loading,
    TextArea,
    TextInput,
    Row,
    Column,
    Search,
    Tab,
    Tabs,
    TabContent,
    Tag,
} from "carbon-components-svelte";
</script>

<div class="receiving-credentials">

    <Row>
        <Column class="title-container">
        <h1>Available Credentials</h1>
        </Column>
    </Row>
    <Row class="tabs-container">
        <Button>All</Button>
        <Button>Server</Button>
        <Button>Groups</Button>
        <Button>Apps</Button>
    </Row>
    <Row>
        <Column class="title-2"><h2>Popular</h2></Column>
    </Row>

    <Row class="data-container">
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"><Tag type="blue" size="sm">Incoming</Tag></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"><Tag type="blue" size="sm">Incoming</Tag></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1</h4>
            <span>SSH Keys</span>
            <p>Rotated at yesterday 5pm PST</p>
            </Column>
        </Row>

    </Row>

</div>
