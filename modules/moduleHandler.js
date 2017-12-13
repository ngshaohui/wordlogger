// TODO should ideally make an ipc handler

const electron = require('electron');
const ipc = electron.ipcMain;

const Storage = require('./storage/Storage')
const Model = require('./model/Model')

let storage = new Storage.Storage()
let model = new Model.Model(storage)

ipc.on('store-vocab', (event, card) => {
  model.add(card)
})
