// from data.js
var tableData = data;
// console.log(tableData)

// Populate the table with data
// Get a reference to the tbody
var tbody = d3.select("tbody");

function CreateTable(tdata) {
  // Clear table
  tbody.html("");
  tdata.forEach(entry => {
    console.log(tdata);
    var row = tbody.append("tr");
    Object.values(entry).forEach((value) => {
    //   console.log(key, value);
//       // Append a cell to the row for each value
//       // in the alien data object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

function ClickButton(){
  // submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

   // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // var inputElement = d3.select("#city");
    // var inputElement = d3.select("#state");
    // var inputElement = d3.select("#country");
    // var inputElement = d3.select("#shape");
    
    var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");
    // var inputValue = inputElement.property("value");

  //  console.log(inputValue);
  //  console.log(tableData);

  var filterData = tableData.filter(instance => instance.datetime === inputValue);
  // var filterDataCity = filterData.filter(instance => instance.city === inputValue);
  // var filterDataState = filterDataCity.filter(instance => instance.state === inputValue);
  // var filterDataCountry = filterDataState.filter(instance => instance.country === inputValue);
  // var filterDataShape = filterDataCountry.filter(instance => instance.shape === inputValue);
   
  CreateTable(filterData); 
  //  console.log(filterData);
// });
}

// Activate filter
var submit = d3.selectAll("#filter-btn");
submit.on("click", ClickButton);

CreateTable(tableData);

