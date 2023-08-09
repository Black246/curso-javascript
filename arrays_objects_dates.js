// Listas, array o arreglo
const list1 = [1, 2, 3, 'Hola', true, null, [undefined]]
const list2 = new Array(3);
list2[0] = "soy el indice 0";
list2.push(2);
console.log(list1.length);
console.log(list2);

// Objetos
const phone = {
    heigth: 10,
    weigth: 5,
    brand: "xiaomi",
    isWhite: false,
    contacts: ['Martin', 'juan', 'pedro'],
    card: {
        brand: 'samsung',
        storage: 128
    },
    "anchura-tarjeta": 5
};

phone.year = 2023;
console.log(phone.card.brand);
console.log(phone.year);
console.log(phone["anchura-tarjeta"]);

//Fechas
const rigthNow = new Date();
console.log(rigthNow);

const date_milis = new Date(10);
console.log(date_milis);

const date_now = new Date(2023, 6, 26);
console.log(date_now);

const day = rigthNow.getDate();
const month = rigthNow.getMonth() + 1;
const year = rigthNow.getFullYear();
console.log(day, month, year);