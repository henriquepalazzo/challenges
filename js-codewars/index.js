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


/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
Two to One
*/

function longest(s1, s2) {
    const arr1 = new Set(s1.split('').sort())
    const arr2 = new Set(s2.split('').sort())
    return Array.from(new Set([...arr1, ...arr2].sort())).join('')
  }

//
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript
String ends with?
*/

function solution(str, ending){
    return str.split('').reverse().join('').indexOf(ending.split('').reverse().join('')) === 0 ? true : false
}

//
function solution(str, ending){
    return str.endsWith(ending);
}

/*
https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript
Stop gninnipS My sdroW
*/

function spinWords(string){
    return string.split(" ").map((word) => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ")
}

//
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}