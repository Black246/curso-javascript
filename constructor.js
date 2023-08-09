//Funcion constructor de objetos tipo Persona
function Person(name, lastName, email){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.fullName = function(){
        return this.name + ' ' + this.lastName
    }
}

Person.prototype.tel = '3006821597';
let person = new Person('Martin', 'De Leon', 'martin@gmail.com');
person.tel = '31356879';
console.log(person);

let mother = new Person('Luz', 'estella', 'estella@gmail.com');

person.name = 'Elias';
console.log(person);
console.log(mother.tel);


