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
  import customContext from "./customContext";
  import { extendContextLoader } from "jsonld-signatures";
  import { onMount } from "svelte";
  import { goto } from "svelte-pathfinder";
  import parseJwt from "./parseJWT";
  import { Add, Upload, NotificationFilled } from "carbon-icons-svelte";
  import { Ed25519VerificationKey2020 } from "@digitalbazaar/ed25519-verification-key-2020";
  import { Ed25519Signature2020 } from "@digitalbazaar/ed25519-signature-2020";
  import { CryptoLD } from "crypto-ld";
  import { X25519KeyAgreementKey2020 } from "@digitalbazaar/x25519-key-agreement-key-2020";
  let tempCredentials;
  let tempCredentialRequest;
  let tempCredentialsFiltered = [];
  let userInfo;
  let fingerPrint;
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

  async function submitPresentation() {
    const id = tempCredentialRequest[0].requestId;
    const holder = userInfo.holderDid;
    const verifiableCredential = tempCredentialsFiltered[0].credentialDetail.vc;
    const presentationRequestId = tempCredentialRequest[0].presentationRequestId;
    console.log(presentationRequestId);
    let walletId = userInfo.walletId;
    let tempSignedPresentation = {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      credentialSchema: {
        id: "d31ce42d-dffc-4178-93bd-838757d3df5d",
        type: "JsonSchemaValidator2018",
      },
      credentialSubject: {
        epmPassword: "secret",
        epmUsername: verifiableCredential.credentialSubject.epmUsername,
        holderDID: holder,
        holderId: "1",
        id: holder,
      },
      expirationDate: "2028-12-12T00:00:00Z",
      id: "f8e394c8-e6b8-4a68-a452-9e36a2879c8a",
      issuanceDate: verifiableCredential.issuanceDate,
      issuer: "did:key:z6MkgaSuoabtP48y6ZwHMpUDDrUpfTn6Z2cqEhnPoHV3CGzC",
      type: ["VerifiableCredential"],
      proof: {
        type: "Ed25519Signature2018",
        created: "2020-02-03T17:23:49Z",
        jws: "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg",
        proofPurpose: "assertionMethod",
        verificationMethod: "https://example.edu/issuers/keys/1",
      },
    };
    let data = {
      walletId: walletId,
      holderDid: holder,
      presentationRequestId:presentationRequestId,
      presentation:tempSignedPresentation
    }
    console.log(tempSignedPresentation, "Inam",verifiableCredential);
    fetch(
      "https://api.did.kloudlearn.com/api/v1/walletService/submitPresentation",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      goto('/listCredential')
    })
    // const cryptoLd = new CryptoLD();

    // cryptoLd.use(Ed25519VerificationKey2020);
    // cryptoLd.use(X25519KeyAgreementKey2020);

    // let keyPair = await cryptoLd.generate({
    //   type: "Ed25519VerificationKey2020",
    // });
    // keyPair.id = `${holder}${keyPair.fingerprint()}`; // See Key ID section
    // const controllerDoc = {
    //   "@context": "https://client.did.kloudlearn.com/public/security-v2.jsonld",
    //   id: holder,
    //   assertionMethod: [keyPair.id],
    // };
    // keyPair.controller = controllerDoc; // See Controller Document section

    // const suite = new Ed25519Signature2020({
    //   verificationMethod: keyPair.id,
    //   key: keyPair,
    // });
    // console.log(id, suite, holder, verifiableCredential);
    // const presentation = createPresentation({
    //   verifiableCredential,
    //   id,
    //   holder,
    // });
    // const challenge = "authnull";
    // const documentLoader = defaultDocumentLoader
    // // const documentLoader = extendContextLoader(async (url) => {
    // //   return {
    // //     contextUrl: "https://client.did.kloudlearn.com/public/security-v2.jsonld",
    // //     documentUrl: url,
    // //     document: customContext,
    // //   };
    // // });
    // console.log(presentation, "Inam");
    // const vp = signPresentation({
    //   presentation,
    //   suite,
    //   challenge,
    //   documentLoader
    // });
    // console.log(vp);
  }
</script>

<div class="share-container">
  <div class="top">
    <h1>Share the following credentials</h1>
    <h1>{tempCredentialsFiltered && tempCredentialsFiltered.length > 0 && tempCredentialsFiltered[0].credentialName}</h1>
    <p>{tempCredentialsFiltered && tempCredentialsFiltered.length > 0 && tempCredentialsFiltered[0].credentialDetail.vc.credentialSubject.credentialType}</p>
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
