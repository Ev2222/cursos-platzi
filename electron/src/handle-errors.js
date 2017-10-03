
import {app, dialog } from 'electron'

function relaunchApp (win) {
    dialog.showMessageBox(win, {
        type: 'error',
        title: 'PlatziPics',
        message: 'Ocurrio un error inesperado, se reiniciará el aplicativo',
    }, () => {
        app.relaunch()
        app.exit(0)
    })
}

function setupErrors (win) {
    win.webContents.on('crashed', () => {
        relaunchApp(win)
    })

    win.on('unresponsive', () => {
        dialog.showMessageBox(win, {
            type: 'warning',
            title: 'PlatziPics',
            message: 'Un proceso esta tardando demasiado, puede esperar o reiniciar el aplicativo',
        })
    })

    process.on('uncaughtExeption', () => {
        relaunchApp(win)
    })
}

module.exports = setupErrors