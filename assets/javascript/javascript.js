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


 var database = firebase.database();


 database.ref().on("value", function(snapshot) {

     if(snapshot.child("person").exists){

         //put code here to append and prepend the info. already on the server into the html
      }




 });

     $("#submit").on("click",function(){

         var name = $("#name").val();
          var role = $("#role").val();
          var start = $("#startDate").val();
          var rate = $("#rate").val();

         database.ref().push({
              name:name,
              role:role,
              start:start,
              rate:rate

         });


     });



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
