// * Any Type

//? The any type is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expressions it is applied to.
//? you will see any type when u first write the code

let favNum: any = 5;
favNum = "dk";
favNum = true;

//! useCases
//* Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the type can be useful. a type can be useful.



// * Unknown Type

//? The unknown type is a safer-altezinative to any because it still enforces type checking and type safety.
//? Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.

// let favNumber:unknown = 69
// favNumber =true
// favNumber.map(()=>{})

let num:unknown
num = true
num = 5 
num = "dk"

if (typeof num === "number"){
    console.log('num', num + 5)
}