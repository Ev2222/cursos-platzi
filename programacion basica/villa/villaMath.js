
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
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        tablero.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOk)
    {
        var cuantasVacas = aleatorio(5, 15);
        console.log("Vaquitas: " + cuantasVacas);

        for(var v = 0; v < cuantasVacas; v++)
        {
            // Posicion aleatoria 
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            // Distribuir elementos en cuadricula 
            x= x * 70;
            y= y * 60;

            tablero.drawImage(vaca.imagen, x, y)
        }
    }

    if(cerdo.cargaOk)
    {
        var cuantosCerditos = aleatorio(1, 8);
        console.log("Cerditos: " + cuantosCerditos);

        for(var c = 0; c < cuantosCerditos; c++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x= x * 70;
            y= y * 60;

            tablero.drawImage(cerdo.imagen, x, y)
        }
    }

    if(pollo.cargaOk)
    {
        var cuantosPollitos = aleatorio(5, 20);
        console.log("Pollitos: " + cuantosPollitos);

        for(var c = 0; c < cuantosPollitos; c++)
        {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x= x * 70;
            y= y * 60;

            tablero.drawImage(pollo.imagen, x, y)
        }
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



