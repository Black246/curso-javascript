let person = {
    name: 'Martin',
    lastName: 'De Leon',
    email: 'martin@gmaol.com',
    age: 20,
    language: 'es',
    get lang(){
        return this.language.toUpperCase();
    },
    set lang( lang ){
        this.language = lang.toUpperCase();
    },
    get fullName() {
        return this.name + ' ' + this.lastName;
    }
}

person.lang = 'en';
console.log(person.fullName);
console.log(person.lang);
//For in
for (property in person){
    console.log(property);
    console.log(person[property]);
}

person.phone = '3006821597';
console.log(person['phone']);

delete person.phone;
console.log(person);

let personArray = Object.values(person);
console.log(personArray);

let personString = JSON.stringify(person);
console.log(personString);

