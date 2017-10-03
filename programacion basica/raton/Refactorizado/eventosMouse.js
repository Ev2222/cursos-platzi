var areaDibujo = document.getElementById('areaDibujo');
var lienzo = areaDibujo.getContext('2d');

var anchoLinea = 1;
var colorcito = "black";
var estado = false;

var x;
var xf;
var y;
var yf;

document.addEventListener('mousedown', clickInicio);
document.addEventListener('mousemove', pintar);
document.addEventListener('mouseup', terminaTrazo);

function clickInicio(evento) {
    x = evento.layerX;
    y = evento.layerY;

    estado = true;
}

function pintar(evento) {
    if (estado == true) {  
        xf = evento.layerX;
        yf = evento.layerY;

        dibujarLinea(colorcito, x, y, xf, yf);

        x = xf;
        y = yf;    
    }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();

    lienzo.strokeStyle = color;
    lienzo.lineWidth = anchoLinea;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();

    lienzo.closePath();
}

function terminaTrazo(evento) {
    estado = false;
}

var cuadrado = document.getElementsByClassName('cuadrado');
for (var i = 0; i < cuadrado.length; i++) {
    cuadrado[i].addEventListener('click', seleccionarColor);
}

function seleccionarColor() {
    colorcito = this.getAttribute('color');
}


var selectAncho = document.getElementById('anchoLinea');

document.addEventListener('change', elegirAchoLinea);

function elegirAchoLinea()
{
    anchoLinea = selectAncho.value;
}
