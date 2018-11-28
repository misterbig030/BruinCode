
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

    var courseArr=[];
    ref.on('value',gotData);     //get data from firebase
    function gotData(data){
      //console.log(data.val());
      var datas = data.val();
      var keys = Object.keys(datas);

      for(var i=0;i< keys.length;i++)
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
        var ob={courseNumber:cNum,
                session:cSession,
                units:cUnits,
                department:cDep,
                professor:cPro,
                lecHours:cLecHr,
                disHours:cDisHr,
                outHours:cOutHr};
        //console.log(ob);
        courseArr.push(ob);
      }


    var className= document.getElementById("cName");
    className.innerHTML=localStorage.text+":";
    localStorage.setItem("classNam",localStorage.text);
    
    var courseResult=[];
    for(var i=0;i<courseArr.length;i++)
    {

          if(localStorage.text==courseArr[i].courseNumber)
          {
            courseResult.push(courseArr[i]);
            //showClasInfo(courseArr,i,session);
          }

    }
    for(var j=courseResult.length-1; j>=0;j--)
    {
      var session= "session"+(j+1);
      showClasInfo(courseResult,j,session);

    }
  /*  var srchHisRef=database.ref('searchHistory');
    for(var i=0;i<courseResult.length;i++)
    {
        var dataObj=courseResult[i];
        srchHisRef.push(dataObj);  //push object data into firebase
    }*/
}


function showClasInfo(arr,index,sesNum){
        var table = document.getElementById("myTable");
        var row1 = table.insertRow(0);
        var cell11 = row1.insertCell(0);
        var cell12 = row1.insertCell(1);

        cell11.innerHTML=sesNum;
        cell12.innerHTML=arr[index].session;
        cell11.setAttribute("style","font-size:30px;font-weight:bold");

        var row2 = table.insertRow(1);
        var cell21 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        cell21.innerHTML="professor: "+arr[index].professor;
        cell22.innerHTML="Lecture Hours: "+arr[index].lecHours+" hrs";

        var row3 = table.insertRow(2);
        var cell31 = row3.insertCell(0);
        var cell32 = row3.insertCell(1);
        cell31.innerHTML="Units: "+ arr[index].units;
        cell32.innerHTML="Discussion Hours: "+arr[index].disHours+" hrs";

        var row4= table.insertRow(3);
        var cell41 = row4.insertCell(0);
        var cell42 = row4.insertCell(1);
        cell41.innerHTML="notes available";
        //  cell42.innerHTML="Discussion Hours: "+arr[index].disHours+" hrs";

        var button = document.createElement("Button");
        //button.type="button";
      //  button.class="btn";
        button.innerHTML="View more";
        cell42.appendChild(button);
        button.onclick = function()
          {
            var obj=document.getElementById("button");
            var oProf=$(this).parent().parent().prev().prev().find('td')[0];//row4
            //localStorage.text=o.innerHTML;
            localStorage.setItem("profNam",oProf.innerHTML);

            window.location.href="lecInfo.html";
          }
          button.setAttribute("style","height:30px;width:100px;background-color:#CEC973")

          cell41.setAttribute("style","border-bottom-style:solid;border-color:#EEE8AA");
          //cell42.setAttribute("style","border-bottom-style:solid;border-color:#EEE8AA");
    }

});
