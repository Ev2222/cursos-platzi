
var texto = document.getElementById("txtLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("cyan", 80, 80, 80, 250);
dibujarLinea("pink", 50, 50, 50, 250);


function dibujoPorClick()
{
    // alert("Diste click al boton!!");
    
    var lineas = parseInt(texto.value);
    espacioEntreLineas = ancho/lineas;
    var l = 0;
    var yi, xf;

    while(l < lineas)
    {
        yi = espacioEntreLineas * l;
        xf = espacioEntreLineas * (l + 1)
    dibujarLinea("#FAA", 0, yi, xf, ancho);
    console.log("Linea" + l);
    l ++;
    }

    dibujarLinea("#AFA", 1, 1, 1, ancho -1);
    dibujarLinea("#AFA", 1, ancho -1, ancho -1, ancho -1);

    var xi, yf;

    for(i = 0; i < 30; i++)
    {
        xi = 10 * i;
        yf = 10 * (i + 1);
    dibujarLinea("#AAF", xi, 0, 300, yf);
    console.log("Linea" + l);
    }

    dibujarLinea("#AFA", 1, 1, 299, 1);
    dibujarLinea("#AFA", 299, 0, 299, 299);

}