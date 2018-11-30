var inputUserName = "";
var inputPassword = "";
var logInvalue = false;
var accountExists =false;
var passwordBoolean = false;

$(document ).ready(function() {
    downloadUser();
    //checkAccountExists();
    console.log(accountExists);

});

function submitLogIn(){
  checkLogIn();
  if(logInvalue == true){
    window.location.href = "LogInConfirmationPage.html";
  }

}
function getInputName(){
  inputUserName = document.getElementById('userName').value;
  localStorage.setItem("InputUserName",inputUserName);
  console.log(inputUserName);
}

function getInputPassword(){
  inputPassword = document.getElementById('Password').value;
  localStorage.setItem("InputPassword",inputPassword);
  console.log(inputPassword);
}
function checkLogIn(){
  checkAccountExists();
  checkPassword();
  if (inputUserName =="") {
    logInvalue = false;
    alert("Please enter your email.");
  }
  else if (inputPassword =="") {
      logInvalue = false;
      alert("Please enter the password.");
  }
  else if (accountExists == false) {
    logInvalue = false;
    alert("Account does not exists. Please sign in your account");
  }
  else if (passwordBoolean == false)
  {
    logInvalue = false;
    alert("Incorrect Passowrd! Try again.");
  }
  else {
    logInvalue = true;
    alert("ready to load.")
  }
}

function checkPassword(){
    getInputPassword();
    console.log(passwordList);
  for (var i = 0; i < passwordList.length; i++) {
    if(inputPassword == passwordList[i]){
      passwordBoolean = true;
    }
  }
  console.log();
}
function checkAccountExists(){
  getInputName();
  downloadUser();
  console.log(emailList);
  for (var i = 0; i < emailList.length; i++) {
    if (inputUserName == emailList[i] ) {
      accountExists = true;
    }
  }
}
