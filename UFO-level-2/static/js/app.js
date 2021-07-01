// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");




function BuildTable(Data) {
  tbody.html("");
  Data.forEach((alienSightings) => {
    var row = tbody.append("tr");
    Object.entries(alienSightings).forEach(([key, value]) => {
      var rowData = row.append("td");
      rowData.text(value);
    });
  });
}




// empty dictionary will help keep track of filters that have been attributed 
var filtersUsed = {};

// function to create filters
function FilterData() {
    // Prevent the page from refreshing
  d3.event.preventDefault();

  // get value property of 
  var inputFilter = d3.select(this).select("input");
  console.log(inputFilter);


  // Get the value property of the input element
  var inputFilterValue = inputFilter.property("value");
  console.log(inputFilterValue);
  // console.log(inputFilter.property("value"));



  // use .attr to assign new filter ids to filtersUsed dict 
  var inputFilterId = inputFilter.attr("id");
  console.log(inputFilterId);

  // add/delete from filters dict using if
  if (inputFilterValue) {
    filtersUsed[inputFilterId] = inputFilterValue;
  }
  else {
    delete filtersUsed[inputFilterId];
  }

  // call updateFilterTable function in order to create newly filtered table with chosen filters
  updateFilterTable(filtersUsed);
  console.log(filtersUsed);

}

function updateFilterTable() {
  // when this is called                      
  let filteredData= tableData;
  console.log(filteredData);

  Object.entries(filtersUsed).forEach(([key, value]) => {
    filteredData= filteredData.filter(row => row[key] === value);

  });

  
  BuildTable(filteredData);
}

d3.selectAll(".filter").on("change", FilterData);

BuildTable(tableData);