

var data =[[
				"Joseph",
				"System Architect",
				"04/04/04",
				"100",
				"2000",
				"1000000"
				],
			[
				"Fred",
				"Architect",
				"06/06/06",
				"100",
				"2000",
				"1000000"
			]];








	//this is for user input
	

  



 

// Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATOZfqjena5ceI9a6Lh4rpUd5SlJIJ-Tk",
    authDomain: "chart-1d648.firebaseapp.com",
    databaseURL: "https://chart-1d648.firebaseio.com",
    projectId: "chart-1d648",
    storageBucket: "chart-1d648.appspot.com",
    messagingSenderId: "626971278618"
  };
  firebase.initializeApp(config);

  database = firebase.database();

	$("#submit").on("click",function(){

  		var name = $("#name").val().trim();
  		var role = $("#role").val().trim();
  		var start = $("#starDate").val().trim();
  		var rate = $("#rate").val().trim();

  		database.ref().push({
  			name:name,
  			role:role,
  			start:start,
  			rate:rate

  		});


  	});

database.ref().on("child_added", function(childSnapshot) {
  
  var temp= [];
  temp.push(childSnapshot.val().name);
  temp.push(childSnapshot.val().role);
  temp.push(childSnapshot.val().startDate);
  temp.push(childSnapshot.val().rate);
  console.log(temp);
  data.push(temp);
  console.log(data);

  
    $("#resultsBox").DataTable({
      data: data
    });
});    


  function calcMonthsEmployed() {
    // moment([]).diff(moment([2013, 9, 31]), 'months', true)
  }
