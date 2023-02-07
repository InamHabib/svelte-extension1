<script>
import "./styles/activity.scss";
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

<div class="activity-container">
    <Row class="top-section">
        <Row>
            <Column class="title-container">
            <h2>Activity logs</h2>
            </Column>
        </Row>

        <Row class="tabs-container">
            <Button on:click={() => selected="All"} >All</Button>
            <Button on:click={() => selected="Server"} >Server</Button>
            <Button on:click={() => selected="Groups"} >Groups</Button>
            <Button on:click={() => selected="Apps"}>Apps</Button>
        </Row>
    </Row>
    {#if selected=="All"}
    <Row class="data-container">
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>

    </Row>
    {/if}

    {#if selected=="Server"}
    <Row class="data-container">
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #2 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>

    </Row>
    {/if}

    {#if selected=="Groups"}
    <Row class="data-container">
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>

    </Row>
    {/if}

    {#if selected=="Apps"}
    <Row class="data-container">
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs tab-background">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to Password</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>
        <Row class="data-tabs">
            <Column id="sub-tab1"></Column>
            <Column id="sub-tab2"><h4>Server Group #1 requested access to SSH Keys</h4>
            <span>2/2/2023 at 4:45pm</span>
            <p>User Type: Active Directory</p>
            </Column>
        </Row>

    </Row>
    {/if}

</div>
