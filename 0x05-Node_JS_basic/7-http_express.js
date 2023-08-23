const express = require('express');
const fs = require('fs');

const app = express();
const hostname = 'http://127.0.0.1';
const port = 1245;

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const linesOfFile = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentBatch = {};
      const fieldNames = linesOfFile[0].split(',');
      const studentPropNames = fieldNames
        .slice(0, fieldNames.length - 1);
      for (const line of linesOfFile.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentBatch).includes(field)) {
          studentBatch[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentBatch[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentBatch)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      // Create a formatted output string
      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, group] of Object.entries(studentBatch)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        output += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }

      resolve(output);
    }
  });
});

// Define a route for the root path
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Define a route for the "/students" path
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.status(200).send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.status(404).send('Cannot load the database');
    });
});

// Define a catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the Express.js application
app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
