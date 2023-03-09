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
  import {signPresentation, createPresentation, defaultDocumentLoader} from "@digitalbazaar/vc";

  import { onMount } from "svelte";
  import { goto } from "svelte-pathfinder";
  import parseJwt from "./parseJWT";
  import { Add, Upload, NotificationFilled } from "carbon-icons-svelte";
  let tempCredentials;
  let tempCredentialRequest;
  let tempCredentialsFiltered = [];
  let userInfo;
  chrome.storage.local.get(["userInfo"]).then((result) => {
    userInfo = JSON.parse(result.userInfo);
  });
  onMount(async () => {
    chrome.storage.local.get(["credentialRequest"]).then((result) => {
      tempCredentialRequest = JSON.parse(result.credentialRequest);
      chrome.storage.local.get(["credentials"]).then((result) => {
        tempCredentials = JSON.parse(result.credentials);

        if (tempCredentials && tempCredentials.length > 0) {
          for (let x = 0; x < tempCredentials.length; x++) {
            tempCredentials[x].credentialDetail = parseJwt(
              tempCredentials[x].jwt
            );
          }
          console.log(tempCredentialRequest, tempCredentials);
        }

        if (tempCredentialRequest) {
          for (let i = 0; i < tempCredentialRequest.length; i++) {
            for (let j = 0; j < tempCredentials.length; j++) {
              if (
                tempCredentials[
                  j
                ].credentialDetail.vc.credentialSubject.hasOwnProperty(
                  tempCredentialRequest[i].id
                )
              ) {
                tempCredentialsFiltered.push(tempCredentials[j]);
              }
              console.log(tempCredentials[j], "cred");
            }
            console.log(tempCredentialRequest[i].id, "id");
          }
          console.log(tempCredentialsFiltered);
        }
      });
    });
  });

  const submitPresentation = () => {
    console.log(tempCredentialRequest, userInfo)
    const id = tempCredentialRequest[0].requestId;
    const holder = userInfo.secretKey;
    const suite = holder;
    const verifiableCredential = tempCredentialsFiltered[0].credentialDetail.vc;
    console.log(id, suite, holder, verifiableCredential)
    const presentation = createPresentation({
      verifiableCredential,
      id,
      holder,
    });
    const challenge = "authnull";
    const documentLoader = defaultDocumentLoader;
    const vp = signPresentation({
      presentation,
      suite,
      challenge,
      documentLoader,
    });
    console.log(vp);
  };
</script>

<div class="share-container">
  <div class="top">
    <h1>Share the following credentials</h1>
    <h1>Server Group 1</h1>
    <p>SSH Keys</p>
    <div class="image-container">
      <img src="/images/share.svg" width="100px" height="100px" />
    </div>
  </div>
  <div class="bottom">
    <!-- <div class="image-container">
        <NotificationFilled size={64} />
    </div> -->
    <h2>Press share if you would like to share these credentials</h2>
    <h5>If you press accept the receiving resource will authenticate you</h5>
    <div class="button-container">
      <Button type="primary" on:click={() => submitPresentation()}
        >Accept</Button
      >
      <Button kind="ghost">Decline</Button>
    </div>
  </div>
</div>
