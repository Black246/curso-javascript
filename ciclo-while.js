let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

do {
    console.log(count);
    count++;
}while (count < 10);

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0)
    console.log(i);
    break;
}

for (let contador = 0; contador <= 10; contador++) {
    if(contador % 2 !== 0) {
        continue; // ir a la siguiente iteracion
    }
    console.log(contador);
}
