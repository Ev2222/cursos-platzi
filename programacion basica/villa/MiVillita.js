
var v = document.getElementById("villa");
var tablero = v.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "pollo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    // dibujar();

    repintar(cuantosPollitos);

}

var cuantasVacas = aleatorio(5, 15);
console.log("Vaquitas: " + cuantasVacas);

var cuantosCerditos = aleatorio(2, 8);
console.log("Cerditos: " + cuantosCerditos);

var cuantosPollitos = aleatorio(5, 6);
console.log("Pollitos: " + cuantosPollitos);



function dibujar()
{

    if(fondo.cargaOk)
    {
        tablero.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOk)
    {
        for(var v = 0; v < cuantasVacas; v++)
        {
            // Posicion aleatoria 
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 7);
            // Distribuir elementos en cuadricula 
            x= x * 70;
            y= y * 60;

            tablero.drawImage(vaca.imagen, x, y)
        }
    }

    if(cerdo.cargaOk)
    {
        for(var c = 0; c < cuantosCerditos; c++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x= x * 70;
            y= y * 60;

            tablero.drawImage(cerdo.imagen, x, y)
        }
    }

}



function repintar(cuantosAnimalitos)
{

    if(pollo.cargaOk)
    {
        for(var c = 0; c < cuantosAnimalitos; c++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x= x * 70;
            y= y * 60;

            tablero.drawImage(pollo.imagen, x, y);


        }
    }
}



function tablerito()
{
    // Posiciones tablero Imaginario 
    var p = 0, x, y;

    for(var xTab = 0;  xTab< 8; xTab++)
        {
            for(var yTab = 0; yTab < 7; yTab++)
            {
                p = p + 1;
                x= xTab * 70;
                y= yTab * 60;
                // celdas
                // document.write("(" + xTab + "," + yTab + ")");
                // document.write(p + ",");
                // Coordenadas
                // document.write("[" + x + "," + y + "]");



            }
            document.write("</br>");
        }
    
}



function aleatorio(min, max)
{
    var resultado;
    // resultado = Math.round(Math.random() * 100);
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

var z = aleatorio(3, 15);
document.write(z);



