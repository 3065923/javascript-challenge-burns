// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
// table.attr("class", "table table-striped");


// var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

// // Iterate through each student/grade pair
// tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {

//   // Append one table row per student/grade
//   var row = tbody.append("tr");

//   // append one cell for the student and one cell for the grade
//   row.append("td").text(datetime);
//   row.append("td").text(city);
//   row.append("td").text(state);
//   row.append("td").text(country);
//   row.append("td").text(shape);
//   row.append("td").text(durationMinutes);
//   row.append("td").text(comments);
// });


tableData.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
      var rowData = row.append("td");
      rowData.text(value);
    });
  });



// // testing
// function filteredTableFunction(sightings) {
//     return sightings.datetime ==inputValue;
// }

// var testTableFilteredMaybe= tableData.filter(filteredTableFunction);
// console.log(testTableFilteredMaybe)




// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filter-form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredData);

//   select all rows that exist in the table so you may filter
  var filterRow = d3.select("tr");


//   testing filter table
  function filteredTableFunction(sightings) {
    return sightings.datetime ==inputValue;
  }


  var tableFiltered= tableData.filter(filteredTableFunction);
  console.log(tableFiltered);

  tableFiltered.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
      var rowData = row.append("td");
      rowData.text(value);
    });
  });



}
