$( document ).ready(function()
{
  //  var courseArr=courseData;//get data
    var database;
    var config = {
       apiKey: "AIzaSyC_7hQrJC_OrgmlugFQdJhipXnaG8D1xD8",
       authDomain: "bruincode.firebaseapp.com",
       databaseURL: "https://bruincode.firebaseio.com",
       projectId: "bruincode",
       storageBucket: "bruincode.appspot.com",
       messagingSenderId: "461364672091"
     };
     firebase.initializeApp(config);
     myFunc1();
});

function myFunc1(){
  database = firebase.database();
  var ref=database.ref('courseData');
  // ref.push({
  //   courseNumber: "CS182EW"
  // });
  ref.on("value", function(snapshot){
    var data = snapshot.val();
    var keys = Object.keys(data);
    //var classStorage = "Com Sci M51A";
    //console.log(localStorage.classNam);
    var classStorage = localStorage.classNam;
    //var profStorage = "Mcilhenny, R.D.";
    //console.log(localStorage.profNam);
    var profStorage = localStorage.profNam;
    
    //alert(data[keys[0]].courseNumber);
    for (var i = 0; i < keys.length; i++){
      if (data[keys[i]].courseNumber == classStorage){
        //console.log(data[keys[i]].professor);
        var temp = "professor: " + data[keys[i]].professor;

        if (temp == profStorage){
          
          localStorage.key1 = i;
        }
        else
        {
          keynum2 = i;
          var x = document.createElement("li");
        var textnode = document.createTextNode(data[keys[i]].professor);
        x.appendChild(textnode);
        var keynum2 = i;
        //data[keys[i]].professor
        document.getElementById("myList").appendChild(x);
        var y = document.createElement("button");
        //var z = document.createTextNode("select");
        y.style.height = "35px";
        y.style.width = "100px";
        y.style.backgroundColor = "#CEC973";
        y.style.fontSize= "22px";
        y.style.fontFamily = "'Mali',serif";
        y.innerHTML = "select";
        //y.appendChild(z);
        x.appendChild(y);
        y.onclick = function(){
          localStorage.prof1 = profStorage;
          //localStorage.prof2 = professor2;
          localStorage.key2 = keynum2;
          location.href = "Comparison2.html";
        };
        } 
      }     
    }

  }, function(error){
    console.log("Error: " + error.code);
  })
}