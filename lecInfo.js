var datas;
var keys;
var count = 0;
var k;
var foundItem;
var ob;
var className;
var profName;
var courseArr=[];
var usedClasses=[];

 $( document ).ready(function()
{
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
    database = firebase.database();
    var ref=database.ref('courseData');

    ref.on('value', gotData);     //get data from firebase

    function gotData(data){

      var datas = data.val();
      var keys = Object.keys(datas);

      for(var i=0; i< keys.length; i++)
      {
        var k=keys[i];
        var cNum = datas[k].courseNumber;
        var cDep = datas[k].department;
        var cPro = datas[k].professor;
        var cLecHr=datas[k].lecHours;
        var cDisHr=datas[k].disHours;
        var cOutHr=datas[k].outHours;
        var cSession=datas[k].session;
        var cUnits=datas[k].units;
        var cLecNum=datas[k].lecNum;
        var cProj=datas[k].projects;
        var cEssay=datas[k].essays;
        var cSyll=datas[k].syllabus;
        var cRead=datas[k].readWeek;

        var ob={courseNumber:cNum,
                session:cSession,
                units:cUnits,
                department:cDep,
                professor:cPro,
                lecHours:cLecHr,
                disHours:cDisHr,
                outHours:cOutHr,
                lecNum:cLecNum,
                projects:cProj,
                essays:cEssay,
                syllabus:cSyll,
                readWeek:cRead
              };

        courseArr.push(ob);
      }
        //console.log(courseArr);

      className= document.getElementById("cName");
      className.innerHTML="Class Name: "+localStorage.getItem("classNam");


      var table = document.getElementById("myTable");
      var row1 = table.insertRow(0);
      var cell11 = row1.insertCell(0);
      var cell12 = row1.insertCell(1);
      cell11.innerHTML=localStorage.getItem("profNam");
    //  profName= document.getElementById("pName");
      //profName.innerHTML=localStorage.getItem("profNam");
      cell12.innerHTML=localStorage.getItem("oSess");

      for(foundItem=0; foundItem< courseArr.length; foundItem++)
      {
        if((className.innerHTML == "Class Name: "+courseArr[foundItem].courseNumber) && (cell11.innerHTML == "Professor: "+courseArr[foundItem].professor))
        {
          showWorkLoad();
          //console.log(courseArr[foundItem]);
          break;
        }
      }


  }

});


function addToSchedule()
{
  //alert(localStorage.classNam);
  var database = firebase.database();
  var refToSch=database.ref('scheduleTrack');
  var added = false;
  refToSch.on("value", function(snapshot){
    var data = snapshot.val();
    var keys = Object.keys(data);
    //alert(data[keys[0]].professor);
    const temp = keys.length;
    //console.log(keys.length);
    for (var i = 0; i < temp -1; i++){
      if ((data[keys[i]].professor == courseArr[foundItem].professor) && (data[keys[i]].courseNumber == courseArr[foundItem].courseNumber)){
        added = true;
        alert("Class already added to schedule" + i);
        break;
      }
      console.log(added);
    }

    console.log(added);


  }, function(error){
    console.log("Error: " + error.code);
  })
  if (added == false){
    refToSch.push(courseArr[foundItem]);

  }

  // refToSch.remove();
}

  function moveToSchedule()
  {
    window.location.href="schedulePage.html";
  }


  function compareClasses() {
    window.location.href="188 Comparison.html";
  }


function showWorkLoad() {
  var listDiv = document.getElementById("lists");
  var myList = document.createElement("UL");
  listDiv.appendChild(myList);

  for (var i = 0; i < 6; i++) {
      // create an item for each one
      var listItem = document.createElement('li');
      //listItem.style.align("center");

      if (i==0)
      {
        // Add the item text
        listItem.innerHTML = "Total Lecture Hours: " + courseArr[foundItem].lecHours;
      }
      else if(i==1)
      {
        // Add the item text
        listItem.innerHTML = "Total Discussion Hours: " + courseArr[foundItem].disHours;
      }
      else if(i==2)
      {
        // Add the item text
        listItem.innerHTML = "Lectures per Week: " + courseArr[foundItem].lecNum;
      }
      else if(i==3)
      {
        // Add the item text
        listItem.innerHTML = "Number of Projects: " + courseArr[foundItem].projects;
      }
      else if(i==4)
      {
        // Add the item text
        listItem.innerHTML = "Total Reading Assignment Pages: " + (courseArr[foundItem].readWeek * 10);
      }
      else if(i==5)
      {
        // Add the item text
        listItem.innerHTML = "Reading Assignments per Week: " + courseArr[foundItem].readWeek;
      }

      // Add listItem to the listElement
      myList.appendChild(listItem);
  }

}

function openInfo(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    document.getElementById("syllabus").onclick = function(){window.location.href = courseArr[foundItem].syllabus;}
    evt.currentTarget.className += " active";
}
