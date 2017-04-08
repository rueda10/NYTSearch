

// upon click of the search button
// prevent the page reload thing with that command prevent().default
// get the inputs from the blanks
// pass them to url variable
// pass the url variable to the ajax call
// parse the results into the format we want
// send the results to the html
// upon click of the clear results button
// clear out the inputs and wait for the search button click

var aVariable;

$("#search").on("click", function (event) {
  event.preventDefault();
  var searchTerm = $("#searchTerm").val();
  if (searchTerm === ""){
    return false;
    // put in something to tell user to freaking put something in the blank before clicking
  }

  var numberOfRecords = $("#numberOfRecords").val(); // DB team should have a default in there
  var startYear = $("#startYear").val();
  var endYear = $("#endYear").val();

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  url += "?" + "api-key=b3b4ba7816ee49c9aeebb09ed6c1ed02" + "&q=" + searchTerm;

  if (startYear != "") {
    url += "&begin_date=" + startYear;
  }

  if (endYear != "") {
    url += "&end_date=" + endYear;
  }

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    var allDocuments = result.response.docs;

    // loop from 0 to numberOfRecords-1

    var documentToShow = allDocuments[i].headline.main;


  }).fail(function(err) {
    throw err;
  });
});



