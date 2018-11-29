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
	database = firebase.database();
  	var ref=database.ref('courseData');

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
		y.innerHTML = "Projects: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].projects;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].projects;
		tableRow.appendChild(col2);
		col1.align = "center";
		col2.align = "center";

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
		col1.align = "center";
		col2.align = "center";

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
		col1.align = "center";
		col2.align = "center";

		var tableRow = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Essays: ";
		tableRow.appendChild(y);
		document.getElementById("myTable").appendChild(tableRow);
		var col1 = document.createElement("td");
		col1.innerHTML = data[keys[key1]].essays;
		tableRow.appendChild(col1);
		var col2 = document.createElement("td");
		col2.innerHTML = data[keys[key2]].essays;
		tableRow.appendChild(col2);
		col1.align = "center";
		col2.align = "center";

		var addToSchedule = document.createElement("tr");
		var y = document.createElement("td");
		y.innerHTML = "Add to schedule";
		addToSchedule.appendChild(y);
		document.getElementById("myTable").appendChild(addToSchedule);
		var add1 = document.createElement("td");
		var btn1 = document.createElement("button");
		btn1.style.height = "35px";
        btn1.style.width = "100px";
        btn1.style.backgroundColor = "#CEC973";
        btn1.style.fontSize= "22px";
        btn1.style.fontFamily = "'Mali',serif";
		btn1.innerHTML = "Add";
		add1.appendChild(btn1);
		addToSchedule.appendChild(add1);
		var add2 = document.createElement("td");
		var btn2 = document.createElement("button");
		btn2.style.height = "35px";
        btn2.style.width = "100px";
        btn2.style.backgroundColor = "#CEC973";
        btn2.style.fontSize= "22px";
        btn2.style.fontFamily = "'Mali',serif";
		btn2.innerHTML = "Add";
		add2.appendChild(btn2);
		addToSchedule.appendChild(add2);
		add1.align = "center";
		add2.align = "center";

		displayColor();

	}, function(error){
    console.log("Error: " + error.code);
  	})
}

function displayColor(){
	var table = document.getElementById("myTable");
	//console.log(parseInt(table.rows[2].cells[1].innerHTML));
	var workLoad1 = parseInt(table.rows[2].cells[1].innerHTML) + parseInt(table.rows[5].cells[1].innerHTML);
	var workLoad2 = parseInt(table.rows[2].cells[2].innerHTML) + parseInt(table.rows[5].cells[2].innerHTML);
	var weeklyHour1 = parseInt(table.rows[3].cells[1].innerHTML) + parseInt(table.rows[4].cells[1].innerHTML);
	var weeklyHour2 = parseInt(table.rows[3].cells[2].innerHTML) + parseInt(table.rows[4].cells[2].innerHTML);
	if (workLoad1 > workLoad2){
		//console.log("greater");
		for(var i = 0; i < table.rows.length; i++){
			table.rows[i].cells[1].style.color = "#FFA500";
			table.rows[i].cells[2].style.color = "#32CD32";
		}		
	}
	else if (workLoad1 == workLoad2){
		if (weeklyHour1 > weeklyHour2){
			for(var i = 0; i < table.rows.length; i++){
				table.rows[i].cells[1].style.color = "#FFA500";
				table.rows[i].cells[2].style.color = "#32CD32";
			}
		}
		else if (weeklyHour1 < weeklyHour2){
			for(var i = 0; i < table.rows.length; i++){
				table.rows[i].cells[1].style.color = "#32CD32";
				table.rows[i].cells[2].style.color = "#FFA500";
			}	
		}
		else{
			for(var i = 0; i < table.rows.length; i++){
				table.rows[i].cells[1].style.color = "#FF69B4";
				table.rows[i].cells[2].style.color = "#FF69B4";
			}	
		}	
	}
	else{
		for(var i = 0; i < table.rows.length; i++){
			table.rows[i].cells[1].style.color = "#32CD32";
			table.rows[i].cells[2].style.color = "#FFA500";
		}	
	}
}