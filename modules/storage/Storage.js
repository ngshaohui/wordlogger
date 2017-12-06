'use strict';

const JsonDataStorage = require('./JsonDataStorage');
const JsonUserConfigStorage = require('./JsonUserConfigStorage');

const jsonDataStorage = new JsonDataStorage.JsonDataStorage();
const jsonUserConfigStorage = new JsonUserConfigStorage.JsonUserConfigStorage();

class Storage {
  constructor() {
    this.userConfigPath = jsonUserConfigStorage.getUserConfigPath();
    this.dataStoragePath = jsonUserConfigStorage.getDatStoragePath();
  }

  writeToFile(obj) {
    return new Promise((resolve, reject) => {
      jsonDataStorage.writeToJsonFile(this.dataStoragePath, obj)
        .then(() => {
          //TODO emit success event
          return resolve();
        })
        .catch((err) => {
          //TODO emit failure event
          return reject(err);
        });
    });
  }

  loadFromFile() {
    return new Promise((resolve, reject) => {
      jsonDataStorage.loadFromJsonFile(this.dataStoragePath)
        .then((res) => {
          //TODO emit success event
          return resolve(res);
        })
        .catch((err) => {
          //TODO emit failure event
          return reject(err);
        });
    });
  }

}

module.exports = { Storage };
