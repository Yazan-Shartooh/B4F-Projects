//the first qustion: array average
export const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum / arr.length;
};

//the second question: convert a string to a snake case
export const snakeCase = (str) => {
  return str.toLowerCase().replaceAll(" ", "_");
};

//the third question: convert a string to camel case
export const camelCase = (str) => {
  let temp = str.toLowerCase();
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === " ") {
      temp = temp.replace(temp.charAt(i + 1), temp.charAt(i + 1).toUpperCase());
    }
  }
  return temp.replaceAll(" ", "");
};

//the fourth question: the HCF of two numbers

//the fifth question: convert binary to decimal
export const binaryToDecimal = (bin) => {
  let num = bin;
  let temp = 0;
  let dec = 0;
  for (let i = 0; i < intLength(bin); i++) {
    temp = num % 10;
    dec = temp * Math.pow(2, i) + dec;
    num = Math.floor(num / 10);
  }
  return dec;
};

//the sixth question: basic arthmetic operation
export const calculator = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "error";
      else return num1 / num2;
    default:
      return "undefined";
  }
};

//the seventh question: convert a string to title case
export const titleCase = (str) => {
  let temp = str.toLowerCase();
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === " ") {
      temp = temp.replace(temp.charAt(i + 1), temp.charAt(i + 1).toUpperCase());
    }
  }
  return temp.replace(temp.charAt(0), temp.charAt(0).toUpperCase());
};

//the eighth question: calculate the hypotenuse
export const hypotenuseCalc = (a, b) => {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

//the ninth question: the highest digit in a number
export const highestDigit = (num) => {
  let highest = 0;
  let temp = num;
  let digit = 0;
  for (let i = 0; i < intLength(num); i++) {
    digit = temp % 10;
    if (digit > highest) highest = digit;
    temp = Math.floor(temp / 10);
  }
  return highest;
};

//the tenth question:

// the eleventh question: calculate the factorial
export const factorial = (num) => {
  let fac = 1;
  let temp = num;
  if (num < 0) return "error";
  while (temp > 0) {
    fac = fac * temp;
    temp--;
  }
  return fac;
};

//the twelveth question: convert a number to string with dashes
export const numToStringWithDashes = (num) => {
  let result = "";
  let intArray = String(num).split("");
  for (let i = 0; i < intArray.length; i++) {
    result += intArray[i];
    if (i === intArray.length - 1) break;
    result += "-";
  }
  return result;
};

//the therteenth question: check if the array is sorted
export const checkArraySorting = (arr) => {
  let check = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) check = false;
  }
  return check;
};

//the fourteenth question: calculate the sum of digits
export const sumDigitsNum = (num) => {
  let temp = num;
  let sum = 0;
  for (let i = 0; i < intLength(num); i++) {
    sum = (temp % 10) + sum;
    temp = Math.floor(temp / 10);
  }
  return sum;
};

//the fifteenth question: star rating
export const starRating = (starNum) => {
  let star = "*";
  return star.repeat(starNum);
};

//the sixteenth question: number reverse
export const reverseNum = (num) => {
  let reversed = 0;
  let temp = num;
  let digit = 0;
  for (let i = intLength(num); i > 0; i--) {
    digit = temp % 10;
    reversed = digit * Math.pow(10, i - 1) + reversed;
    temp = Math.floor(temp / 10);
  }
  return reversed;
};

//the seventeenth question: find the ascii
export const charT0Ascii = (char) => {};

//the twenty first question: digits number in an integer
export const intLength = (x) => {
  let i = 0;
  let v = x;
  while (v > 0) {
    v = Math.floor(v / 10);
    i++;
  }
  return i;
};
