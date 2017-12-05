/*
 * TODO complete this
 * leaving this out for now since it is not imperative to making this work
 * Should generate a default config file when the app is first launched
 */

/*
 * Contents of the appConfig file should not be changed by the user
 * Can possibly obfuscate the contents
 */

'use strict';

const fs = require('fs');
const defaultUserConfigPath = './userConfig.json';

const defaultDataStoragePath = "/Users/shaohui/Documents/data/data.json"

class JsonUserConfigStorage {
  constructor() {
    this.userConfigPath = defaultUserConfigPath;
    this.dataStoragePath = defaultDataStoragePath;
    //read config?
  }

  getDatStoragePath() {
    return this.dataStoragePath;
  }

  //read data from config file
  //if file does not exist, create file
  readConfig() {
    fileExists(appConfigPath)
    .then(() => {
      fs.readFile('./config.json', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //returns a promise
  fileExists(path) {
    return new Promise((resolve, reject) => {
      fs.access(path, 
        fs.constants.F_OK | 
        fs.constants.R_OK | 
        fs.constants.W_OK, (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  }

}

module.exports = { JsonUserConfigStorage };