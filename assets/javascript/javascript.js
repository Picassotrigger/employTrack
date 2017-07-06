
	//this is for user input
	

  
$("button").on("click", function(){


	var searchTerm=$("#searchInput").val();
	var yearBegin=$("#startYear").val();
	var yearEnd=$("#endYear").val();
	// var yearBeginCode=yearBegin+=0101
	// var yearEndCode=yearEnd+=1230








var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "e85e5e2d0c1743efa02fc2149358728e",
  		'q': searchTerm,
  		'begin_date': yearBegin,
  		'end_date': yearEnd
		});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(responce){


	


	
console.log(responce);


});





});
