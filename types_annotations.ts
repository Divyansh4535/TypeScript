

let FName: String = "divyansh kumar"
let FavNumber: Number = 4

console.log(FavNumber.toString())


let myFavNum: number = 4
let myAge: number = 22
let pi: number = 3.14
let NegNum: number = -44

// let invalidResult:number = myAge +"year";
// console.log(invalidResult);


// SECTION Here are some practice questions related to string types in TypeScript:

// TODO String Initialization:
//? Declare a variable message of type string and assign it the value "Hello, TypeScript!.

let massage: string = "Hello ,TypeScript !"

// TODO Concatenation:
// ? Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.

let firstName: string = "Divyansh"
let lastName: string = "Kumar"

let FullName = (firstName + lastName);
console.log('FullName :', FullName)

//  TODO String Length:
// ? Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentence Length.

let sentense: string = " i m Divansh kumar"
let sentenseLength = sentense.length
console.log("Sentense Length : " + sentenseLength);


// TODO  Uppercase and Lowercase:
// ? Declare a variable text of type string and assign it a sentence of your choice. Convert the entire sentence to uppercase and store the result in a variable called uppercaseText. Then convert he entire sentence to lowercase and store the result in a variable called lowercaseText.

let text: string = "hlo i m studying Typescript"
let LCase: string = "Hlo Type Script is bBETTER then JAVASCRIPT "
let convertUCase: string = text.toUpperCase();
let convertLCase: string = LCase.toLowerCase();
console.log('UpperCase : ', convertUCase)
console.log('LowerCase : ', convertLCase)


//! Home Work Time

// TODO Substring:
// ? Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

let longText: string = "Enhance your TypeScript skills with our comprehensive video tutorial on type annotations. Discover practical examples and learn the best practices for utilizing type annotations effectively. From variable annotations to function parameters and return types, we cover it all."
let ShortText: string = longText.substring(0, 11)
console.log('ShortText :', ShortText)


// TODO String Comparison:
//? Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1: string = "Divyansh";
let str2: string = "Kumar";
let areEqual: boolean = (str1 == str2)
console.log('areEqual :', areEqual)


// TODO String Template:
//? Declare variables product and price of type string and number, respectively. Create string using template literals to display the product and its price in the format product {product} is priced at {price} dollars."





