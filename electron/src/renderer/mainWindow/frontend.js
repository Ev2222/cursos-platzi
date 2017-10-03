// import os from 'os'
// window.addEventListener('load', () => {
//     // document.getElementById('mensaje').innerHTML = 'Este es un mensaje insertado por JS'
//     // Acceso a caracteristicas del SO
//     console.log(os.cpus())
// })




import { setIpc, openDirectory, saveFile, openPrefences, uploadImage, pasteImage} from './mainWindow/ipcRendererEvents'
import {addImagesEvents, searchImagesEvent, selectEvent, selectFirstImage, print} from './mainWindow/images-ui'
import createMenu from './mainWindow/menu'


window.addEventListener('load', () => {
    createMenu()
    setIpc()
    addImagesEvents()
    searchImagesEvent()
    selectEvent()
    selectFirstImage()
    buttonEvent('open-directory', openDirectory)
    buttonEvent('open-preferences', openPrefences)
    buttonEvent('save-button', saveFile)  
    buttonEvent('print-button', print)
    buttonEvent('upload-button', uploadImage)
    buttonEvent('paste-button', pasteImage)
    
    
      
})

function buttonEvent(id, func){
    const openDirectory = document.getElementById(id)
    openDirectory.addEventListener('click', func)
}

/* Refactorizar
        loadImages(images)
        selectFirstImage()
        addImagesEvents()
        selectEvent()
        searchImagesEvent()
*/