//==========================   DATABASE   ===============================//
 var config = {
    apiKey: "AIzaSyATOZfqjena5ceI9a6Lh4rpUd5SlJIJ-Tk",
    authDomain: "chart-1d648.firebaseapp.com",
    databaseURL: "https://chart-1d648.firebaseio.com",
    projectId: "chart-1d648",
    storageBucket: "chart-1d648.appspot.com",
    messagingSenderId: "626971278618"
  };
  firebase.initializeApp(config);

 var database = firebase.database();





//==========================   VARIABLES   ===============================//


  var monthsEmployed = 0;

  var totalBill = 0;


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


//==========================   FUNCTIONS   ===============================//


function calcMonthsEmployed(start) {
  var months = Math.floor(moment().diff(moment(start,"MM/DD/YYYY"),'months',true));
  monthsEmployed = months;
  return months;
}

function totalBilling(rate) {
  var total = monthsEmployed * rate;
  console.log(total);
  return total;
}


  database = firebase.database();





//==========================   MAIN   ===============================//
// if(database.exists){

//       for (var i = 0; i < database.numChildren(); i++) {

//         //put code here to append and prepend the info. already on the server into the html

//       }

//       console.log(database);


//          console.log("stuff is here");
//       }


database.ref().on("value", function(snapshot) {

//on child added


 });

database.ref().on("child_added", function(childSnapshot) {
  
  var temp= [];
  temp.push(childSnapshot.val().name);
  temp.push(childSnapshot.val().role);
  temp.push(childSnapshot.val().start);
  temp.push(calcMonthsEmployed(childSnapshot.val().start));
  
  temp.push(childSnapshot.val().rate);
  temp.push(totalBilling(childSnapshot.val().rate));
  console.log(temp);
  data.push(temp);
  console.log(data);

  
    $("#resultsBox").DataTable({
      data: data
    });
});    




  $("button").on("click",function(){


      var name = $("#name").val().trim();
      var role = $("#role").val().trim();
      var start = $("#startDate").val().trim();
      var rate = $("#rate").val().trim();

      console.log(start);

      database.ref().push({
        name:name,
        role:role,
        start:start,
        rate:rate,
        // dateAdded:database.serverValue.TIMESTAMP



      });

    


    });









