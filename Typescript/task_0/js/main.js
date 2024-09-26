var student1 = {
    firstName: "Saminamina",
    lastName: "EhEh",
    age: 777,
    location: "Africa",
};
var student2 = {
    firstName: "WakaWaka",
    lastName: "EhEh",
    age: 777,
    location: "Africa",
};
var studentList = [student1, student2];
// Function to render the table
function renderTable(students) {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    // Create and append the header cells
    var headerFirstName = document.createElement('th');
    headerFirstName.textContent = 'First Name';
    var headerLocation = document.createElement('th');
    headerLocation.textContent = 'Location';
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);
    // Loop through the studentList array and create rows
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var cellFirstName = document.createElement('td');
        cellFirstName.textContent = student.firstName;
        var cellLocation = document.createElement('td');
        cellLocation.textContent = student.location;
        row.appendChild(cellFirstName);
        row.appendChild(cellLocation);
        table.appendChild(row);
    });
    // Append the table to the body
    document.body.appendChild(table);
}
// Call the function to render the table
renderTable(studentList);
