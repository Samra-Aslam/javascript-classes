//create a calculator function;
function calculator (num1,num2,operator){
    if(operator==="+"){
        console.log(num1 + num2);
    }else if(operator==="-"){
        console.log(num1 - num2);
    }else if(operator==="*"){
        console.log(num1 * num2);
    }else if (operator==="/"){
        console.log(num1 / num2);
    }else if(operator==="%"){
        console.log(num1 % num2);
    }else {
        console.log("operator is not found");
       }
}
console.log(calculator(5,6,"."));


//for loop with string;

const isreverse = (str)=>{
    for(var cher =0; cher<=str.length; cher++){
    console.log(str[cher])
   }
}
isreverse("samra");