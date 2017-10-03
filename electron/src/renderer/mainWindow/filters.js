import fs from 'fs'

function applyFilters (filter, currentImage) {
    let imgObj = new Image()
    imgObj.src = currentImage.dataset.original
     
    filterous.importImage(imgObj, {})
    .applyInstaFilter(filter)
    .renderHtml(currentImage)
}

function saveImage (fileName, callback){
    let fileSrc = document.getElementById('image-displayed').src
    console.log(fileName)
    if (fileSrc.indexOf (';base64',) !== -1){
        fileSrc = fileSrc.replace(/^data:([A-Za-z-+/]+);base64,/,'')
        fs.writeFile(fileName, fileSrc, 'base64',callback)
    } 
    else {
        fileSrc = fileSrc.replace('plzp://','')
        fs.copy(fileSrc, fileName, callback)
    }
}



module.exports ={ 
    applyFilters, 
    saveImage,
}