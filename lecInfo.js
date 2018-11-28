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
      console.log(courseArr);

      var className= document.getElementById("cName");
      var claNam=localStorage.getItem("classNam");
      className.innerHTML="Class Name: "+claNam;

      //var profName= document.getElementById("pName");
      var profNam =localStorage.getItem("profNam");
      //className.innerHTML= profNam;

      var objClass=[];
      for(var i=0;i<courseArr.length;i++)
      {

            if(claNam==courseArr[i].courseNumber && profNam=="Professor "+courseArr[i].professor)
            {
              objClass.push(courseArr[i]);
              //showClasInfo(courseArr,i,session);
            }

      }


      var table = document.getElementById("myTable");
      var row1 = table.insertRow(0);
      var cell11 = row1.insertCell(0);
      var cell12 = row1.insertCell(1);

      cell11.innerHTML=objClass[0].professor;
      cell12.innerHTML=objClass[0].session;
    //  cell11.setAttribute("style","font-size:30px;font-weight:bold");

   var row2 = table.insertRow(1);
      var cell21 = row2.insertCell(0);
      var cell22 = row2.insertCell(1);
      //cell21.innerHTML="professor: "+arr[index].professor;

      var button = document.createElement("Button");
      button.type="button";
      button.class="btn";
      button.innerHTML="Compare with Others";
      cell21.appendChild(button);
      button.setAttribute("style","height:30px;width:150px;background-color:#CEC973");
      cell22.innerHTML="Study time per week: "+(parseFloat(objClass[0].lecHours)+parseFloat(objClass[0].outHours)+parseFloat(objClass[0].disHours))+" hrs";
  /*
      button.onclick = function()
        {

          window.location.href="lecInfo.html";
        }
*/

}
});
