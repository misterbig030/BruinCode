function printName(){
  var name = localStorage.getItem("UserName");
  document.getElementById('Cname').innerHTML = "Name: " + name;
}
function printEmail(){
  var emailAddress = localStorage.getItem("Email");
  document.getElementById('Cemail').innerHTML = "Email: " + emailAddress;
}
function printMajor(){
  var m = localStorage.getItem("Major");
  if(m == ""){
    document.getElementById('Cmajor').innerHTML = "Major: To Be Announced.";
  }
  else{
    document.getElementById('Cmajor').innerHTML = "Major: " + m;

  }
}

$(document ).ready(function() {
  printName();
  printEmail();
  printMajor();
});
