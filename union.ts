// let data: string | number = 55
function  multiplyNum(type:string|number){
        return   55*55

}
function  SNum(type:string|number){
        return   'Union types are used when a value can be more than a single type. Such as when a property would be string or number.'
   }
   console.log('multiplyNum', multiplyNum)
   console.log('SNum', SNum)

   
   function combine1(a:number|string,b:number|string){
    if(typeof a === "number" && typeof b === "number"){
        return a*b;
    }else{
       return a.toString() + b.toString() ;
    }
   }
   console.log(combine1(5,4))
   console.log(combine1("Tanu"," Divyansh"))