const car = ['BMW', 'Mercedes', 'Volvo', 'Audi'];
console.log(car);

for(let i = 0; i < car.length; i++) {
    console.log(car[i]);
}

car[1] = 'Toyota';
console.log(car[1]);
car.push('Mazda');
console.log(car[4]);
console.log(car.length);
car[car.length] = 'Ferrari';
console.log(car);

console.log(Array.isArray(car));

console.log(car instanceof Array);