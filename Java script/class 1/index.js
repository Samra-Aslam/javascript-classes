//to change string(which include number) to number


var myNum = "123"
console.log(typeof Number(myNum))  //method1 (added number constructer)
console.log(typeof +myNum);  //method2

//to change number to string

let fav = 123 ;
console.log (typeof String(fav)); //method1 (added string constructer)
console.log(typeof (fav+""));//method2

//to check if a non-empty string is truthy or falsy in javascript , we can use if statement directly.

var myname = -5; //samra//null//0//" "//
if(myname){
    console.log("this is truthy value")
}else{
    console.log("this is falsy value") 
}

//*parseint: is use to parse string and convert it to an integer(whole number).it ignore decimels
const str = "42";
console.log(parseInt(str));
//example2

const str1 = "42.8";
console.log(parseInt(str1));

//*parsefloat: parsefloat is use to parse a string and convert it to a 
//floating-point number(decimal number)

const str11 = "42.8";
console.log(parseFloat(str11));

//other examples
console.log(parseInt("123"));
console.log(parseInt("123", 10));
console.log(parseInt(" 123  "));
console.log(parseInt("077"));//ignore 0
console.log(parseInt("1.9"));
console.log(parseFloat("077"));//ignore 0
console.log(parseFloat("1.9"));
console.log(parseInt("&123"));  //Nan
console.log(parseInt("-123"));
console.log(parseInt("xyz"));  //NaN