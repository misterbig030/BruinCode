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

    database = firebase.database();
    var ref=database.ref('courseData');

/*for(var i=0;i<courseArr.length;i++)
{
    var dataObj=courseArr[i];
    ref.push(dataObj);  //push object data into firebase

}*/
var courseArr=[];
ref.on('value',gotData);
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
    var ob={courseNumber:cNum,department:cDep,professor:cPro};
    //console.log(ob);
    courseArr.push(ob);
  }
    console.log(courseArr);
//}


    var depArr = [];   //create deparment array(no repeated)
    for(var i=0; i<courseArr.length;i++)
      {
        if ((jQuery.inArray(courseArr[i].department, depArr)) == -1)
        {
            depArr.push(courseArr[i].department);
        }
      }

      var depInput = document.getElementById("courseDep");
      autocomplete(document.getElementById("depInp"), depArr);//input department

      //var selectedCourse="";
        var obj=document.getElementById('courseNum');//get select form by id

      document.getElementById("depInp").onchange = getOption;
      function getOption()
      {
              var depText = "";
              depText=depInput.elements[0].value;

              var courseNumArr=[];   //get courseNums in selected department
              for(var i=0; i<courseArr.length;i++)
              {
                if (courseArr[i].department.toUpperCase()==depText.toUpperCase() && (jQuery.inArray(courseArr[i].courseNumber, courseNumArr)) == -1)
                {
                    courseNumArr.push(courseArr[i].courseNumber);
                }
              }

      obj.options.length=1;
      for(var i=0;i<courseNumArr.length;i++)
      {
          var addOption=new Option(courseNumArr[i],"i");//get an option
          obj.options.add(addOption);
      }

      obj.onchange=getCourseName;
      function getCourseName(){
      //var selectedCourse="";
      var index=obj.selectedIndex ;

        var selectedCourse=obj.options[index].innerHTML;

        //alert(selectedCourse);
          localStorage.text = selectedCourse;
      }
}

            document.getElementById("searchBtn").onclick = toResult;
                function toResult()
                {
                  //for(var i=0; i<courseArr.length;i++)
                  if(obj.selectedIndex!=0)
                  {
                    window.location.href="searchResult.html";
                  }

                  else
                  {
                    alert("This class doesn't exist!");
                    window.location.reload();
                  }

              }


   function autocomplete(inp, arr)
    {
        var currentFocus;

        inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++)
        {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");

            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            b.addEventListener("click", function(e) {

                inp.value = this.getElementsByTagName("input")[0].value;
                getOption();
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {

          currentFocus++;

          addActive(x);
        } else if (e.keyCode == 38) {

          currentFocus--;

          addActive(x);
        } else if (e.keyCode == 13) {

          e.preventDefault();
          if (currentFocus > -1) {

            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {

      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {

      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {

      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  };
}
});
