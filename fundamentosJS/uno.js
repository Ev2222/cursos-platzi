
console.log("El area de un triangulo de base 5 y altura 7 es: " + 5*7/2)

console.log('El area de un triangulo de base 5 y altura 7 es: ' + 5*7/2)

console.log(`El area de un triangulo de base 5 y altura 7 es: ${5*7/2}`) // ${} -> script

//-+-+-+-+-+-+-+-+-+-+-
let base = 5
let altura = 7

console.log(`El area de un triangulo de base 5 y altura 7 es: ${base*altura/2}`) // `${}` -> template string

//-+-+-+-+-+-+-+-+-+-+-
let base = 5
let altura = 7
//function(){} //->funcion Anónima
function areaTriangulo(base, altura) {
    return base * altura / 2
}

console.log(`El area de un triangulo de base ${base} 
    y altura ${altura} es: ${areaTriangulo(base,altura)}`) 

//-+-+-+-+-+-+-+-+-+-+-
let base = 5
let altura = 7

//-> Arrow Function
let areaTriangulo = function (base, altura) {
    return base * altura / 2
}

console.log(`El area de un triangulo de base ${base} 
    y altura ${altura} es: ${areaTriangulo(base,altura)}`) 

//-+-+-+-+-+-+-+-+-+-+-
let base = 5
let altura = 7

//-> Arrow Function
let areaTriangulo = (base, altura) => base * altura / 2 //or 
const areaTriangulo = (base, altura) => base * altura / 2


console.log(`El area de un triangulo de base ${base} 
    y altura ${altura} es: ${areaTriangulo(base,altura)}`) 

//-+-+-+-+-+-+-+-+-+-+-
let lado = 8

const areaCuadro = (lado) => lado * lado

console.log(`El area de un Cuadrado de lado ${lado} es: ${areaCuadro(lado)}`) 

