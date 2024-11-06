//while loop; 
//while loop in java script is control structure that repeatedly executes a block of code 
//as long as specified condition remains true. the loop condition iterating while the condition is true 
//and it terminates when the condition becomes fals. 

//i = 1;(initialization)
//while(condition(i<=10)){
//code to be executed as long as the condition is true
//console.log(i);
//i++;
//};

//question; simple while loop to count from 1 to 10?

var num = 1;
while(num <=10){
    console.log(num);
    num++;
}

//lets create table of 5
let i = 1;
while(i <=10){
    console.log("5 * "+i + " = " + i*5);
    i++;
}
//=======================================
//do while loop;

//i = 1;(initialization)
//Do{
// code to be executed as long as the condition is true
//console.log(i);
//i++;
//   } while(condition(i<=10));


let userInput= 10;
let positiveNumber;
do{
positiveNumber = parseFloat(userInput);
}while(isNaN(positiveNumber) || positiveNumber<0);
console.log("you have entered a valid positive number"+ positiveNumber);
//===========================================




//for loop;
//for(initializer(var num = 10);  condition(num <10);  iteration(num++))
//{ //code to be executed
//console.log(i);
//}


//calculate sum of numbers from 1 to 10 using for loop
var sum = 0;
for(i = 1; i<=10; i++){
    var sum = sum + i;
   
} console.log(sum);


//example2
//write a program to check if a number is prime.

var num8 = 12;
var isPrime = true;    //numbers that can only divided by 1 or themselfe
for(let r =2; r<12; r++){
if(num8%r==0){
    isPrime = false
    break;
     }
}
if(isPrime){
    console.log("is prime number")
}else{
    console.log("not a prime number")
}
