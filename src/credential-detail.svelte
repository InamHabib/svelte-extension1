<script>
  import { goto } from "svelte-pathfinder";
  import parseJWT from "./parseJWT.js";
  import { moment } from "moment";
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
    Dropdown,
  } from "carbon-components-svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  let credential;
  onMount(async () => {
    chrome.storage.local.get(["credentialDetail"]).then((result) => {
      credential =
        result &&
        result.credentialDetail &&
        JSON.parse(result.credentialDetail);
      console.log(credential);
    });
  });
</script>

<div class="list-of-credentials">
  <Row>
    <Column class="title-container">
      <h1>Credential Detail</h1>
    </Column>
  </Row>
  {#if credential}
    <Row>
      <Column class="data-container">
        <Row>
          <Column class="cred-detail-col"
            ><TextInput
              light
              labelText="Credential Name"
              value="Credential Name"
              disabled
            /></Column
          >
        </Row>
        <Row>
          <Column class="cred-detail-col"
            ><TextInput
              light
              labelText="Credential Type"
              value="Password"
              disabled
            /></Column
          >
        </Row>
        <Row>
          <Column class="cred-detail-col"
            ><TextInput
              light
              labelText="User Type"
              value="Local"
              disabled
            /></Column
          >
        </Row>
        <Row>
          <Column class="cred-detail-col"
            ><TextInput
              light
              labelText="Previledge User"
              value="False"
              disabled
            /></Column
          >
        </Row>
        <Row>
          <Column class="cred-detail-col"
            ><Dropdown
              titleText="Groups"
              selectedId="0"
              items={[
                { id: "0", text: "2" },
                { id: "0", text: "3" },
              ]}
            /></Column
          >
        </Row>
        <Row>
          <Column class="cred-detail-col"
            ><Dropdown
              titleText="Endpoints"
              selectedId="0"
              items={[{ id: "0", text: "123" }]}
            /></Column
          >
        </Row>
      </Column>
    </Row>
  {/if}
</div>
