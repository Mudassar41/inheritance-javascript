

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