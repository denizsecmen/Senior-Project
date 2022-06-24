// Modules
const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path');
const fs=require('fs');
const mysql=require("mysql2");
const { connect } = require('http2');
const connt=mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:"Dgs1905,",
    database:"load_path"
  }
)
connt.connect((err) =>
{
if(err)
{return console.log(err.stack);}
console.log("Connection Sucessful");
});
let ad;
let mainWindow
// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800, x: 100, y: 140,
    icon: __dirname + '/icons/cstl.png',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      webviewTag: true,
      protocol: 'file:',
      slashes: true
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();
  mainWindow.webContents.on( 'did-finish-load', e => {
  })
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}
//Preload
ipcMain.on("preload",(e,args) =>
{
  connt.query("SELECT Path FROM path;", function (error, results, fields) {if (error) throw error;
    console.log(results);
    e.sender.send("channel2-reply",JSON.stringify(results));
  })
})



//Read the File
ipcMain.on("channel-1",(e,args) =>
{
  console.log(args);
  var data=fs.readFile(args,'utf8',(err,data) => {
    if(err){throw err;}
    e.reply('channel1-reply',data);
  });
});


//Read All Database
function dataread()
{
  connt.query("SELECT * FROM path;", function (error, results, fields) {if (error) throw error;
    console.log(results);
    var t="asdsa";
    return t;
  });
}


//Adding New File
ipcMain.on("channel-2",(e,args) => 
{
console.log(args);
args=JSON.parse(args);
console.log(args);
  var data=fs.readFile(args.path,'utf8',(err,data) => {
    if(err){throw err;}
  });
  var z=args.path.replaceAll("\\","\\\\");
connt.query("INSERT INTO path VALUES ('"+z+"','"+data+"','d','"+args.type+"');", function (error, results, fields) {if (error) throw error;
  console.log(results); 
});
connt.query("SELECT Path FROM path;", function (error, results, fields) {if (error) throw error;
  e.sender.send("channel2-reply",JSON.stringify(results));
});
})



//Removing the file
ipcMain.on("rem-cha",(e,args) =>
{
 args=args.replaceAll("\\","\\\\");
 args=args.replaceAll("\\","\\"); 
 console.log(args);
 connt.query("DELETE FROM path WHERE Path = '"+args.toString()+"';", function (error, results, fields) {if (error) throw error;
  console.log(results); 
});
connt.query("SELECT Path FROM path;", function (error, results, fields) {if (error) throw error;
  e.sender.send("channel2-reply",JSON.stringify(results));
});
});



//Open Windows
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})