#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // create a copy of the original array

  for (let value of array) { // iterate over the values of the array
    value = appendString + value; // append the string to each value
    newArray.push(value);
  }

  return newArray; // return the new array
}
