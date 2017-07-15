const {app, ipcMain, BrowserWindow} = require('electron');
const remote = require('electron').remote;

let win;

app.on('ready', createWindow);
//const menu = Menu.buildFromTemplate(template)
//Menu.setApplicationMenu(menu)
ipcMain.on('index2', (event,arg)=>{
  //console.log(event);
  ////var window = remote.getCurrentWindow();
  closeWindow();
  openWindow('index2');
  ////window.close();
});
ipcMain.on('index', (event,arg)=>{
  //console.log(event);
  var window = remote.getCurrentWindow();
  openWindow('index');
  window.close();
});
//ipcMain.on('index2', openWindow('index2'));
//ipcMain.on('index', openWindow('index'));


//create function to create window
function createWindow()
{
  win = new BrowserWindow({
    //define width and height of window
    width:800,
    height:600,
    titleBarStyle: 'hidden',
    icon: __dirname + '/img/logo.png'
  });
  win.loadURL('file://' + __dirname + '/index.html');

  require('./menu');
  win.on('close',closeWindow)
}

function openWindow1()
{
  win = new BrowserWindow({
    //define width and height of window
    width:800,
    height:600,
    titleBarStyle: 'hidden',
    icon: __dirname + '/img/logo.png',
    show: true
  });
  win.loadURL('file://' + __dirname + '/index.html');
  //win.loadURL('file://' + __dirname + '/' + xfile);
  require('./menu');
  win.on('close',closeWindow)
}

var openWindow = (filename) => {

  let win = new BrowserWindow({
    //define width and height of window
    width:800,
    height:600,
    titleBarStyle: 'hidden',
    icon: __dirname + '/img/logo.png',
    show: true
  });
  //win.loadURL('file://' + __dirname + '/index.html');
  win.loadURL('file://' + __dirname + '/' + filename + '.html');
  require('./menu');
  win.on('close',closeWindow)
}

function closeWindow()
{
  win = null;
}
