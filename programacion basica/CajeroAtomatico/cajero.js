
class Billete
{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;    
    }
}

function entregarDinero()
{
    var cantidadS = document.getElementById("cantidadSolicitada");

    var cantidadSolicitada = parseInt(cantidadS.value);


    for (var bi of caja)
    {
        if(cantidadSolicitada > 0)
        {
            div = Math.floor(cantidadSolicitada/bi.valor);
            if(div > bi.cantidad)
            {
                efectivo = bi.cantidad;
            }
            else
            {
                efectivo = div;
            }

            entregado.push (new Billete(bi.valor, efectivo) );
            cantidadSolicitada= cantidadSolicitada - (bi.valor * efectivo)

        }
    }

        if(cantidadSolicitada > 0)
        {
            resultadoE.innerHTML = 'No hay suficiente para entregar :(';

        }
        else
        {
            for( var e of entregado)
            {
                if(e.cantidad > 0)
                {
                    resultadoE.innerHTML += e.cantidad + ' billetes de ' + e.valor + '<br />';                    
                }
            }
        }

    console.log(entregado)
}



var caja = [];
var entregado = [];

caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 10) );
caja.push( new Billete(10, 15) );

var cantidadSolicitada;

var div = 0;
var efectivo = 0;

var boton = document.getElementById("botonExtraer");
boton.addEventListener("click", entregarDinero);

var resultadoE = document.getElementById("resultadoEntrega");


// js lee, encuentra clases, funciones, bloques de codigo; Monta en RAM e ejecuta lineas independientes