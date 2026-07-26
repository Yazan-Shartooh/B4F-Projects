export const isOddOrEven = (x) => {
  if (x % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
};

export const isPrime = (x) => {
  let i = 2;
  for (i; i < x / 2; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

