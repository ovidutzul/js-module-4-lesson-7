// Make the code refactoring using forEach method and arrow functions.

const calculateAverage = (...args) => {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  args.forEach(val => total += val);
  return total / args.length;
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2