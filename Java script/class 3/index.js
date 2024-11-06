//contents to learn
//1; if....else statement
//2; switch statement
//3; while loop
//4; Do while loop
//5; for loop
//6; for in/ for of loop (later in array)

       //if...else statement;

let temp = 40;
if(temp >30 ){
    console.log("lets go to beach");
}else[
    console.log("lets watch TV at home")
]
//example2
//? if the person is 18 years or elder, a citizen , and registered to vote , display a message
//say they are eligible to vote.
//if a person is younger than 18, not a citizen , or not register to vote , display a message saying that 
//they are not eligible to vote.
//if a person is 18 or elder, not a citizen ,display a message saying that 
//they are not eligible due to citizenship status.
//if a person is 18 or elder,a citizen, but not registered to vote ,display a message saying that 
//they are not eligible due to registration status.
//extend vote eligibility checker with additional conditions.
//assume the user age , citizenship status, registration status as input.
let age = 20;
let citizenship = true;
let registration = false; 
if(age>=18 && citizenship===true && registration===true) {
    console.log("you are eligible to vote");
}else if(age>18 && citizenship===false && registration===false) {
    console.log("you are not eligible to vote");
}else if(age>=18 && citizenship===false && registration===true) {
    console.log("you are not eligible to vote due to citizenship status");
}else if(age>=18 && citizenship===true && registration===false) {
    console.log("you are not eligible to vote due to registration status");
}

//question; write a program to check if number is even or odd?
let numm = 8;
if(numm%2===0){
    console.log("number is even");
}else{
    console.log("number is odd")
}

//question; write a program to check if number is positive , negative or zero;
if(numm===0){
    console.log('number is zero');
}else if(numm>0){
    console.log('number is positive');
}else if(numm<0){
    console.log('number is negative');
}