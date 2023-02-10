<script>
import "./styles/list-of-Credentials.scss";
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
} from "carbon-components-svelte";

let selected="All"
</script>

<div class="list-of-credentials">
    <Row>
        <Column class="search-bar">
        <Search  size="sm" /> </Column>
    </Row>
    <Row>
        <Column class="title-container">
        <h1>Available Credentials</h1>
        </Column>
    </Row>
    <Row class="tabs-container">
        <Button on:click={() => selected="All"} >All</Button>
        <Button on:click={() => selected="Server"} >Server</Button>
        <Button on:click={() => selected="Groups"} >Groups</Button>
        <Button on:click={() => selected="Apps"}>Apps</Button>
    </Row>
    <Row>
        <Column class="title-2"><h2>Popular</h2></Column>
    </Row>
{#if selected=="All"}
    <Row class="data-container">
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1
            </h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>

    </Row>
    {/if}
       
    {#if selected=="Server"}
    <Row class="data-container">
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 2</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>

    </Row>
    {/if}

    {#if selected=="Groups"}
    <Row class="data-container">
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 3</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>

    </Row>
    {/if}

    {#if selected=="Apps"}
    <Row class="data-container">
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server 4</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Credential for Server1</h4>
            <span>Credential type: SSH Keys </span>
            <p>Issued at 5.45pm for Asif</p>
            </Column>
        </Row>

    </Row>
    {/if}

   



</div>
