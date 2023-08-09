let number = 5;
if (number % 2 === 0) {
    console.log("Es un numero par");
}

else {
    console.log("Es un numero impar");
}

let age = 20;

if (age >= 18) {
    console.log("Es mayor de edad");
}

else {
    console.log("Es menor edad");
}

let result = (1>2) ? "Verdadero" : "menor";
console.log(result)

result = (number % 2 == 0) ? "Numero par" : "Numero impar";
console.log(result);

let miNumero = "18";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
result = (edad >= 18) ? "Puede votar" : "No tiene la mayoria de edad";
console.log(result);