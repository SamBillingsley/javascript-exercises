// const sumAll = function (num1, num2) {
//   const arr = [];
//   let total = 0;
//   if (
//     Number.isInteger(num1) &&
//     Number.isInteger(num2) &&
//     num1 < num2 &&
//     num1 > 0 &&
//     num2 > 0
//   ) {
//     for (i = num1; i <= num2; i++) {
//       arr.push(i);
//     }
//   } else if (
//     Number.isInteger(num1) &&
//     Number.isInteger(num2) &&
//     num2 < num1 &&
//     num1 > 0 &&
//     num2 > 0
//   ) {
//     for (i = num2; i <= num1; i++) {
//       arr.push(i);
//     }
//   } else {
//     return "ERROR";
//   }
//   arr.forEach((item) => {
//     total += item;
//   });
//   return total;
// };

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(10, "90"));
// Do not edit below this line
module.exports = sumAll;
