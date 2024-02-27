/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/forks/javascript
Sum of two lowest positive integers
*/

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort(function (a, b) {
      return a - b;
    })
    .slice(0, 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Simple solution
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

// Solution using array destructuring
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
Two to One
*/

function longest(s1, s2) {
  const arr1 = new Set(s1.split("").sort());
  const arr2 = new Set(s2.split("").sort());
  return Array.from(new Set([...arr1, ...arr2].sort())).join("");
}

//
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript
String ends with?
*/

function solution(str, ending) {
  return str
    .split("")
    .reverse()
    .join("")
    .indexOf(ending.split("").reverse().join("")) === 0
    ? true
    : false;
}

//
function solution(str, ending) {
  return str.endsWith(ending);
}

/*
https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript
Stop gninnipS My sdroW
*/

function spinWords(string) {
  return string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

//
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript
Persistent Bugger
*/
function persistence(num) {
  let persistanceCount = 0;
  while (num.toString().split("").length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((accumulator, currentValue) => accumulator * currentValue);
    persistanceCount++;
  }
  return persistanceCount;
}

//
function persistence(num) {
  var times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

/*
https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript
Break camelCase
*/
function solution(string) {
  return string
    .split("")
    .map((letter) => (/[A-Z]/.test(letter) ? " " + letter : letter))
    .join("");
}

//
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

/*
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
Range Extraction
*/
function solution(list) {
  let finalString = "";
  let subSeq = [];
  list.map((element, index) => {
    if (
      Math.abs(element - list[index - 1]) > 1 &&
      Math.abs(element - list[index + 1]) > 1 // || index === 0
    ) {
      parseSubSeq(index);
      if (finalString.charAt(finalString.length - 1) !== "," && index > 0)
        finalString += ",";
      finalString += element + ",";
    } else {
      subSeq.push(element);
      if (Math.abs(element - list[index + 1]) > 1) {
        // finalString += ",";
        parseSubSeq(index);
      }
    }
    if (index == list.length - 1 && subSeq.length) {
      parseSubSeq(index);
    }
  });
  function parseSubSeq(index) {
    let subLength = subSeq.length;
    if (subLength > 2) {
      if (
        finalString.charAt(finalString.length - 1) !== "," &&
        index > 0 &&
        finalString.length
      )
        finalString += ",";
      finalString += `${subSeq.shift()}-${subSeq.pop()},`;
    } else {
      finalString += subSeq.join(",");
      if (finalString.charAt(finalString.length - 1) !== ",")
        finalString += ",";
    }
    if (index === list.length - 1 && subLength >= 2) {
      finalString = finalString.substring(0, finalString.length - 1);
    }
    subSeq = [];
  }
  if (finalString.charAt(finalString.length - 1) === ",")
    finalString = finalString.substring(0, finalString.length - 1);
  return finalString;
}

const test = solution([
  -51, -48, -47, -45, -43, -40, -37, -34, -33, -30, -29, -28,
]);
console.log(test);

//
function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(",")
    : range[0] + "-" + range[range.length - 1];
}

/*
Find the unique number
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript
*/
function findUniq(arr) {
  let unique = {};
  arr.map((num) => (unique[num] = !unique[num] ? 1 : unique[num] + 1));
  return Number(Object.keys(unique).find((key) => unique[key] === 1));
}

//
function findUniq(arr) {
  return arr.find((n) => {
    return arr.indexOf(n) === arr.lastIndexOf(n);
  });
}
