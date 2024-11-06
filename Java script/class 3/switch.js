//switch statement
//? switch statement is used to perform different actions 
//based on different conditions;

let day = "tuesday";
switch(day){
    case "monday":
    console.log("today is monday");
    break;

    case "friday":
        console.log("today is friday");
        break;

    default:
        console.log("no condition match")
}


//? write a javascript switch statement that takes a variable areaofShape representing different
//shapes , based on its values , calculate and log area of corresponding shape , consider three shapes:
//'rectangle' , 'circle' , 'square' , for rectangle use variables a and b: as a sides; of circle use variable r 
//as a radius , and for square use variable a as the side length if provided shape is not recognized logg a message
//"sorry the shape is not available", test your switch statement with areaOfShape set to square and sides a and b 
//set to 5 and 10 , respectively, ensure that the correct area (25 in this case) is logged to console.


var areaofShape = "square";
var a = 5;
var b = 10;
var result = a * a;
switch(areaofShape){
    case "square":
        console.log(result);
        break;
    case "rectangle":
        result = a * b;
        console.log(result);
        break;

    case "circle":
        var r = 2;
        result = 3.142 * ( r * r);
        console.log(result);
        break;

    default:
        console.log("sorry the shape is not available");
}