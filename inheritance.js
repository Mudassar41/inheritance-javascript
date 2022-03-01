

//constructor function

function Person(firstName,birthYear){


    this.firstName=firstName;
    this.birthYear=birthYear
}

const jhon=new Person(
    'Mudassar','1999'
)
//Prototyping
Person.prototype.age=function(){
    console.log(2022-this.birthYear)
}

jhon.age()
console.log(jhon.__proto__==Person.prototype)

//setting propertirs in prototype

Person.prototype.country='Pakistan'

console.log(jhon.country)

//prototypal inheritance

function Clerk(design){
    this.design=design
}

Clerk.prototype=jhon

const clrk=new Clerk('Clerk')
console.log(clrk)


const P1={

    name:"Mudasar",
    fullName:function(){
        console.log(`My name is ${this.name}`)
    }
}

const P2={
    city:"KBW",
    name:"Ali",
    __proto__:P1
}


console.log(P2.name)
P2.fullName()