function resetForm() {
  document.getElementById("registrationForm").reset();
}
function insertData() {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var address = document.getElementById("address").value.trim();
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    address === ""
  ) {
    alert("All fields are required");
    return;
  }
  var nameP = /^[A-Za-z]+$/;
  if (!nameP.test(firstName)) {
    alert("First Name must contain only letters");
    return;
  }
  if (!nameP.test(lastName)) {
    alert("Last Name must contain only letters");
    return;
  }
  var phoneP = /^\d+$/;
  if (!phoneP.test(phone)) {
    alert("Phone must contain only numbers");
    return;
  }
  var table = document
    .getElementById("registrationTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.innerHTML = phone;
  cell5.innerHTML = address;
  cell6.innerHTML =
    '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';
  resetForm();
}
function editRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");
  document.getElementById("firstName").value = cells[0].innerHTML;
  document.getElementById("lastName").value = cells[1].innerHTML;
  document.getElementById("email").value = cells[2].innerHTML;
  document.getElementById("phone").value = cells[3].innerHTML;
  document.getElementById("address").value = cells[4].innerHTML;
  row.parentNode.removeChild(row);
}
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
