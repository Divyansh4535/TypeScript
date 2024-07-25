//! Function

//? Named Function
function kuchBhiReturnNi(): void {
    console.log('first ye kuhc bhi return nhi kr raha h')
}

function kuchReturnHua(): string {
    return "i m dk"
}

//? Anonymous Function
// function(): void {
//     console.log('first')
// }
//? Arrow Function
const abcArrow = (): void => {
    console.log("this is arrow function");
}
const abcArrowRet = (): number => {
    // console.log("this is arrow function");
    return 55
}
//? Explicit Return Type - function ke baad agar hmne btya ki fun kya return kr raha h to ise explicit khte h
function explicit(): number {
    // console.log("this is arrow function");
    return 55
}

//? Implicit Return Type - function khud infered kr raha  h kon sa type h hme use implicit khte h 
function implicit() {
    return "jay shre ram"
}
//? Optional Parameters - ? iska use krke hm btaa skte h ki ye optional h dene hogi dege ngi to khli chor dege 
function details(name: string, age: number, gender?: string) {
    return
}
details("dk", 22)
//? Default Parameters
function Default(name: string = "default") {
    console.log('name', name)
}
// Default("dk default ")
Default()

//? Rest Parameters
function names(...names: string[]) {
    console.log('names', names)
}
names("dk", "tanni", "love me")













