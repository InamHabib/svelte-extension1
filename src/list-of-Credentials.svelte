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
  } from "carbon-components-svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  let selected = "All";
  let data;
  setTimeout(
    chrome.storage.local.get(["credentials"]).then((result) => {
      data = result && result.credentials && JSON.parse(result.credentials);
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].credentialDetail = parseJWT(data[i].jwt);
        }
      }
    }),
    200
  );
</script>

<div class="list-of-credentials">
  <Row>
    <Column class="title-container">
      <h1>Available Credentials</h1>
    </Column>
  </Row>
  <Row>
    <Column class="search-bar">
      <Search size="sm" />
    </Column>
  </Row>

  <Row>
    <Column class="data-container">
      {#if data && data.length > 0}
        {#each data as credential}
          <Row class="data-tabs">
            <Column class="sub-tab2">
              <div
                class="card"
                on:click={() => {
                  // chrome.storage.local.set({
                  //   credentialDetail: JSON.stringify(credential),
                  // });
                  // goto("/credential-detail");
                }}
              >
                <div class="image-container">
                  <img src="/images/share.svg" height="50px" width="50px" />
                </div>
                <div class="content-container">
                  <h4>Credential for {credential.credentialName}</h4>
                  <span
                    >Credential type: {credential.credentialDetail.vc
                      .credentialSubject.credentialType}
                  </span>
                  <p>
                    Issued at {credential.credentialDetail.vc.issuanceDate} by
                    {credential.issuerName}
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        {/each}
      {:else}
        <div class="no-data">
          <img
            src="/images/noData.jpg"
            width="60%"
            height="auto"
            style="margin-bottom:2rem;margin-top:2rem"
          />
          <h2>Currently no access is requested</h2>
        </div>
      {/if}
    </Column>
  </Row>
</div>
