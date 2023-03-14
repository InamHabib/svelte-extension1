<script>
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
    signPresentation,
    createPresentation,
    defaultDocumentLoader,
  } from "@digitalbazaar/vc";

  import { onMount } from "svelte";
  import { goto } from "svelte-pathfinder";
  import parseJwt from "./parseJWT";
  import { Add, Upload, NotificationFilled } from "carbon-icons-svelte";
  import { concat } from "jsonld-signatures/lib/util";
  let currentAssignment;
  let userInfo;
  chrome.storage.local.get(["userInfo"]).then((result) => {
    userInfo = JSON.parse(result.userInfo);
  });
  chrome.storage.local.get(["currentAssignment"]).then((result) => {
    currentAssignment = JSON.parse(result.currentAssignment);
  });

  const acceptCredential = () => {
    let data = {
      walletId: userInfo.walletId,
      userId: userInfo.userId,
      credentialId: currentAssignment.credentialId,
      accept: true,
    };

    fetch(
      "https://api.did.kloudlearn.com/api/v1/walletService/acknowledgeCredential",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      // Testing Only
      goto("/listCredential");
      let tempCredentials;
      let tempNotifications = [];
      let tempCurrentAssignment = currentAssignment;
      tempCurrentAssignment.credentialDetail = null;
      chrome.storage.local.get(["credentials"]).then((result) => {
        tempCredentials =
          result && result.credentials && JSON.parse(result.credentials);
        if (tempCredentials && tempCredentials.length > 0) {
          tempCredentials.push(tempCurrentAssignment);
        } else {
          tempCredentials = [tempCurrentAssignment];
        }
        chrome.storage.local.set({
          credentials: JSON.stringify(tempCredentials),
        });
      });

      chrome.storage.local.get(["credentialNotification"]).then((result) => {
        tempNotifications =
          result &&
          result.credentialNotification &&
          JSON.parse(result.credentialNotification);
        currentAssignment.status = "approved";
        if (tempNotifications && tempNotifications.length > 0) {
          for (let i = 0; i < tempNotifications.length; i++) {
            if (
              tempNotifications[i].credentialId ===
              currentAssignment.credentialId
            ) {
              tempNotifications[i].status = "approved";
            }
          }
        } else {
          tempNotifications = [currentAssignment];
        }

        chrome.storage.local.set({
          credentialNotification: JSON.stringify(tempNotifications),
        });
      });
    });
  };

  const denyCredential = () => {
    let data = {
      walletId: userInfo.walletId,
      userId: userInfo.userId,
      credentialId: currentAssignment.credentialId,
      accept: false,
    };
    fetch(
      "https://api.did.kloudlearn.com/api/v1/walletService/acknowledgeCredential",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      goto("/activity");
      let tempNotifications = [];
      chrome.storage.local.get(["credentialNotification"]).then((result) => {
        tempNotifications =
          result &&
          result.credentialNotification &&
          JSON.parse(result.credentialNotification);
        currentAssignment.status = "denied";
        if (tempNotifications && tempNotifications.length > 0) {

          for (let i = 0; i < tempNotifications.length; i++) {
            if (
              tempNotifications[i].credentialId ===
              currentAssignment.credentialId
            ) {
              tempNotifications[i].status = "denied";
            }
          }
        } else {
          tempNotifications = [currentAssignment];
        }

        chrome.storage.local.set({
          credentialNotification: JSON.stringify(tempNotifications),
        });
      });
    });
  };
</script>

{#if currentAssignment}
  <div class="share-container">
    <div class="top">
      <h1>{currentAssignment.message}</h1>
      <p>
        Credential type: {currentAssignment.credentialDetail.vc
          .credentialSubject.credentialType}
      </p>
      <div class="image-container">
        <img src="/images/share.svg" width="100px" height="100px" />
      </div>
    </div>
    <div class="bottom">
      <!-- <div class="image-container">
          <NotificationFilled size={64} />
      </div> -->
      <h2>Press accept if you would like to store these credentials</h2>
      <h5>If you press accept the receiving resource will authenticate you</h5>
      <div class="button-container">
        <Button
          type="primary"
          on:click={() => {
            acceptCredential();
            goto("/listCredential");
          }}>Accept</Button
        >
        <Button
          kind="ghost"
          on:click={() => {
            denyCredential();
          }}>Decline</Button
        >
      </div>
    </div>
  </div>
{/if}
