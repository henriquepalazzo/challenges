/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/forks/javascript
Sum of two lowest positive integers
*/

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort(function(a, b){return a - b}).slice(0,2).reduce((accumulator, currentValue) => accumulator + currentValue)
}

// Simple solution
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

// Solution using array destructuring
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

