//handle all the script for index.html
var {ipcRenderer, remote} = require('electron');
var main = remote.require("./app.js");
var Menu = remote.require('menu');



const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


//////////////////////////////
Try this:

main.js

var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')
var mainWindow = null
app.on('ready', function () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadUrl(`file://${ __dirname}/index.html`)
})
ipc.on('resize', function (e, x, y) {
  mainWindow.setSize(x, y)
})
index.html

<!DOCTYPE html>
<title>test</title>
<button>click</button>
<script>
  var ipc = require('ipc')
  var btn = document.querySelector('button')
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    ipc.send('resize', 600, 800)
  })
</script>
