//! Class 
// eg . 1
class AirCondition {
    color = "white";
    company = "voltes";
    tonnes = .75
    temperature = 22

    turnOn(name: string) {
        console.log(`turning on ${name}`);
        console.log(`turned on ${name}.`);
    }
    turnOff() {
        console.log("turning off ....");
        console.log("turned off. ");
    }
    raiseTemperature() {
        this.temperature++;
        console.log("temperature raised by 1 ", this.temperature);
    }
    decreaseTemperature() {
        this.temperature--
        console.log("temperature decrease by 1", this.temperature);

    }

}
let ac1 = new AirCondition()
ac1.raiseTemperature()
ac1.raiseTemperature()
ac1.raiseTemperature()
let ac2 = new AirCondition()
ac2.turnOn("ac2")


// eg .2

type Data = string | null
class Pendrive {

    company = "hp";
    price = 2500;
    data: string | null = null;

    putData(data: Data) {
        console.log(`putting some data ${data}`);
        this.data = data
    }
    getData(data: Data) {
        console.log(data);
    }

}

let pendrive1 = new Pendrive()
pendrive1.putData("12")
pendrive1.getData()

// eg.3
class Food {
    price = 200

    eat() {
        console.log("eating");

    }
}

class Mithaai extends Food {
    name = "rasgulla"
}

let mithai = new Mithaai();
mithai.eat()


//! Constructor - class ka  special method hota hai jiska kaam h sab se pehle chlna  & sare variable ko initialize krna 

// eg.1 
class Earphone {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price
    }
}

let e1 = new Earphone("patron", 1000)
let e2 = new Earphone("oneplus", 1500)
console.log(e1);
console.log(e2);


// eg .3
class Bottle {
    shape: string;
    constructor(shape: string) {
        this.shape = shape;
    }
}
new Bottle("circle")

// eg .4 - decleriaton hum constructor me bhi de sakte  h 
class User {
    constructor(public name: string, public email: string, public contact: number) {
        this.name = name
        this.contact = contact
        this.email = email
    }
}


//! Public, Private, Protected Members
//? Public - koi bhi file by default public hoti h or public ko hm kahi bhi use kr sakte h  (public mtllb purii class me use kro aur bahar bhi use access kr sakte ho class ke via instanced)
class pendrive {
    price = 1250
    name = "pendrive"

    getNm() {
        console.log(this.name);

    }
}
let p1 = new pendrive();
p1.name = "super duper pendrive"

//? private - isme hm value ko class ke bahar se  change/use nhi kr sakte h class ke ander se hi change/use kr skte h ( private mtlb sirf class me  hi voo element use kr skate hai  hm use bahr use nhi kr skate h )

class UserP {
    private salery = 12000
    getSalery() {
        console.log(this.salery);

    }
}
let p2 = new UserP()
// p2.salery =15000 

//? Protected - khud kke ander use kro  and jo class aapke main class ko extend kre useme use kroo 

class Users {
    protected balanace = 1200

}
class Admin extends Users {
    private isAdmin = true
}
let a1 = new Admin()

//! • Readonly Properties -iski value change nhi kr ske h 

class abc {
    constructor(public readonly name: string) {
        this.name = name

    }
    getName() {
        console.log(this.name);
    }
    // setName(name:string) {
    //     this.name =name
    // }
}

let ab = new abc("Dk")
ab.getName()

//!  •Getters and Setters

class Animal {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    get animalname() {
        return this.name
    }
    
    public set animalnames(name: string) {
        this.name = name;
    }

}

let an1 = new Animal("sher")
console.log(an1.animalname);

an1.animalnames ="hirad"
console.log(an1.animalname);













