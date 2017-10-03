
import {ipcMain, dialog } from 'electron'
import isImage from 'is-image'
import fs from 'fs'
import path from 'path'
import filesize from 'filesize'

function setMainIpc(win){

    ipcMain.on('open-directory', (event) => {
        dialog.showOpenDialog(win, {
            title: 'Seleccione la nueva ubicación',
            buttonLabel: 'Abrir ubicación',
            properties: ['openDirectory']
        },
        (dir) => {
            console.log(dir)
            
            if (dir) {
                loadImages(event, dir[0])                
            }
        })
    })

    ipcMain.on('load-directory', (event, dir) => {
        loadImages(event, dir)
    })

    ipcMain.on('open-save-dialog', (event, ext) => {
        dialog.showSaveDialog(win, {
            title:'Guardar Imagen con filtro',
            buttonLabel: 'Guardar Imagen', 
            filters: [{name: 'Images', extensions: [ext.substr(1)]}]
        }, ((file) => {
            event.sender.send('save-image', file)
            console.log(file)
        }))
    })

    ipcMain.on('show-dialog', (event, info) => {
        dialog.showMessageBox(win, info)
    })
}

function loadImages(event, dir) {

    const images = []    

    fs.readdir(dir, (err, files) => {
        console.log(files)
        if (err) throw err 

        files.forEach((file, i) => {
            console.log("Nombre: " + file + " Posición: " + i)
            if(isImage (file)) {
                const imageFile = path.join(dir, file)
                const stats = fs.statSync(imageFile)
                const size = filesize(stats.size, {round: 0})
                images.push({
                    filename: file, 
                    src:  `plzp://${imageFile}`,
                    size
                })
            }
        })
        event.sender.send('load-images',dir, images)
    })
}

module.exports = setMainIpc