let result = sumarTodo(5, 4, 13, 10, 9);
console.log(result);

function sumarTodo () {
    let suma = 0;
    for(let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

//Paso por valor
let x = 10;

function changeValue(a) {
    a = 20;
}

changeValue(x);//10
console.log(x);

//Paso por referencia
const person = {
    name: 'Martin',
    lastName: 'De León'
}

function changeValueObject(persona) {
    persona.name = 'Elías';
    persona.lastName = 'Pertuz';
}

changeValueObject(person);
console.log(person);