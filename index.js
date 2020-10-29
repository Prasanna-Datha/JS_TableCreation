// *********The window.onload function is called when the window is first shown on the browser **********
window.onload = function () {
  // Creating table element
  var table = document.createElement("table");
  table.setAttribute("id", "userTable"); // Assigning "id" for the table
  table.setAttribute("border", "1"); // Set border attribute for creating borders around the table

  // Create thead element for table
  var thead = document.createElement("thead");
  table.appendChild(thead); // Appending the thead element to the table

  // Creating a row for table header (thead)
  var headerTr = document.createElement("tr");
  thead.appendChild(headerTr); // Appending the thead to the table

  var headers = ["Name", "Age", "Actions"]; // Array of headers used for creating table headers.
  headers.forEach(function (item) {
    var th = document.createElement("th"); // Create th element for header
    var headerText = document.createTextNode(item); // Create text node for showing the headers
    th.appendChild(headerText); // Appending the text node to the th element
    headerTr.appendChild(th); // Appending the th element to the thead of the table
  });

  // Create tbody element for table
  var tbody = document.createElement("tbody");
  table.appendChild(tbody); // Append the tbody to the table

  createRow(tbody);

  // Finally appending the table element to the document body
  document.body.appendChild(table);
};

/* **************** Function to create a new row for the table **************
Note:   This is the basic implementation of table using just javascript createElement function. 
        You can also use insertRow() and insertCell() for creating rows and cells respectively. As these are built in functions provided by javascript.
*/
function createRow(body) {
  // Get total rows present in the table body before inserting new row; Used to check if delete button has to created or not.
  var totalRows = body.rows.length;

  // Create a row using tr tag
  var tr = document.createElement("tr");
  body.appendChild(tr); // append the row to the body element of the table passed as parameter to this function.

  // Create column using td for "Name"
  var nameTd = document.createElement("td");
  tr.appendChild(nameTd); // Append the column to the row create in the previous step
  var nameInput = document.createElement("input"); // Create an input element for taking user input
  nameInput.setAttribute("type", "text"); // Set the input type attribute to text
  nameTd.appendChild(nameInput); // Append the input element to the "Name" column create previously

  // Similarly, create column and input element for "Age" column
  var ageTd = document.createElement("td");
  tr.appendChild(ageTd);
  var ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageTd.appendChild(ageInput);

  // Create a column for adding "+/-" for adding and removing rows respectively
  var actionsTd = document.createElement("td");
  tr.appendChild(actionsTd); // Append the column to the row

  // Creating the "Add" button and attaching a click event listener for adding a new row.
  var addButton = document.createElement("button");
  addButton.setAttribute("type", "button");
  addButton.innerHTML = "+";
  addButton.addEventListener("click", function () {
    createRow(body);
  });
  actionsTd.appendChild(addButton);

  // Checking is the table already has atleast one row inside the table body for appending the "Delete" button.
  if (totalRows > 0) {
    // Creating the "Add" button and attaching a click event listener for adding a new row.
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerHTML = "-";
    deleteButton.addEventListener("click", function (e) {
      var currentTr = this.parentNode.parentNode;
      body.removeChild(currentTr);
    });
    actionsTd.appendChild(deleteButton);
  }
}
