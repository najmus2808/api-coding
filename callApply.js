const normalPerson = {
    firstName: 'Najmus',
    lastName: 'Sakib',
    salary:15000,
    getFullName: function(){
        return(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}
// console.log(this);
// console.log(normalPerson.firstName);
// console.log(normalPerson.getFullName());
// console.log(normalPerson.chargeBill(3000));
// console.log(normalPerson.chargeBill(2000));
// console.log(normalPerson.salary);

const heroPerson ={
    firstName:'Jakir',
    lastName:'Ahmed',
    salary:20000
}

const friendlyPerson ={
    firstName:'Imran',
    lastName:'Khan',
    salary:25000
}

// console.log(normalPerson.chargeBill(2000));
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(3000));
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// console.log(friendlyChargeBill(5000));
// console.log(normalPerson.salary);
// console.log(heroPerson.salary);
// console.log(friendlyPerson.salary);
// console.log(heroPerson);

// normalPerson.chargeBill.call(heroPerson, 2000, 900, 100);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 3000, 500, 50);
// console.log(friendlyPerson);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [3000, 500, 50]);
normalPerson.chargeBill.apply(friendlyPerson, [2000, 500, 50]);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);
