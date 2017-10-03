import url from 'url'
import path from 'path'
import {applyFilters, saveImage } from './filters'

function addImagesEvents(){
    const thumbs = document.querySelectorAll('li.list-group-item')
    for (let i = 0, length1 = thumbs.length; i < length1; i++) {
        thumbs[i].addEventListener('click', function() {
            changeImage(this)
            console.log(this)
        })
    }
}

function changeImage(node) {
    const image = document.getElementById('image-displayed')
    
    if (node) {
        const selected = document.querySelector('li.selected')
        if(selected){
            selected.classList.remove('selected')
        }
        node.classList.add('selected')
        image.src = node.querySelector('img').src
        image.dataset.original = image.src
        document.getElementById('filters').selectedIndex = 0

    } else {
        image.src = ''
    }
}

function selectFirstImage() {
    const image = document.querySelector('li.list-group-item:not(.hidden)')
    changeImage(image)
}

function selectEvent() {
    const select =document.getElementById('filters')

    select.addEventListener('change', function () {
        console.log(this.value)
        applyFilters(this.value, document.getElementById('image-displayed'))
    })
}

function searchImagesEvent(){
    const searchBox = document.getElementById('search-box')
    
    searchBox.addEventListener('keyup', function (){
        const regex = new RegExp(this.value.toLowerCase(), 'gi')

        if(this.value.length > 0) {
            const thumbs = document.querySelectorAll ('li.list-group-item img')

            for(let i = 0, length1 = thumbs.length; i < length1; i++){
                const fileUrl = url.parse(thumbs[i].src)
                const fileName = path.basename(fileUrl.pathname)

                if (fileName.match(regex)) {
                    thumbs[i].parentNode.classList.remove('hidden')
                } else {
                    thumbs[i].parentNode.classList.add('hidden')
                }
            }
            selectFirstImage()
        } else {
            const hidden = document.querySelectorAll('li.hidden')
            for (let i = 0, length1 = hidden.length; i < length1; i++){
                hidden[i].classList.remove('hidden')            
            }
        }
    })
}

function loadImages(images){
    const imagesList = document.querySelector('ul.list-group')

    images.forEach((image) => {        
        const {src, filename, size} = image
        const node = `
            <li class="list-group-item">
                <img class="media-object pull-left" src="${src}" width="32" height="32">
                <div class="media-body">
                    <strong>${filename}</strong>
                    <p>${size}</p>
                </div>
            </li>`
        imagesList.insertAdjacentHTML('beforeend', node)
    })
}

function clearImages () {
    const oldImages =document.querySelectorAll('li.list-group-item')
    oldImages.forEach (function (oldImage) {
        oldImage.parentNode.removeChild(oldImage)
    })
}

function print(){
    window.print()
}

module.exports = {
    addImagesEvents,
    changeImage,
    selectFirstImage,
    selectEvent,
    searchImagesEvent,
    loadImages,
    clearImages,
    print,
}