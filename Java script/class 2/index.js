//operators
//Assignment operators

//Assignment operator in programming are symbols used to assign values to variables
//they take the value on the right side of the operator and assign it to the variable on the left side.

//example
let myName = "samra"; 

//Arithmetic operators in programming perform basic mathematical 
//operations on variables or values . they include additions , substraction,
//multiplication, division, and modulus.

             //addition

let x = 5;
let y = 14;
let sum = x + y
console.log(sum);
console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(2));

           //substraction
let sub = y - x 
console.log(sub);

            //multiplication
console.log(x *y);
console.log("hello" * 4);

         //division
console.log(y/2);
console.log("hello"/2);

         //modulus

console.log(y%2);

//comparison operators;
//comparsion operators are used to compare values and return a boolean(true or false);

        //Equal(==) compare values only without considering type.

console.log(5==5);
console.log("5"==5);

           //strict Equal(===) compare values and consider type.

console.log(5===5);
console.log("5"===5);

           //Equal(!=) compare values are not equal compare type also.

console.log(5!=5);
console.log("5"!=5);

          //Greater than or less than (not consider type).

console.log(5>5);
console.log("10">5);
console.log("samra">5);
console.log(5<"10");
console.log("samra"<5);
 
              //Greater than and equal to/less than and equal to(not consider type).

console.log(5>=5);
console.log("5">=5);
console.log("10"<=14);
console.log("samra" <=5);

//logical operators;
//* there are three main logical operators; && (logical AND ), ||(logical OR) and ! (logical NOT);
             //LOGICAL &&(both conditions must be true)

var a = 5;
var c = 10;
console.log(a > 0 && c > 0);
console.log(a > 8 && c > 8);

                      //LOGICAL ||(any one conditions is be true)


console.log(a > 0 || c > 0);
console.log(a > 8 || c > 8);

                        //LOGICAL ! ; return true if the operand is false, and return false if the operand
                        //is true,


var isOpen = false;
console.log(!isOpen);

var isClosed = true;
console.log(!isClosed);

//Tricky Questions;
//1;   write a program that determines if a person is eligible to drive
//based on their age being greater than or equal to 18 and having a valid driver license?

var age = 18;
var hadDrivingLicense = true;
if(age >=18 && hadDrivingLicense ===true){
    console.log(" you are eligible to drive");
}else{
    console.log("not eligible to drive");
}

//ternary operator;

//method2   ternary operator
let result = age >=18 ? "eligible" : "not eligible";
console.log(result);

//question2; let say you have a variable score representing students exams scores . if the score is 
//greater than or equal to 60. the student passes. otherwise they fail, use conditional (ternary) operator
//to determine the result and store it in variable called result . log the result to console?

let score = 67;
let result1 = score >= 60? "passes": "fail";
console.log(result1);

//Tricky questions;
console.log("5" - 3);
console.log(2< 12 < 5);// 2<12 =true(1)<5=true
console.log("20" + 10 + 10);// "20" + 10 = "2010" + 10 = "201010"
