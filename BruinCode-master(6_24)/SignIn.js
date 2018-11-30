var userName = "";
var major = "";
var email = "";
var password = "";
var cfpassword = "";
var loadData = false;
var config = {
apiKey: "AIzaSyC_7hQrJC_OrgmlugFQdJhipXnaG8D1xD8",
authDomain: "bruincode.firebaseapp.com",
databaseURL: "https://bruincode.firebaseio.com",
projectId: "bruincode",
storageBucket: "bruincode.appspot.com",
messagingSenderId: "461364672091"
};
firebase.initializeApp(config);
var database = firebase.database();

var firstName ="";
var lastName = "";
var emailList = [];
var passwordList = [];
var exists = false;
var keys = [];

$(document ).ready(function() {
    downloadUser();
    //checkAccountExistance();

});

function submitSignIn(){
  checkSignIn();
  if (loadData == true) {
    window.location.href = "SignIn_Reading.html";
  }
}

//get user input of email
function getUserID (){
    email =document.getElementById('email').value
    localStorage.setItem("Email",email);
}

//get user password
function getPassword(){
  password = document.getElementById('password').value;
  localStorage.setItem("Password",password);
}

//get user confirm password
function getCfPassword(){
  cfpassword = document.getElementById('cfpassword').value;
  localStorage.setItem("CfPassword",cfpassword);
}

//get user major
function getMajor(){
  major = document.getElementById('major').value;
  localStorage.setItem("Major",major);
}

//get userFullName
function getUserFullName(){
    firstName = document.getElementById('userFristName').value;
    lastName = document.getElementById('userLastName').value;
  userName = firstName + " " + lastName;
  localStorage.setItem("FirstName",firstName);
  localStorage.setItem("LastName",lastName);
  localStorage.setItem("UserName",userName);
}

//vlid function to check inputs
function checkSignIn(){
  getMajor();
  getUserID();
  getPassword();
  getCfPassword();
  checkAccountExistance();
  if(firstName == "" || lastName == ""){
    loadData = false;
    alert("Please enter your First Name and Last Name!");
  }
  else if(email == ""){
    loadData = false;
    alert("Please enter your email adress!");
  }
  else if(password ==""){
    loadData = false;
    alert("Enter your password");
  }
  else if (cfpassword == ""){
    loadData = false;
    alert("Please coferim password by entering it again.");
  }
  else if(password != cfpassword){
    loadData = false;
    alert("Confirm password is not matching your password. Enter again.");
  }
  else if(exists == true){
    console.log(exists);
    loadData = false;
    exists = false;
    alert("Account already exists.");
  }
  else {
    loadData = true;
  }


}

//check the account if it exist or not
function checkAccountExistance(){
  getUserFullName();
  console.log("done");
  console.log(emailList);
  console.log(email);
  for (var i = 0; i < emailList.length; i++) {
    if(email == emailList[i]){
      exists = true;
      break;
    }
  }
}

//read the user info from the database
function downloadUser(){
  database.ref("Users").on("value",gotData,errorData);
}

//form user list and password list
function gotData(history){
  var data = history.val();
  keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    emailList[i] = (data[k].Email);
    passwordList[i] = (data[k].Password);
  }

}

//errorData
function errorData(){
  alert("Error");
}




//set the visibility of the password
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
