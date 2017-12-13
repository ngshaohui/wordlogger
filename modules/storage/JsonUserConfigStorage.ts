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

import { access, constants, readFile } from 'fs';

// TODO
// apparently user configs should be stored in app data folder instead
// will implement in the future
const defaultUserConfigPath = 'userConfig.json';
const defaultDataStoragePath = "data.json"

export class JsonUserConfigStorage {
  userConfigPath: string
  dataStoragePath: string

  constructor() {
    this.userConfigPath = defaultUserConfigPath;
    this.dataStoragePath = defaultDataStoragePath;
    //read config?
  }
  
  getDatStoragePath() {
    return this.dataStoragePath;
  }
  
  getUserConfigPath() {
    return this.dataStoragePath;
  }

  //TODO return promise
  //read data from config file
  //if file does not exist, create file
  readConfig() {
    this.fileExists(this.userConfigPath)
    .then(() => {
      readFile('./config.json', (err: any, data: Buffer) => {
        if (err) throw err;
        //TODO proper return (convert to json first)
        console.log(data);
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //returns a promise
  fileExists(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      access(path, 
        constants.F_OK | 
        constants.R_OK | 
        constants.W_OK, (err: any) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  }

}
