// Creating objects/*let i = 1;

//1. Object Literal
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    city : 'New York'
};


//2.Constructor Function
function Person(firstName, lastName, age, city){
    this.Name = firstName;
    this.lastName = lastname;
    this.age = age;
    this.city = city;
}

const person1 = new Person("Jane", "smith", 25, "Los Angeles");

//3.Methods(functions within objects)
const person2 = {
    firstName : "Henry",
    lastName : "Maina",
    age : 21,
    city : 'Nakuru',
    fullName : function(){
        return this.firstName +" "+ this.lastName;
    }
};

//4.Nesting objects
const company = {
    name : "H & M TECCOM",
    ceo : {
        firstName : "Henry",
        lastName : "Maina"
    }
};