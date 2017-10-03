import {remote} from 'electron'
import {openDirectory, saveFile, openPrefences, print, uploadImage, pasteImage} from './ipcRendererEvents'

function createMenu(){
    const template = [
        {
            label: 'Archivo',
            submenu: [
                {
                    label: 'Abrir ubicación',
                    accelerator: 'CmdOrCtrl+O',
                    click () { openDirectory() }
                }, 

                {
                    label: 'Guardar',
                    accelerator: 'CmdOrCtrl+G',                    
                    click () { saveFile() }
                },

                {
                    label: 'Preferencias',
                    accelerator: 'CmdOrCtrl+P',                    
                    click () { openPrefences() }                    
                }
            ]
        },

        {
            label: 'Edición',
            submenu: [
                {
                    label: 'Imprimir',
                    accelerator: 'CmdOrCtrl+I',                                       
                    click () { print() }
                }, 

                {
                    label: 'Subir Imagen',
                    accelerator: 'CmdOrCtrl+U',
                    click () { uploadImage() }
                },

                {
                    label: 'Pegar Imagen',
                    accelerator: 'CmdOrCtrl+V',
                    click () { pasteImage() }                    
                }
            ]
        },

        {
            label: 'Otros',
            submenu: [
                {
                    label: 'Salir',
                    accelerator: 'CmdOrCtrl+Q',
                    role: 'quit'
                }
            ]
            
        }
    ]
    const menu = remote.Menu.buildFromTemplate(template)
    remote.Menu.setApplicationMenu(menu)
}

module.exports = createMenu