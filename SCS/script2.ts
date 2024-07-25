// //! Type Inference - Apne aap se dekh kr  jo ye value infreed krte h use type inference ko bolte h 
// let a;  //this is type inference hmne nhi btya h ki ye kon se type hoge but ye bydefault any type le raha ise ko type inference bolte h
// let b = 5;  //this is type inference  hmne nhi btya h ki ye kon se type hoge but ye bydefault number type le raha ise ko type inference bolte h
// let c = "inference";  //this is type inference  hmne nhi btya h ki ye kon se type hoge but ye by default string type le raha ise ko type inference bolte h
// let d = true;  //this is type inference 

// //! Union  - isme hmko maan lo or type methodh ka use krna hota h but value hmko 1 ki hi milege

// let variable: string | number
// // variable.    // hme isse only wahi method dikhege jo ki dono me common hoga  
// // agar hmko full method dekhne h type ke to use below logic 
// function learnUnion(variable: string | number | boolean) {
//     if (typeof variable === "string") {
//         variable.toLowerCase()  // ab ye hme string ke all method dikhyega 
//     } else if (typeof variable === "number") {
//         variable.toFixed()  // ab ye hme number ke all method dikhyega 
//     }
//     else if (typeof variable === "boolean") {
//         variable.valueOf()   // ab ye hme number ke all method dikhyega 
//     }
// }
// learnUnion(55)
// learnUnion("dk")
// learnUnion(true)


// //! Intersection  - isme AND ka method or symble use krte h ,or isme hm khud ka type bnaa saktee h 
// type city = {
//     name: string,
//     population: number
// }
// type planet = {
//     tempreture: number,
//     color: string
// }

// type CityInPlanet = city & planet

// let value: CityInPlanet = {
//     name: "Kanpur",
//     population: 150000000,
//     tempreture: 105,
//     color: "red"

// }

// //! Type Aliases
// //? primitive type aliases 
// type NAAM = string
// let yourName: NAAM
// yourName = "tanni"
// type Umar = Number
// let yourAge: Umar
// yourAge = 20

// //? object type aliases
// type INFO = {
//     name: string,
//     age: number,
//     contact: number,
//     email: string
// }

// let details: INFO = {
//     name: "Divyansh",
//     age: 22,
//     contact: 930560,
//     email: "diyansh@email.com"
// }


// //? union 
// type Age = string | number
// let yourage: Age = 22
// let yourname: Age = "dk"



// //! Interfaces - interface hme class & object ka shape bnaa kr detaa h

// interface User {
//     name: string,
//     age: number,
//     username: string,
//     email: string,
//     password: number
// }


// function getUser(user: User) {
//     user.email.concat
//     user.age.toFixed()
// }


// //? differences between type & interfaces 
// // 1 .
// type sankhya = number;

// interface Sankhya {
//     name: string
// }

// // 2. - type me 2 name same type ki nhi bnaa sakte but   interface me kr sakte interface merge kr leta h 

// //  type name = number
// //  type name = string

// interface Diff {
//     name: string
// }
// interface Diff {
//     num: number
// }
// function inter(count: Diff) {
//     count.num.toFixed
//     count.name.charAt
// }

// // 3. 

// interface Food {
//     name: string,
//     price: number
// }

// interface Mithafood extends Food {
//     verySweet: boolean
// }
// interface Khttafood extends Food {
//     verySour: boolean
// }

// function Order(Details: Mithafood) {
//     Details.verySweet.valueOf
//     Details.name = "rassgulla"
//     Details.price = 15
// }

// function Order2(Details: Khttafood) {
//     Details.name = "curd"
//     Details.price = 20
//     Details.verySour = true
// }