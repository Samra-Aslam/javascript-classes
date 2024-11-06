//set is collection of unique values same as array but not in order and no duplicate values

let myNumbers = [1,2,3,3,4,5,6,6,7,7,8];
const mySetArr = [...new Set(myNumbers)];
console.log(mySetArr);

//example2;
let myName = "samra";
console.log([... new Set(myName)]);