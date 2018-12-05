$(document ).ready(function() {
  showTable();
});

function showTable()
{
  var database = firebase.database();
  var refToTrack=database.ref('scheduleTrack');
  var trackArr=[];
  var itemsInSch;


  refToTrack.on('value', getTable);     //get data from firebase

  function getTable(data){

    var datas = data.val();
    var keys = Object.keys(datas);

    for( itemsInSch=0; itemsInSch< keys.length; itemsInSch++)
    {
      var k=keys[itemsInSch];
      var cNum = datas[k].courseNumber;
      var cDep = datas[k].department;
      var cPro = datas[k].professor;
      var cLecHr=datas[k].lecHours;
      var cDisHr=datas[k].disHours;
      var cOutHr=datas[k].outHours;
      var cSession=datas[k].session;
      var cUnits=datas[k].units;
      var cLecNum=datas[k].lecNum;
      var cProject=datas[k].projects;
      var cEssay=datas[k].essays;
      var cSyll=datas[k].syllabus;
      var cRead=datas[k].readWeek;

      var obj={courseNumber:cNum,
              session:cSession,
              units:cUnits,
              department:cDep,
              professor:cPro,
              lecHours:cLecHr,
              disHours:cDisHr,
              outHours:cOutHr,
              lecNum:cLecNum,
              projects:cProject,
              essays:cEssay,
              syllabus:cSyll,
              readWeek:cRead
            };

      trackArr.push(obj);
    }
    console.log(trackArr.length);
    console.log(trackArr[0].professor);


  for(var n=0; n<trackArr.length; n++)
  {
    console.log("enters");
    //var body = document.getElementsByTagName('body')[0];
    var tbl = document.getElementById('table');
    var tbdy = document.createElement('tbody');

    tbl.setAttribute('border', '1');
    tbl.style.width = '100%';

    for (var i = 0; i < 7; i++)
    {
        var tr = document.createElement('tr');

        // start of filling out the first column of each row
        for (var j = 0; j < 2; j++)
        {
          console.log('it enters to j');
          if (j==0 && i==0)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Course Name'));
            //td.style.padding="20px";
            td.style.color="Black";
            tr.appendChild(td);
          }
          else if (j==0 && i==1)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Instructor'));
          //  td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==0 && i==2)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Lecture Hours'));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==0 && i==3)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Outside Study Hours'));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==0 && i==4)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Projects'));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==0 && i==5)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Essays'));
          //  td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==0 && i==6)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('\u0020'));
          //  td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }


          // Start of filling out the second column of each row
          if (j==1 && i==0)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].courseNumber));     // localStorage.classNam
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==1)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].professor));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==2)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].lecHours));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==3)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].outHours));
          //  td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==4)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].projects));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==5)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(trackArr[n].essays));
            //td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
          else if (j==1 && i==6)
          {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('\u0020'));
          //  td.style.padding="20px";
            td.style.color="white";
            tr.appendChild(td);
          }
        }

        tbdy.appendChild(tr);
    }

    tbl.appendChild(tbdy);
  }
}

}

function goToSearch()
{
  window.location.href="search.html";
}


 function deleteandsearch()
 {
   console.log("heyo");
   var database = firebase.database();
   var refToTrack=database.ref('scheduleTrack');
   refToTrack.remove();
   var tb = document.getElementById('table');
     var rowNum=tb.rows.length;
     for (i=0;i<rowNum;i++)
     {
         tb.deleteRow(i);
         rowNum=rowNum-1;
         i=i-1;
     }

 }
