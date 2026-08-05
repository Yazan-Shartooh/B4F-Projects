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
export const hfc = (num1, num2) => {
  if (num1 === num2) return num1;
  else if (num1 < num2) return hfc(num2, num1);
  else return hfc(num2, num1 - num2);
};

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
export const vowelsExtract = (str, n) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.slice(0, n).join("") : "No Vowels";
};

// the eleventh question: calculate the factorial
export const factorial = (num) => {
  if (num === 1) return 1;
  else return num * factorial(num - 1);
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
    if (arr[i] > arr[i + 1]) check = false;
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

//the eighteenth question: replace vowels with character\
export const replaceVowels = (str, char) => {
  return str.replaceAll(/[aeiou]/gi, char);
};

//the ninteenth question: lines parellal
export const calcSlope = (arr) => {
  return (arr[3] - arr[1]) / (arr[2] - arr[0]);
};
export const parallelLines = (arr1, arr2) => {
  if (calcSlope(arr1) === calcSlope(arr2)) return "Parallel";
  else return "Not Parallel";
};

//the twentyth question: array sum
export const arrayElementsSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
};

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

//the twenty second question: Fibonacci number.
export const fibonacci = (num) => {
  if (num < 2) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
};

//the twenty third question: mean of all digits in a number.
export const numDigitsMean = (num) => {
  return sumDigitsNum(num) / intLength(num);
};

//the twenty fourth question: the largest swap.
export const theLargestSwap = (num) => {
  if (num > reverseNum(num)) return true;
  else return false;
};

//the twenty fifth question: perfect number
export const perfectNumCheck = (num) => {
  let dividors = 0;
  for (let i = 1; i < num / 2 + 1; i++) {
    if (num % i === 0) dividors += i;
  }
  if (num === dividors) return "perfect";
  else return "Not Perfect";
};

//the twenty sixth question: vehicle check
export const vehicleCheck = (wheels) => {
  switch (wheels) {
    case 2:
      return "Two-wheeler";
    case 4:
      return "Four-wheeler";
    default:
      return "Invalid";
  }
};
