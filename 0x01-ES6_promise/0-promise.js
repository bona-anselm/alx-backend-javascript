#!/usr/bin/node

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = 0;
    if (x === 0) {
      resolve('Ok');
    } else {
      const error = new Error('Error');
      reject(error);
    }
  });
}
