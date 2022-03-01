

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
