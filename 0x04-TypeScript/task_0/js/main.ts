interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
 firstName: 'Bona',
 lastName: 'Anslem',
 age: 28,
 location: 'Abuja'
};

const student2: Student = {
 firstName: 'Boniface',
 lastName: 'Agbo',
 age: 38,
 location: 'Lagos'
};

const studentsList: Array<Student> = [student1, student2];

// This html file should contain this commented div element below
//<div id="students-container"></div>

// Renders the table
const renderStudentsTable = ((students: Array<Student>): void => {
  const studentsContainer = document.getElementById('students-container');

  // Create the table element
  const studentsTable = document.createElement('table');

  // Create the table header
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  headerRow.appendChild(headerFirstName);
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerLocation);
  studentsTable.appendChild(headerRow);

  // Create table rows for each student
  students.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    studentsTable.appendChild(row);
  });

  // Append the table to the container
  studentsContainer.appendChild(studentsTable);
});

renderStudentsTable(studentsList);


