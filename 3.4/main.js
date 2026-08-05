//first solution
const twoSum1 = (arr, target) => {
  let l = arr.length;
  for (let i = 0; i < l; i++)
    for (let j = i + 1; j < l; j++) {
      if (arr[i] + arr[j] == target) return [i, j];
    }
};

//second solution
const twoSum2 = (arr, target) => {
  const sortedPairs = arr
    .map((val, index) => [val, index])
    .sort((a, b) => a[0] - b[0]);
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (sortedPairs[low][0] + sortedPairs[high][0] == target)
      return [sortedPairs[low][1], sortedPairs[high][1]];
    else if (sortedPairs[low][0] + sortedPairs[high][0] > target)
      high = high - 1;
    else low = low + 1;
  }
};

//third solution
const twoSum3 = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in hash) return [hash[target - arr[i]], i];
    hash[arr[i]] = i;
  }
};
const arrTest = [2, 5, 8, 11];
console.log(twoSum3(arrTest, 19));
