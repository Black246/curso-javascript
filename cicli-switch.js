let month = 9;
let station;
let hour = 9;
let saludo;
let number = 1;
let numberText = 'valor desconocido';
if (month == 1 || month == 2 || month == 12) {
    station = "Invierno";
}
else if (month == 3 || month == 4 || month == 5) {
    station = "Primavera";
}
else if (month == 6 || month == 7 || month == 8) {
    station = "Verano";
}
else if (month == 9 || month == 10 || month == 11) {
    station = "Otoño";
}
else {
    station = "Valor incorrecto";
}

console.log(station);

if (hour >= 6 && hour <= 11) {
    saludo = "Buenos Días";
}
else if (hour >= 12 && hour <= 18) {
    saludo = "Buenas tardes";
}
else if (hour >= 19 && hour <= 24) {
    saludo = "Buenas noches";
}
else if (hour >= 0 && hour <= 6) {
    saludo = "Durmiendo";
}
else {
    saludo = "Valor incorrecto";
}

console.log(saludo);

switch (number) {
    case 1:
        numberText = 'Numero uno';
        break;
    case 2:
        numberText = 'Numero dos';
        break;
    case 3:
        numberText = 'Numero tres';
        break;
    default:
        numberText = 'Numero desconocido';
        break;
}

console.log(numberText);

switch(month) {
    case 1: case 2: case 12:
        station = 'Invierno';
        break;
    case 3: case 4: case 5:
        station = 'Primavera';
        break;
    case 6: case 7: case 8:
        station = 'Verano';
        break;
    case 9: case 10: case 11:
        station = 'Otoño';
        break;
    default:
        'Valor incorrecto';
        break;
}
console.log(station);