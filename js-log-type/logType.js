// const data = 5
const data = 5*"Bla"
// const data = "Bla"
// const data = true
// const data = () => {}
// const data = {Bla: 1}
// const data = [1,2,3]
// const data = undefined
// const data = null
// const data = 1n

switch(typeof data) {
    case "undefined":
        console.log('undefined!');
        break;
    case "object":
        if (data instanceof Array) {
            console.log('array!');
        } else if (data === null){
            console.log('null!');
        } else {
            console.log('object!');
        }
        break;
    case "function":
        console.log('function!');
        break;
    case "number":
        console.log(isNaN(data) ? 'not a number!' : ' number!');
        break;
    case "string":
        console.log('string!');
        break;
    case "boolean":
        console.log('boolean!');
        break;
    case "bigint":
        console.log('bigint!');
        break;
    default:
        console.log("I have no idea!");
}