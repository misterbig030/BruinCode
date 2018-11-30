
function printLEmail(){
  var emailAddress = localStorage.getItem("InputUserName");
  document.getElementById('Clemail').innerHTML = "Email: " + emailAddress;
}
$(document ).ready(function() {
  printLEmail();
});
