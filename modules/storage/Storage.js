'use strict';

import { JsonDataStorage } from './JsonDataStorage';
import { JsonUserConfigStorage } from './JsonUserConfigStorage';

const jsonDataStorage = new JsonDataStorage();
const jsonUserConfigStorage = new JsonUserConfigStorage();

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
    }
  }

  loadFromFile() {
    return new Promise((resolve, reject) => {
      jsonDataStorage.loadFromFile(this.dataStoragePath)
        .then((res) => {
          //TODO emit success event
          return resolve(res);
        })
        .catch((err) => {
          //TODO emit failure event
          return reject(err);
        });
    }
  }

}

module.exports = { Storage };
