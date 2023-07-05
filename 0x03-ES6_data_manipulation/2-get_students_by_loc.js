#!/usr/bin/node

export default function getStudentsByLocation(students, city) {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
