'use strict'
 
import { app, BrowserWindow, Tray, globalShortcut, protocol} from 'electron'

import devtools from './devtools'
import setMainIpc from './ipcMainEvents'
import handleErrors  from './handle-errors'
import os  from 'os'
import path  from 'path'


if (process.env.NODE_ENV ==='development') {
    devtools()
}

// Imprimiendo un mesaje en la consola antes de salir
app.on('before-quit', () => {
    globalShortcut.unregisterAll()
    console.log('Saliendo...')
})

// Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready', () => {

    protocol.registerFileProtocol('plzp', (request, callback) => {
        const url = request.url.substr(7)
        // "platzpic://"
        callback({path: path.normalize(url)})
    }, (err) => {
        if (err) throw err
    })
      
    // Creando la ventana
    global.win = new BrowserWindow({
        with: 800,
        height: 600,
        title: 'Hola Mundo :)',
        center: true,     
        maximizable: true,
        show: false
    })

    globalShortcut.register('CommandOrControl+Alt+p', () => {
        global.win.show()
        global.win.focus()
    })

    setMainIpc(global.win)
    
    handleErrors(global.win)

    global.win.once('ready-to-show', () => {
        global.win.show()
    })

    global.win.once('move', () => {
        const position = global.win.getPosition()
        console.log(`La posicion es ${position}`)
    })

    // Detectando el cierre de la ventana para cerrar el aplicativo
    global.win.on('closed', () => {
        global.win = null
        app.quit()
    })

    let icon

    if (os.platform() === 'win32'){
        icon = path.join(__dirname, 'assets', 'icons', 'iconito.ico')
    }   
    else {
        icon = path.join(__dirname, 'assets', 'icons', 'iconito.png')
        
    }

    global.tray = new Tray(icon)
    global.tray.setToolTip('PlatziPics')
    global.tray.on('click', () => {
        (global.win.isVisible())
        ? global.win.hide()
        : global.win.show()
    })

    // global.win.loadURL('http://devdocs.io/')
    global.win.loadURL(`file://${__dirname}/renderer/index.html`)

    // Equivalente al Inspeccionar Codigo HTML
    global.win.toggleDevTools()
    
})





















/* 
Node js:
    module.exports = {...}
    require () 

Metodos nativos de JS
    export {...}
    import {addImagesEvents, searchImagesEvent, selectEvent} from './images-ui' 

*/




// console.dir(app) ver las propiedades de app

// ()=> arrow function
// app.quit() Finalizar el aplicativo
// objeto BrowserWindow : cargar el contenido visual del aplicactivo de escritorio junto con app.on('ready')