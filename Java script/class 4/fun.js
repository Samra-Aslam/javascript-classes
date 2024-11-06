//functions(block of reuseable code)
function sum(a,b){
    return a + b;
}
console.log(sum(5,8));
console.log(sum(10,16));
console.log(sum(50,81));

//write a javascript program that defines a function called greet to wellcome individuals to the
//thapa technical js course , the fuction should take name parameter and output the message "hello [name]"
//wellcome to thapa technical js course, call the function twice once with the argument "vinod" , and once with argument 
//" ram".

function greet(name){
return `hellow ${name}, wellcome to thapa technical js course.`
}
console.log(greet("vinod"));
console.log(greet("ram"));

//anonymous function;
//an anonymous function is a function without a name
//it can be created using either a function expression(in variable, as in below example)
//or a function declaration without a specified name.


var result= function(x,y){
    console.log(x + y);
}
result(5,2);

//IIFE; immediately invoked function expression;
//we dont call it, it run automatically on loading of page/
//it is added in ()
var run =(function(e,f){
    console.log( e + f);
})(5,7);

