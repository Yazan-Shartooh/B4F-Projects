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

// (x + y)^n = x^n y^0 + h1 x^n-1 y^1 + h2 x^n-2 y^2 + ...... + hn-2 x^2 y^n-2 + hn-1 x^1 y^n-1 + x^0 y^n

export const pascalTriangle = (x, y) => {
  if (x == 0 || y == 0 || x == y) return 1;
  else return pascalTriangle(x - 1, y) + pascalTriangle(x - 1, y - 1);
};
