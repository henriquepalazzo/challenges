let mealCost = 12.99;
let tipPercentage = 7;
let tipAmount = Math.round(mealCost * tipPercentage) / 100;
let totalCost = mealCost + tipAmount;

console.log('The total cost of your bill is: ', totalCost, 'Euros');