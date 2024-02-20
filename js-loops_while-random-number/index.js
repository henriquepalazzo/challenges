console.clear();

// `while` loop

let number = 0;
let count = 0;

while (number <= 0.9) {
  number = Math.random()
  console.log(number.toFixed(2));
  count ++
}

console.log(
  `The number that ended the loop was ${number.toFixed(2)} and it took ${count} rounds to do this!`
);
