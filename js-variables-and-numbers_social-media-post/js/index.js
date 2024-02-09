console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = 'The amazing machine that brings you back to the future.';
const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nunc porttitor, lobortis elit a, lacinia elit. Ut egestas elementum neque. Pellentesque finibus arcu quam, sed ullamcorper ex porta pulvinar. Quisque faucibus id arcu sed pellentesque. Duis magna augue, porta luctus dolor id, maximus mattis nisl. Sed interdum dignissim hendrerit. Quisque non sodales sem. Cras vehicula, justo vitae porta eleifend, odio arcu tempus sapien, at aliquam neque odio vel libero. Vivamus elementum viverra laoreet.';
let likes = 828;
const userFullName = 'Henrique Palazzo';
const isReported = 0;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log('Title: ', title);
console.log('Text: ', text);
console.log('Likes:', likes);
console.log('User Full Name: ', userFullName);
console.log('Is Reported: ', isReported);

likes ++;

console.log('Likes updated: ', likes);

// --^-- write your code here --^--
