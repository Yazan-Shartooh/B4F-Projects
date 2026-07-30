export const graphVisiting = (arr, colSum) => {
  let tempSum = colSum;
  let visiting = [];
  for (let i = 0; i < colSum.length; i++) {
    for (let j = 0; j < colSum.length; j++) {
      if (tempSum[j] == 0) {
        visiting.push(j);
        let targetrow = arr[j];
        tempSum = tempSum.map((num, index) => num - targetrow[index]);
        tempSum[j] = -1;
        break;
      }
    }
  }
  return visiting;
};

export const columsSum = (arr) => {
  const sum = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum[i] += arr[j][i];
    }
  }
  return sum;
};

let arr = [
  [0, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
];
let sum = columsSum(arr);
console.log(graphVisiting(arr, sum));
