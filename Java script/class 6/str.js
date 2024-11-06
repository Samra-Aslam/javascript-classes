//string escap method;

      //tipno1 put \before quotes
let namee = "my name is \"samra\" , my name is \"samra\".";
console.log(namee);

     //tipno2 for line break
let herName = "her name is\n \"maria\".";
console.log(herName);

//string search method;
      //indexof
      console.log(herName.indexOf("maria")); //return index no of first word of string
                                             //search forward from given index number(if any provided)
                                            //in case of no match return -1
    console.log(namee.indexOf("samra"));
    ///////////or;;;;;;
    console.log(namee.search("samra"));

    //how to convert string to array;
    let newArray = Array.from(namee);
    console.log(newArray);
    
    //to find index by map method
    let strMap= newArray.map((currentvalue,index)=>{
return `${currentvalue} ${index}`;
    })
    console.log(strMap);


//match(); returns array(details) of the matched value , or null if no match is found.
//console.log(namee.match("samra"));

//matchAll(); return an interator of all matches, providing detailed information about each match, return empty 
//interator if no match is found.
let names = "you are cute and beautiful but she is not cute";
console.log(names.match("cute"));


//includes()
console.log(names.includes("cute"));

//startswith(); return true if a string begins with specified value.
console.log(names.startsWith("you"));
console.log(names.endsWith("you"));

//slice(); extracts a part of string and return the extracted part in new string;
//but not include last index
console.log(names.slice(8));
console.log(names.slice(8,13)); //will ignor 13 index and return to 12 index

//substring; extracts a portion of string based on starting and ending indices.
console.log(names.substring(8,12));


//replace();
console.log(names.replace("y","Y"));
console.log(names.replaceAll("cute","ugly"));
//charAt(position),charCodeAt(position), at(position);
console.log(names.charAt(8));    //empty if not found
console.log(names.charCodeAt(8));  //return charcode(check on google) of alphabets;
console.log(names.at(-8));   //same as charat but it also allow negative value