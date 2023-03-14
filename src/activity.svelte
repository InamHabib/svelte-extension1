<script>
  import { goto } from "svelte-pathfinder";
  import { onMount } from "svelte";
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
  import parseJwt from "./parseJWT";
  import {
    CheckmarkFilled,
    CloseFilled,
    WarningAlt,
  } from "carbon-icons-svelte";
  let selected = "All";
  let data;
  setTimeout(
    chrome.storage.local.get(["credentialNotification"]).then((result) => {
      data =
        result &&
        result.credentialNotification &&
        JSON.parse(result.credentialNotification);
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].credentialDetail = data[i].jwt && parseJwt(data[i].jwt);
        }
      }
    }),
    200
  );
</script>

<div class="list-of-credentials">
  <Row>
    <Column class="title-container">
      <h1>Activity Log</h1>
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
        {#each data as notification}
          <Row class="data-tabs">
            <Column class="sub-tab2">
              <div
                class="card"
                on:click={() => {
                  console.log("INAM");
                  chrome.storage.local.set({
                    currentAssignment: JSON.stringify(notification),
                  });
                  goto("/asignedCredential");
                }}
              >
                <div class="image-container">
                  {#if notification.status === "approved"}
                    <CheckmarkFilled size={50} class="approved" />
                  {:else if notification.status === "denied"}
                    <CloseFilled size={50} class="denied" />
                  {:else}
                    <WarningAlt size={50} class="pending" />
                  {/if}
                </div>
                <div class="content-container">
                  <h4>{notification.message}</h4>
                  <span
                    >Issued at {notification.credentialDetail.vc.issuanceDate} by
                    {notification.issuerName}</span
                  >
                  <p class="user-type">
                    Credential type: {notification.credentialDetail.vc
                      .credentialSubject.credentialType}
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        {/each}
      {/if}
    </Column>
  </Row>
</div>
