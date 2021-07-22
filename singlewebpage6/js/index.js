/* 
  index.js
*/
$(document).ready(function() {
  
  "use strict";
  var resultList = $("#resultList");
  resultList.text("... Result");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  function fetchdata(id) {
    
    var peopleId = id;

    if (peopleId) {

      

      var starWarApiSearch = "https://swapi.dev/api/people/" + peopleId;
      //using await key word for api request
      $.get(starWarApiSearch)
        .success(function(r) {
          displayResults(r);
        })
        .fail(function(err) {
          console.log("Failed to query Star war API");
        })
        .done(function() {
          //
        });
    }

    return false;
  };

  function displayResults(results) {
   
    resultList.append(JSON.stringify(results));


  }
var arr=[1,2,3]
arr.forEach(id=>fetchdata(id))
});
