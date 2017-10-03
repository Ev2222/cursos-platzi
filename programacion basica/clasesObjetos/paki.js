
var imagenes = [];

imagenes['Vaquita'] = 'vaca.png';
imagenes['Pollito'] = 'pollo.png';
imagenes['Cerdito'] = 'cerdo.png';

// Este array asociativo equivale al objeto en notaciòn JSON:
// var imagenes
// {
//     InstanciaAnimalitoVaquita = 'vaca.png',
//     pollito = 'pollo.png',
//     cerdito = 'cerdo.png';
// }

//Mudamos la Clase construida a un archivo exclusivo

// a)
var InstanciaAnimalitoVaquita = new Animalito('Vaquita', 100, 30);
// var pollito = new Animalito('Pollito', 80, 50);
// var cerdito = new Animalito('Cerdito', 120, 40);
// console.log(InstanciaAnimalitoVaquita, pollito, cerdito);
// cerdito.mostrar();

// b)
var coleccion = [];

coleccion.push(InstanciaAnimalitoVaquita);
coleccion.push(new Animalito('Pollito', 80, 50));
coleccion.push(new Animalito('Cerdito', 120, 40));

console.log(coleccion);

// for(var p in coleccion) //Itera sobre el Indice
for(var p of coleccion) //Itera sobre el Objeto
{
    // console.log(coleccion[p]);
    p.mostrar();
}

// Todo bloque de código {} dentro de una clase es una función