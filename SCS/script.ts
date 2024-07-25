
// let a = 12;
// let b;

// //! Type Basic  
// //? • Number, String, Boolean
// let c: Number = 55
// let d: String = "I learn type script"
// let e: boolean = true

// //? • Arrays, Tuples
// let arr: []
// let tup: [number, string, boolean] = [1, "dk", true]  // tuples ke throw hm btaa sakete h ki array ke ander kya kya h  or utni hi value rakh sakte h  jitna defined krege utna hi value dege 
// let tupl: [number, number, boolean, string, boolean] = [1, 2, false, "tanni", true]

// //? • Any, Unknown, Never,void 
// // any type me hm kuch bhi de skate h or ye error bhi ni deta h ise liye hme 99%time any use nhi krte h  
// let f: any
// f = 322
// f = "dk"
// f = true
// f = [5, 5, "ff"]

// // Unknown 
// let g: unknown
// g = "hlo brother "
// g = 69
// g = true
// g = [55, "gg"]

// // Never  - This function is never return any  ,or agar ye return nhi krege  to uske aage ka code nhi chal pyega
// // function infinite(): never {
// function infinite() {
//     while (true) {
//         console.log('infinite run')
//     }
// }
// console.log("inifinte function me never use krne se hm pehle to return kr sakte h ");
// infinite()
// console.log("inifinte function me never use krne ke baad return nhi kr sakte h ");

// // void type hme kuch bhi return nhi krne ke liye use hota h 
// function num(): number {
//     return 12
// }
// //num().
// function str(): string {
//     return "12"
// }
// // str().
// function vo(): void {
//     console.log("void kuch bhi return nhi krta h ")
// }
// // vo().

// //? • Enums
// //eg.1
// enum Direction {
//     top = "TOP",
//     left = "LEFT",
//     right = "RIGHT",
//     bottom = "BOTTOM"

// }
// Direction.left

// //eg.2
// enum MousePosition {
//     x = 0,
//     y = 0
// }
// MousePosition.y

// //eg.3
// enum Human {
//     name = "Divyansh",
//     age = "20"
// }
// console.log('Human.name', Human.name)