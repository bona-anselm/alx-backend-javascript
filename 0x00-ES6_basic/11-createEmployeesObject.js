#!/usr/bin/node

export default function createEmployeesObject(departmentName, employees) {
  return `{ ${departmentName}: [ ${employees.map((value) => `'${value}'`).join(', ')} ] }`;
}
