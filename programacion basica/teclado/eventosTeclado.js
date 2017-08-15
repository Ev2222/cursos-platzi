
document.addEventListener("keyup",dibujarTeclado);
var teclas = {
    LEFT :37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};

console.log(teclas);

var d = document.getElementById("areaDeDibujo");
var papel = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}

var puntoInicioX = (d.width)/2;
var puntoInicioY = (d.height)/2  
//punto inicial
dibujarLinea("red", puntoInicioX-1, puntoInicioY-1, puntoInicioX+1, puntoInicioY+1);


function dibujarTeclado(evento)
{
    var colorcito =  "Cyan";
    var movimiento = 10;

    switch(evento.keyCode)
    {
        case teclas.LEFT:
            console.log("Izquierda");
            dibujarLinea("cyan", puntoInicioX, puntoInicioY, puntoInicioX - movimiento, puntoInicioY);
            puntoInicioX = puntoInicioX - movimiento;
        break;
        case teclas.UP:
            console.log("Arriba");
            dibujarLinea("cyan", puntoInicioX, puntoInicioY, puntoInicioX , puntoInicioY - movimiento);
            puntoInicioY = puntoInicioY - movimiento;
        break;
        case teclas.RIGHT:
            console.log("Derecha");
            dibujarLinea("cyan", puntoInicioX, puntoInicioY, puntoInicioX + movimiento, puntoInicioY);
            puntoInicioX = puntoInicioX + movimiento;
        break;
        case teclas.DOWN:
        console.log("Abajo");
            dibujarLinea("cyan", puntoInicioX, puntoInicioY, puntoInicioX , puntoInicioY + movimiento);
            puntoInicioY = puntoInicioY + movimiento;
        break;
        default:
        console.log("Otra tecla");
    }
    // console.log(evento);

}

