class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Najmus', 'Sakib', 80000);
const friendlyPerson = new Person('Fakhrul', 'Islam', 90000);
console.log(heroPerson);
console.log(friendlyPerson);

//old vesion in below not need now 

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Saidur', 'Rahman', 20000);
console.log(oldPerson);