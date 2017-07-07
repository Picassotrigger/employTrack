 var config = {
    apiKey: "AIzaSyATOZfqjena5ceI9a6Lh4rpUd5SlJIJ-Tk",
    authDomain: "chart-1d648.firebaseapp.com",
    databaseURL: "https://chart-1d648.firebaseio.com",
    projectId: "chart-1d648",
    storageBucket: "chart-1d648.appspot.com",
    messagingSenderId: "626971278618"
  };
  firebase.initializeApp(config);

 var database = firebase.database()



if(database.exists){

      for (var i = 0; i < database.numChildren(); i++) {
       
        //put code here to append and prepend the info. already on the server into the html
       
      }

      console.log(database);

         
         console.log("stuff is here");
      }

database.ref().on("value", function(snapshot) {

//on child added


 });





  $("button").on("click",function(){


      var name = $("#name").val()
      var role = $("#role").val()
      var start = $("#starDate").val()
      var rate = $("#rate").val()

      database.ref().push({
        name:name,
        role:role,
        start:start,
        rate:rate,
        // dateAdded:database.serverValue.TIMESTAMP 



      });

      console.log(database.child);


    });






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




//checking to see if there is data there




	//this is for user input
	

  
$("button").on("click", function(){



	var searchTerm=$("#searchInput").val();
	var yearBegin=$("#startYear").val();
	var yearEnd=$("#endYear").val();
	// var yearBeginCode=yearBegin+=0101
	// var yearEndCode=yearEnd+=1230
});




//adding stuff to the form in real time if it changed on the server

 





<<<<<<< HEAD
  // var dateStart = start;
  var monthsEmployed = 0;

  function calcMonthsEmployed(start) {
    var months = Math.floor(moment(new Date()).diff(moment(date,"MM/DD/YYYY"),'months',true));
    monthsEmployed = months;
  }

  // var monthlyRate = 10000;
  var totalBill = 0;

  function totalBilling(rate) {
    var total = monthsEmployed * rate;
    totalBill = total;
  }
=======
  // function calcMonthsEmployed() {
  //   // moment([]).diff(moment([2013, 9, 31]), 'months', true)
  // }
>>>>>>> a3df8ca33085a6f108e181e3996cb99d781193e2
