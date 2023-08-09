class Person{
    constructor(name, lastNmae){
        this._name = name;
        this._lastNmae = lastNmae;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

let person1 = new Person('Martin', 'De Leon');
person1.name = 'Elías';//set name('Elias')
console.log(person1.name);//get name

let person2 = new Person('Luz', 'Estella');
console.log(person2);
