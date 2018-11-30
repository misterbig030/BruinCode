var readingSpeed;
function getReadingSpeed(){
  readingSpeed = document.getElementById('RS').value;
  localStorage.setItem("ReadingSpeed",readingSpeed);
}


//upload the data to firebase
function uploadData(){
  getReadingSpeed();
  var r = localStorage.getItem('ReadingSpeed');
  var p = localStorage.getItem('Password');
  var e = localStorage.getItem('Email');
  var m = localStorage.getItem('Major');
  var u = localStorage.getItem('UserName');
  var l = localStorage.getItem('LastName');
  var f = localStorage.getItem('FirstName');
  database.ref("Users/").push(
    {
      FirstName:f,
      LastName:l,
      FullName: u,
      Major:m,
      Email:e,
      Password:p,
      ReadingSpeed:r
    });
}
