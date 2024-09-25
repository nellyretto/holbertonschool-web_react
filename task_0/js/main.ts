interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Saminamina",
    lastName: "EhEh",
    age: 777,
    location: "Africa",
}

const student2: Student = {
    firstName: "WakaWaka",
    lastName: "EhEh",
    age: 777,
    location: "Africa",
}

const studentList: Student[] = [student1, student2]

// Function to render the table
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create and append the header cells
    const headerFirstName = document.createElement('th');
    headerFirstName.textContent = 'First Name';
    const headerLocation = document.createElement('th');
    headerLocation.textContent = 'Location';

    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);

    // Loop through the studentList array and create rows
    students.forEach(student => {
        const row = document.createElement('tr');

        const cellFirstName = document.createElement('td');
        cellFirstName.textContent = student.firstName;
        const cellLocation = document.createElement('td');
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