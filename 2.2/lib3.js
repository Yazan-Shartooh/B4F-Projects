import { intLength, vowelsExtract } from "./lib2.js";
import { map } from "./data.js";

//question one: count the number of even and odd digits
export const evenOddCount = (num) => {
  let l = intLength(num);
  let temp = num;
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < l; i++) {
    if (temp % 2 == 0) evenCount += 1;
    else oddCount += 1;
    temp = Math.floor(temp / 10);
  }
  return [evenCount, oddCount];
};

//question two: Pascal Case
export const pascalCase = (str) => {
  let temp = str.toLowerCase();
  temp = " " + temp;
  for (let i = 0; i < str.length; i++) {
    if (temp[i] == " ") {
      temp = temp.replace(temp.charAt(i + 1), temp.charAt(i + 1).toUpperCase());
    }
  }
  return temp.replaceAll(" ", "");
};

// question three: the difference between two colors
export const twoColorDiff = (col1, col2) => {
  return Math.sqrt(
    Math.pow(col1[0] - col2[0], 2) +
      Math.pow(col1[1] - col2[1], 2) +
      Math.pow(col1[2] - col2[2], 2),
  );
};

//question four: duration in minutes
export const durationInMinutes = (start, end) => {
  let startNum = parseInt(start.replace(":", ""), 10);
  let endNum = parseInt(end.replace(":", ""), 10);
  let startMinutes = 60 * Math.floor(startNum / 100) + (startNum % 100);
  let endMinutes = 60 * Math.floor(endNum / 100) + (endNum % 100);
  return endMinutes - startMinutes;
};

//question five: union of two aarrays
export const arrayUnion = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) continue;
    arr2.push(arr1[i]);
  }
  return arr2.sort((a, b) => a - b);
};

//question six: two arrays intersection
export const arraysIntersection = (arr1, arr2) => {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) intersection.push(arr1[i]);
  }
  return intersection.sort((a, b) => a - b);
};

//question seven: cryptogram
export const cryptogram = (str, map) => {
  let lower = str.toLowerCase();
  let temp = "";
  for (let i = 0; i <= str.length; i++) {
    if (lower[i] in map) temp = temp.concat(map[lower[i]]);
  }
  return temp;
};

//question eight: vowels and consonants from the string
export const vowelsConsonants = (str) => {
  let temp = str.toLowerCase();
  let vowels = vowels.vowelsExtract(str, str.length);
  let consonants = "";
};
