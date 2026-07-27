export const reversedNum = (x) => {
  let v = x;
  let temp = 0;
  let result = 0;
  while (v > 0) {
    temp = v % 10;
    result = result * 10 + temp;
    v = Math.floor(v / 10);
  }
  return result;
};

export const isSymmetric = (x) => {
  if (x === reversedNum(x)) return true;
  else return false;
};

export const intLength = (x) => {
  let i = 0;
  let v = x;
  while (v > 0) {
    v = Math.floor(v / 10);
    i++;
  }
  return i;
};

export const isAutomorphic = (n) => {
  let num = n;
  let sqr = n * n;
  h = h % Math.pow(10, intLength(n));
  if (h == n) {
    return true;
  } else return false;
};

export const isNeon = (x) => {
  let num = x;
  let sqr = x * x;
  let result = 0;
  let i = intLength(sqr);
  for (i; i > 0; i--) {
    result = (sqr % 10) + result;
    sqr = Math.floor(sqr / 10);
  }
  if (num === result) {
    return true;
  } else {
    return false;
  }
};

export const isDeserium = (x) => {
  let num = x;
  let i = intLength(num);
  let result = 0;
  let temp = 0;
  for (i; i > 0; i--) {
    temp = num % 10;
    result = Math.pow(temp, i) + result;
    num = Math.floor(num / 10);
  }
  if (result === x) {
    return true;
  } else {
    return false;
  }
};
