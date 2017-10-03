import settings from 'electron-settings'
import { ipcRenderer, remote, clipboard, shell } from 'electron'
import {addImagesEvents, selectFirstImage, loadImages, clearImages} from './images-ui'
import Cloudup from 'cloudup-client'
import crypto from 'crypto'
import path from 'path'
import {saveImage} from './filters'
import os from 'os'


function setIpc (){

    if (settings.has('directory')){
        ipcRenderer.send('load-directory', settings.get('directory'))
    }
    
    ipcRenderer.on('load-images', (event, dir, images) => {
        clearImages()
        loadImages(images)
        selectFirstImage()
        addImagesEvents()
        settings.set('directory', dir)
        console.log(images)
        console.log(settings.file())
        document.getElementById('directory').innerHTML = dir
    })

    ipcRenderer.on('save-image', (event, file) => {
        saveImage(file,  (err) => {
            if (err) return showDialog('error', 'platziPics', err.message)
            
            document.getElementById('image-displayed').dataset.filtered = file
            showDialog('info', 'platziPics', 'La imagen fue guardada')
        })
    })
}

function openPrefences (){
    const {BrowserWindow} = remote
    const mainWindow = remote.getGlobal('win')

    const preferencesWindow = new BrowserWindow({
        width: 400,
        heigth: 300,
        title: 'Preferencias',
        center: true,
        modal: true,
        frame: false,
        show: false,
    })

    console.log(os.platform())

    if (os.platform() !== 'win32'){
        preferencesWindow.setParentWindow(mainWindow)
    }

    preferencesWindow.once('ready-to-show',() => {
        preferencesWindow.show()
        preferencesWindow.focus()
    })

    preferencesWindow.loadURL(`plzp://${path.join(__dirname, '..')}/preferences.html`)
}

function openDirectory(){
    ipcRenderer.send('open-directory')
}

function showDialog(type, title, message) {
    ipcRenderer.send('show-dialog', {type, title, message})

}

function saveFile(){
    const image = document.getElementById('image-displayed').dataset.original
    console.log(image)
    const ext = path.extname(image)
    ipcRenderer.send('open-save-dialog',ext)
}

function uploadImage () {
    let imageNode = document.getElementById('image-displayed')

    let image
    if(imageNode.dataset.filtered) {
        image = imageNode.dataset.filtered
    }
    else {
        image = imageNode.src    
    }

    image = image.replace('plzp://', '')
    let fileName = path.basename(image)

    if (settings.has('cloudup.user') && settings.has('cloudup.passwd')) {

        document.getElementById('overlay').classList.toggle('hidden')

        const decipher = crypto.createDecipher('aes192', 'PlatziPics')
        let decrypter = decipher.update(settings.get('cloudup.passwd'), 'hex', 'utf8')
        decrypter += decipher.final('utf8')

        const client = Cloudup({
            user: settings.get('cloudup.user'),
            pass: decrypter
        })

        const stream = client.stream({title: `PlatziPics - ${fileName}`})

        stream.file(image).save((err) => {
            
            document.getElementById('overlay').classList.toggle('hidden')
        
            if (err) {
                // showDialog('error', 'PlatziPics', 'Verifique su conexión y/o credenciales de las preferencias')        
                const notify = new Notification('PlatziPics',{
                    body: `Verifique su conexión y/o credenciales de las preferencias`,
                    silent: false
                })
                notify.onclick = () => {
                    console.log('Observa la notificación de SO')
                    shell.openExternal('https://es.pinterest.com')
                    
                }
            }
            else {
                clipboard.writeText(stream.url)
                const notify = new Notification('PlatziPics',{
                    body: `Imagen cargada con éxito - ${stream.url}, el enlace se copio en el portapapeles`+
                    `De click para copiar la URL`,
                    silent: false
                })

                notify.onclick = () => {
                    shell.openExternal('https://es.pinterest.com')
                }
                // showDialog('error', 'PlatziPics', `Imagen cargada con éxito - ${stream.url}, el enlace se copio en el portapapeles`)        
            }
        })
    }
    else {
        showDialog('error', 'PlatziPics', 'Complete las preferencias')
    }
}

function pasteImage() {
    const image = clipboard.readImage()
    const data =    image.toDataURL()
    if (data.indexOf('data:image/png;base64') !== -1 && !image.isEmpty()) {
        let mainImage = document.getElementById('image-displayed')
        mainImage.src = data
        mainImage.dataset.original = data
    }
    else{
        showDialog('error', 'PlatziPics', 'No hay una imagen valida en el portapapeles')
    }
}

module.exports = {
    setIpc,
    openDirectory,
    saveFile,
    openPrefences,
    uploadImage,
    pasteImage,
}

