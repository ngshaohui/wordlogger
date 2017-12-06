'use-strict';

const electron = require('electron');
const ipc = electron.ipcMain;

import { Model } from './model/Model';
import { Storage } from './storage/Storage';

const storage = new Storage();
const model = new Model(storage);

ipc.on('store-word', (event, obj) => {
  //TODO should not be calling storage directly
  model.add(obj);
});
