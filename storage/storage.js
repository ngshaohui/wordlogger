'use strict';

const electron = require('electron');
const ipc = electron.ipcMain;

const fs = require('fs');

ipc.on('test-msg', (event, obj) => {
  console.log(obj);
  console.log(typeof obj);
});