<script>
    import "./styles/footer.scss";
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

      import {
       Home,
       Password,
       Notification,
       AppConnectivity,
       CloudDownload,
      }  from "carbon-icons-svelte"
 
  
  </script>
  
  
  
      <div class="footer">
          
                <Row class="footer-container">
                <Row class="footer-tab tab-background">
                  <Column on:click={()=>localStorage.setItem('page', 'createWallet')} id="sub-tab1"><Home/></Column>
                  <Column on:click={()=>localStorage.setItem('page', 'listCredential')} id="sub-tab1"><Password/></Column>
                  <Column on:click={()=>localStorage.setItem('page', 'receiveCredential')} id="sub-tab1"><CloudDownload/></Column>
               
                  <Column on:click={()=>localStorage.setItem('page', 'activity')} id="sub-tab1"><AppConnectivity/></Column>
                  <Column on:click={()=>localStorage.setItem('page', 'notification')} id="sub-tab1"><Notification/></Column>

                  
                </Row>
              
               
                
               
                  
                
                
                
  
           </Row>
          
              
      
          
      </div>