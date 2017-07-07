

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



$(document).ready(function() {
    $("#resultsBox").DataTable({
    	data: data
    });
    
} );




	//this is for user input
	

  
$("button").on("click", function(){


	var searchTerm=$("#searchInput").val();
	var yearBegin=$("#startYear").val();
	var yearEnd=$("#endYear").val();
	// var yearBeginCode=yearBegin+=0101
	// var yearEndCode=yearEnd+=1230
});


 

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

  database = firebase.database()

	$("button").on("click",function(){

  		var name = $("#name").val()
  		var role = $("#role").val()
  		var start = $("#starDate").val()
  		var rate = $("#rate").val()

  		database.ref().push({
  			name:name,
  			role:role,
  			start:start,
  			rate:rate

  		});


  	});



  function calcMonthsEmployed() {
    // moment([]).diff(moment([2013, 9, 31]), 'months', true)
  }
