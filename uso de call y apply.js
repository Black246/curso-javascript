let person1 = {
    name: 'juan',
    lastName: 'Perez',
    fullName: function(title, tel){
        return title + ': ' + this.name + ' ' + this.lastName + ' ' + tel;
    }
}

let person2 = {
    name: 'Carlos',
    lastName: 'Lara'
}

//Uso de call para usar el metodo person1.fullName con los datos del person2
console.log(person1.fullName('Lic', '30025978'));
let array = ['Ing', '5544328'];
console.log(person1.fullName.apply(person2, array));