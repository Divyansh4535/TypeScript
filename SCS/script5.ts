
//!  Type Assertions:

function select() {
    (document.querySelector("h1") as HTMLDivElement)
}

function select2() {
    <HTMLDivElement>document.querySelector("h1")
}


//! Literal Types: ek baar kise ko value de di fir dusre ko nhi de sakte change krke value
// • String Literal Types
let na: "divyansh";
na = "divyansh"
na = "d"
// • Numeric Literal Types
let nu: 69
nu = 69
nu = 55

// • Boolean Literal Types
let isRish: true
isRish = true
isRish = false



let detailNA: "divyansh" | 12 ;
detailNA = "divyansh"
detailNA = 22