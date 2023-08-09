class Person{
    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastname(){
        return this._lastname;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    fullName(){
        return this._name + ' ' + this._lastname;
    }
}

class Employee extends Person{
    constructor(name, lastname, departament){
        super(name, lastname,);//llamar al constructor de la clase padre
        this._departament = departament;
    }

    get  departament(){
        return this._departament;
    }

    set departament(departament){
        this._departament = departament;
    }
}

let person1 = new Person('Martin', 'De Leon');
console.log(person1);

let employee1 = new Employee('Maria', 'Jimenez', 'Sistemas');
console.log(employee1);
console.log(employee1.name);
console.log(employee1.lastname);
console.log(employee1.fullName());