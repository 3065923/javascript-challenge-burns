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
