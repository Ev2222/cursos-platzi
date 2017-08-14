
document.addEventListener("keyup",dibujarTeclado);
var teclas = {
    LEFT :37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};
console.log(teclas);

var d = document.getElementById("areaDeDibujo");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

// posicionInicial
//nuevaPosicion
// function posicion(){
var centroHorizontal = (d.width)/2;
var centroVertical = (d.height)/2    
// }
function dibujarTeclado(evento){
    switch(evento.keyCode)
    {
        case teclas.LEFT:
        console.log("Izquierda");
        
        dibujarLinea("cyan", centroHorizontal, centroVertical, centroHorizontal -100, centroVertical);

        break;
        case teclas.UP:
        console.log("Arriba");
        break;
        case teclas.RIGHT:
        console.log("Derecha");
        break;
        case teclas.DOWN:
        console.log("Abajo");
        break;
        default:
        console.log("Otra tecla");
    }
    // console.log(evento);

}

