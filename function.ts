

//! Function return: How do you specify the return type of a function in TypeScript?

//* To specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.

const greet = (name:string, id:number) => {
    // console.log( `Welcome, ${name} and your id is ${id} ` );
    return `Welcome, ${name} and your id is ${id} ` 
}

// function call
const mygreet = greet("dK",1); 
console.log('mygreet', mygreet)