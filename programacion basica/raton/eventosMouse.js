
document.addEventListener("mouseup",dibujarMouse);

var d = document.getElementById("areaDibujo");
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

function dibujarMouse(){
    console.log("Hooooola oD");
}
