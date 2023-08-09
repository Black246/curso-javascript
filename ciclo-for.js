// Bucle for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 8, 10, 5];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

for (let valor of lista) {
    console.log(valor);
}

lista.forEach(valor => {
    console.log(valor);
});

let persona = {
    nombre: "Martin",
    apellido: "De Leon",
    edad: 20,
    isDeveloper: true
}