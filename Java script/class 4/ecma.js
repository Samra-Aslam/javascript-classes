//ECMA script2015;
//use of let
//use of const
//templet literals
//default parameter
function sum(a=5,b=6){   //default values of a and b was assigned
    return a + b;
}
console.log(sum(56,88));

//fat arrow functions;
const sum3 =(c,d)=>{          
    return c -d;              
}
console.log(sum3(7,9));        

//if there is only one parameter , the parentheses() around parameter list can be omitted.

let fun= a =>{
    return a*a;
}
console.log(fun(5));

//if the function body consist of single expression, the braces{} and
 //return keyword can be omitted.

const summ =(r,b)=> `the sum of ${r} and ${b} is ${r +b}`;

console.log(summ(6,2));

//if there is no parameter , use an empty set of parentheses();

const greet=()=>{
    console.log("hellow world");
}
greet();

