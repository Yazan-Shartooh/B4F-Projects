export function isOddOrEven(x) {
  if (x % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}

export function isPrime(x) {
  let p = 0;
  let i = 1;
  for (i; i <= x; i += 1) {
    if (x % i === 0) p += 1;
  }
  return p;
}
