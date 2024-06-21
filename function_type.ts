function sub(a:number,b:number){
    return a-b;

}
console.log(sub(55,44));

function getTime():number{
    return new Date().getTime();
}

console.log('getTime : ', getTime())

//? Void Return Type
//* The type void can be used to indicate a function doesn't return any value.

let today;
let x=33;
let y=55;
function printKaro(){
    today = x*y;
    console.log('Hello void' ,today) 
}
 printKaro()


 //? Optional Parameters
//* By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.


function optionalPara(num1:number ,num2:number, num3?:number) {
    return num1 + num2 + (num3 || 0)
    
}
  console.log( optionalPara(44,77,5))







