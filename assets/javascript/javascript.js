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


//checking to see if there is data there

if(snapshot.child().exists){

      for (var i = 0; i < database.childNum(); i++) {
       
        //put code here to append and prepend the info. already on the server into the html
       
      }

         
         console.log("stuff is here")
      }





//adding stuff to the form in real time if it changed on the server

 database.ref().on("value", function(snapshot) {

//on child added


 });




//submitting children to the server

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



  function calcMonthsEmployed() {
    // moment([]).diff(moment([2013, 9, 31]), 'months', true)
  }
