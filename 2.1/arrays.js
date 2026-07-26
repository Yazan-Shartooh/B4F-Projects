export const arraySorting = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - 1; j++) {
      if (x[j] > x[j + 1]) {
        let temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
};

console.log(arraySorting([5, 6, 9, 1, 13, 2, 20]));
