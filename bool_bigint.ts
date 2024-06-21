
// *
// Boolean Type
// *
//? In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language. I

let MyNameVinod = true;


//REVIEW -  Question: Check Even Number

// TODO  Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.


    let isEven= (num:number ):boolean=>{
        return num%2===0;
    }

    console.log('isEven ', isEven(50) )

//TODO write a TypeScript function called isDivisibleBy 4 And 8 that takes  as a parameter and returns true if the number is divisible by both 4 & 8

let isDivisible =(numm:number):boolean=>{
    return (numm%4===0 && numm%8=== 0);
}

console.log('isDivisible : ', isDivisible(40))



// REVIEW  BigInt Type

//? It is a built-in type that allows you to work with numbers that are arger than the range supported by the regular number type.
//? BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we can't read the whole numbers beyond 2 raise to power 53

// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log('maxNumber', maxNumber)
let bigNumber:bigint = 9007199254770992
console.log('bigNumber', bigNumber)



//! Assignment

// let sum = bigNumber + anotherBigNumber;
//* let difference = bigNumber anotherBigNumber;
//* let product = bigNumber ⋆ anotherBigNumber;
//* let division = bigNumber / anotherBigNumber;