'use-strict';

const electron = require('electron');
const ipc = electron.ipcMain;

const Model = require('./model/Model');
const Storage = require('./storage/Storage');

const storage = new Storage.Storage();
const model = new Model.Model(storage);

ipc.on('store-word', (event, obj) => {
  model.add(obj)
});
