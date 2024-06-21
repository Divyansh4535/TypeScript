   function combine(a:number|string,b:number|string, type:"as-number" | "as-string"){
    if(type === "as-number"){
        return (+a)*(+b);
    }else{
       return a.toString() + b.toString() ;
    }
   }
   console.log(combine(5,4,"as-number"))
   console.log(combine("Tanu","💑 Divyansh","as-string"))

   let type :"as-string"|"as-number" = "as-string";