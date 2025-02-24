const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	
  let result = [];
  let subarray = [];
  let sum = 0;

  arr.forEach((num) => {
    if (sum + num > n) {
      result.push(subarray);
      subarray = [];
      sum = 0;
    }
    subarray.push(num);
    sum += num;
  });

  if (subarray.length) result.push(subarray);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
