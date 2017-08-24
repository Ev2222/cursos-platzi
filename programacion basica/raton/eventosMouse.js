
document.addEventListener("mousedown", clickInicio);
document.addEventListener("mousemove", pintar);
document.addEventListener("mouseup", terminaTrazo);

var l = document.getElementById("areaDibujo");
var lienzo = l.getContext("2d");

var colorcito = "black";

var botonRojo = document.getElementById("buttonRed");
botonRojo.addEventListener("click", seleccionarColorR);
var botonVerde = document.getElementById("buttonGreen");
botonVerde.addEventListener("click", seleccionarColorV);
var botonAzul = document.getElementById("buttonBlue");
botonAzul.addEventListener("click", seleccionarColorA);

var botonMorado = document.getElementById("buttonPurple");
botonMorado.addEventListener("click", seleccionarColorM);
var botonCyan = document.getElementById("buttonCyan");
botonCyan.addEventListener("click", seleccionarColorC);
var botonAmarillo = document.getElementById("buttonYellow");
botonAmarillo.addEventListener("click", seleccionarColorAm);
var botonRosa = document.getElementById("buttonPink");
botonRosa.addEventListener("click", seleccionarColorRos);
var botonBlanco = document.getElementById("buttonWhite");
botonBlanco.addEventListener("click", seleccionarColorBl);
var botonGris = document.getElementById("buttonGray");
botonGris.addEventListener("click", seleccionarColorG);
var botonNegro = document.getElementById("buttonBlack");
botonNegro.addEventListener("click", seleccionarColorN);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

var x, y, xf, yf, estado = 0;


function clickInicio(evento)
{
    console.log(evento);

    if (estado == 0) {
        console.log("Punto Inicio X: "+evento.layerX);
        console.log("Punto Inicio Y: "+evento.layerY);

        x = evento.layerX;
        y = evento.layerY;

        estado = 1;

    } 
}

function pintar(evento)
{
    if (estado == 1) {    
        console.log("X Final: "+evento.layerX);
        console.log("Y Final: "+evento.layerY);

        xf = evento.layerX;
        yf = evento.layerY;
        dibujarLinea(colorcito, x, y, xf, yf);
        x =xf;
        y = yf;    
    }
}

function terminaTrazo(evento)
{
    console.log("Ahora puedes iniciar un nuevo trazo" + evento);
        estado = 0;
}

function seleccionarColorR()
{
    colorcito = "red";      
}
function seleccionarColorV()
{
    colorcito = "green";      
}
function seleccionarColorA()
{
    colorcito = "blue";      
}
function seleccionarColorM()
{
    colorcito = "purple";      
}
function seleccionarColorC()
{
    colorcito = "cyan";      
}
function seleccionarColorAm()
{
    colorcito = "yellow";      
}
function seleccionarColorRos()
{
    colorcito = "pink";      
}
function seleccionarColorBl()
{
    colorcito = "white";      
}
function seleccionarColorG()
{
    colorcito = "gray";      
}
function seleccionarColorN()
{
    colorcito = "black";      
}


