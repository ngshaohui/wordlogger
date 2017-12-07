// TODO should ideally make an ipc handler

'use-strict';

const electron = require('electron');
const ipc = electron.ipcMain;

const Model = require('./model/Model');
const Storage = require('./storage/Storage');

const storage = new Storage.Storage();
const model = new Model.Model(storage);

ipc.on('store-vocab', (event, obj) => {
  console.log("received");
  console.log(obj);
  model.add(obj)
});
