let fruits = ["orange","banana","grapse","apple","mango"];
console.log(fruits);
console.log(fruits[3]);    //return apple
console.log(fruits["banana"]);  //not allowed to do


//modifying array;
fruits[3] = "potato";
console.log(fruits); //return modified array;

//"for of" loop;     //provide loop of items
for(let item of fruits){
console.log(item);
}
//with "for" loop
for(let item=0; item<= fruits.length; item++){
    console.log(fruits[item]);
}
//"for in " loop.       //return indexes of array
for(let item in fruits){
    console.log(item);
}

//foreach method //can not use return word and conditions in function;

//array.forEach((currentvalue , index, array))=>{
    //your logic
//}

fruits.forEach((currentvalue,index,array)=>{
console.log(`${currentvalue}  ${index}`);   //return like loop with index number
})
         //or we can
fruits.forEach((currentvalue,index,array)=>{
    console.log(`${array}`);                //return array 
    }) 
    

//.map method //can  use return word and conditions in function;

//array.map((currentvalue , index, array))=>{
    //your logic
//}
let fruits1 = ["orange","banana","grapse","apple","mango"];
fruits1.map((currentvalue,index,array)=>{
    return currentvalue;
    })
    console.log(fruits1)

    //or
    fruits1.map((currentvalue,index,array)=>{
        console.log(`${currentvalue} ${index}`)
      }
      )
      //how to insert element at end of array
      console.log(fruits.push("tomato"));  //provide length of new array after increment
      console.log(fruits);       //provide new array with addition


      //how to delete element at end of array

      console.log(fruits.pop());  //provide name element to be deleted
      console.log(fruits);       //provide new array after deleting

      //how to add element at start of array

      console.log(fruits.unshift("tomato"));   //provide length of new array after increment
      console.log(fruits);       //provide new array with addition

       //how to delete element at start of array

       console.log(fruits.shift());  //provide name element to be deleted
       console.log(fruits);       //provide new array after deleting

       //how to delete element of array from anywhere in array

       console.log(fruits.splice(3,1));   //return the element you selected to delete
                   //number1 represent index of element from where we want to start
                  //second value represents how many elements we want to delete.0 used if no value to be delete
                  //third element will be element name we want to add
                  console.log(fruits);

    //how to add element anywhere at array without deleting anything

    console.log(fruits1.splice(0,0,"samra"));
              //number1 represent index of element from where we want to start
                  //second value represents how many elements we want to delete.0 used if no value to be delete
                  //third element will be element name we want to add
    console.log(fruits1)

    //for search we have ----indexof,lastindexof and includes;
    //===============================================================
    const number = [1,2,3,4,5,4,6,7,5,8,9,7,3];
    //indexof========return index of first number match;
    console.log(number.indexOf(4));  //if index(from where start to search) number also provided after 
                                     //search value and value not found it will return -1.
                                     //0 index start from start always

    //lastindexof=======return index number of last match element;

    console.log(number.lastIndexOf(4)); //if provide index number it search from index number
                                        //to backword means 0 start from index number

    //includes ========returen boolean values if element includes in array/

    console.log(number.includes(9));

    //filters in array;
    //find method.findindex and filter method;
    //find method=======return first elemet match(same syntax as map method)
    const result = number.find((currentvalue)=>{
        return currentvalue >5;
    })
    
    console.log(result);

//findindex(provide first element match condition)(same syntax as map method)
const result1 = number.findIndex((currentvalue)=>{
    return currentvalue >6;
})
console.log(result1)

//filter method  //return all elements match (same syntax as map method)
        
const result2 = number.filter((currentvalue)=>{
    return currentvalue >5;
})
console.log(result2)

//how to delete 2 values from array;
let value = 4 ;
const result4 = number.filter((currentvalue)=>{
    return currentvalue != value
})
console.log(result4)
  
//question;
//give an array of products where each product has a name and a price, write a function that use 
//filter method to return an array containing a products with a price less than or equal to 500/
const products = [{name:"laptop",price:1200} ,{name:"phone",price:800} , 
    {name:"tablet",price:300} ,{name:"smartphone",price:150}];

    const filterProducts = products.filter((currentvalue)=>{
        return currentvalue.price <=500;
    })
console.log(filterProducts);

//question; filter unique value in array

let uniqueValue = number.filter((currentvalue,index,array)=>{
    return array.indexOf(currentvalue)==index;
})
console.log(uniqueValue);

//example2
let names = ["samra","sonia","samra","sumbal"];
let uniqueNames = names.filter((currentvalue,index,array)=>{
    return array.indexOf(currentvalue)==index;
})

console.log(uniqueNames);

//convert array to capitalized words
let words = names.map((currentvalue)=>{
    return currentvalue.toUpperCase();
})
console.log(words);


//how to sort array assending order
number.sort();
console.log(number);
//or
//sort assending order
number.sort((a,b)=>{
    if(a>b) return 1; //switch the order
    if(b>a) return -1;//keep the order
})
console.log(number);
//decending order
number.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1;
})
console.log(number);

//using map mathod , write a function that takes an array of numbers and return a new array
//where each number is squared , but only if it is an even number.

let numbers= [1,2,3,4,5,6,7,8,9];


let even = numbers.map((currentvalue)=>{
    if(currentvalue%2==0){
    return currentvalue* currentvalue;}
    
}).filter((currentvalue)=> currentvalue!=undefined)


console.log(even);

//reduce array method'(same as map)(just one additional parameter accumulator and initial value before last braces)
//question*: write a javascript function that calculate a total price of items in shopping cart, the 
//function should take an array of item prices as input and return total price.

let products2 = [100,200,400,800,1200,1500];
let productPrice = products2.reduce((accumulator,currentvalue)=>{
return accumulator + currentvalue;
},0);
console.log(productPrice);


//average of an array
let ang = products2.reduce((accumulator,currentvalue,index,array)=>{

let total= accumulator+currentvalue;
return total/array.length;
},0)
console.log(parseInt(ang));