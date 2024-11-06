//Math.round()   //rounds to the nearest integer//4.5 to 5//4.1 to 4
//Math.floor()   //round dowm to nearest integer// 4.9 to 4//4.4 to 4
//Math.ceil()    //always round up to nearest integer//4.2 to 5// 4.9 to 5
//Math.abs()    //ststic method return absolute value of a number(number zero se kitny distance pr ha)
//Math.trunc()  //return the integer part of value //3.7 to 3

let number = 45.4;
console.log(Math.round(number));
console.log(Math.floor(number));  //if negative value pass just add - to answer//-3
console.log(Math.ceil(number));
console.log(Math.abs(number));
console.log(Math.trunc(number));    //same as Math.floor but if negative value pass it round off //4


//exponential and logarithnic functions;=========================
//Math.pow(); //return the value of x to the power of y;

console.log(Math.pow(2,3));//return answer of //2^3
console.log((2**3)); //return same

//Math.sqrt()//return square root of value

console.log(Math.sqrt(25));

//Math.log()//return logarithm of x

console.log(Math.log(8));

//Math.log2()//return the base 2 logarithm of x

console.log(Math.log2(2));

//Math.random()//return a random number between 0 and 1;

console.log(Math.random());// between 0 and 1
console.log(Math.random()*100);// between 1 and 99
//can use math functions or .tofixed with it to ignore decimals;
console.log(Math.random().toFixed(3));