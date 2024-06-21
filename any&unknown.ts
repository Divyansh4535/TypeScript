//REVIEW -  any Type

let data2: any;
data2 = 44;
data2 = "unknown"
data2 = undefined
let item1: string
item1 = data2;


//REVIEW - unknown type

let data1: unknown;
data1 = 44;
data1 = "unknown"
data1 = undefined
let item: string
item = data1;

if (typeof data1 === "string") {
       item = data1; 
}