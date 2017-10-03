
//LLamar al conjunto de librerias 
var express = require('express');

//Instancia de la libreria express q se invoca usando como una función
var aplicacion = express();
 
 // aqui se maneja el 'evento': ir a la url, donde '/' es el home por defecto
 //'inicio' sera la funcion
aplicacion.get('/', inicio);
aplicacion.get('/cursos', cursos);


function inicio(requestPeticion, responseResultado)
{
    //resultado
    responseResultado.send("Este es el <strong>Home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los cursos");
}
 
 //Correr el servidor
aplicacion.listen(8989);

// este archivo se abre con Nodejs
//cmd -> Ir a ruta -> Node servidor.js -> npm install express
// con ello se instala Node local, (en mi carpeta) se puede ver la carpeta creada (node_modules)
//ejecutar nuevamente node servidor.js
//el servidor esta corriendo!! 
//ir al navegador, barra de direcciones: 127.0.0.1:8989

//Mala practica hacer instalacion global de NodeJs, instalar local cada directorio