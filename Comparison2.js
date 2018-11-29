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
	myFunc1();
});

function myFunc1(){
	//document.getElementById("class1").innerHTML = "screw you";
	database = firebase.database();
  	var ref=database.ref('courseData');
  // ref.push({
  //   courseNumber: "CS182EW"
  // });
  	ref.on("value", function(snapshot){
  		var data = snapshot.val();
    	var keys = Object.keys(data);
    	var key1 = localStorage.key1;
    	var key2 = localStorage.key2;
    	for (var i = 0; i < keys.length; i++){
    		if (data[keys[i]].professor == localStorage.prof2) {
    			key2 = i;
    		}
    	}
    	var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Professor: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].professor;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].professor;
		tableRow.appendChild(col2);

		var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Department: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].department;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].department;
		tableRow.appendChild(col2);

		var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Lecture Hours: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].lecHours;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].lecHours;
		tableRow.appendChild(col2);

		var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Outside Hours: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].outHours;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].outHours;
		tableRow.appendChild(col2);

		var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Units: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].units;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].units;
		tableRow.appendChild(col2);

		var addToSchedule = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Add to schedule";
		addToSchedule.appendChild(y);
		document.getElementById("myTable").appendChild(addToSchedule);
		var add1 = document.createElement("td");
		var btn1 = document.createElement("button");
		btn1.innerHTML = "Add";
		add1.appendChild(btn1);
		addToSchedule.appendChild(add1);

		var add2 = document.createElement("td");
		var btn2 = document.createElement("button");
		btn2.innerHTML = "Add";
		add2.appendChild(btn2);
		addToSchedule.appendChild(add2);

	
	// console.log(key1);
 //    		console.log(key2);

	}, function(error){
    console.log("Error: " + error.code);
  	})
}