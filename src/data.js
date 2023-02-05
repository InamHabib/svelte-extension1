
function listCredentials(evt, All) {
  
  var i,tabcontent , navtab;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  navtab = document.getElementsByClassName("navtab");
  for (i = 0; i < navtab.length; i++) {
    navtab[i].className = navtab[i].className.replace(" active", "");
  }

  document.getElementById(All).style.display = "block";
  evt.currentTarget.className += " active";


}

export default listCredentials