
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
      className.innerHTML=localStorage.getItem("classNam");

      var className= document.getElementById("pName");
      className.innerHTML=localStorage.getItem("profNam");

}});
