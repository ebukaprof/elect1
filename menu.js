const {Menu, dialog} = require('electron')
const electron = require('electron')

const {ipcRenderer} = electron;
//const ipcRenderer = require('electron').ipcRenderer;
//var main = require("./app.js")
const app = electron.app
//const ipcRenderer = electron.ipcRenderer;

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open File',
        click: function(){
          dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
        }
      },
      {
        label: 'About App',
        click: function(){
          dialog.showMessageBox({title:'Hello', message:'Hello User'});
        }
      },
      {type: 'separator'},
      {role: 'quit'}
    ]
  },
  {
    label: 'Commands',
    submenu: [
      {
        label: 'Application Version',
        click: function(){
          //
          ipcRenderer.send('show-version',1);
          //main.openVersionWindow();
        }
      },
      {
        label: 'System Specs',
        click: function(){
          //
        }
      },
      {
        label: 'System Memory',
        click: function(){
          //
        }
      },
      {
        label: 'Computer Info',
        click: function(){
          //
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      //{role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      //{role: 'forcereload'},
      //{role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
