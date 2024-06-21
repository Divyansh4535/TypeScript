
// var num:number = 44
// var str:string = "dk"
// var isTrue:boolean = false

function sum(num1: number, num2: number) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else {
        return new Error("Values are not a number ");
    }
}
console.warn(sum(4, 71));



//REVIEW  type interface on ts 

    let number:5
//    number=56  //NOTE ham kise number ko bhi type bana sakte h 

    let data = 10;
    data=141
    const val =5;
    // val=44

