//TODO abstract the electron app's window initialization into its own component

// Entrypoint for Electron

const {
  app,
  BrowserWindow
} = require('electron')

require('./modules/moduleHandler')

let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 700,
    height: 700,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
  // win.loadURL(`file://${__dirname}/dist/index.html`) // production
  win.loadURL(`http://localhost:4200/`) //dev using ng serve

  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', () => {
    win = null
  })
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})