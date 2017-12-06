/* 
 * TODO return promises for each of the functions
 * for reading loading writing file related operations
 * 
 * storage itself should serve as the interface
 * and storageManager to implement but javscript es6 still has no interfaces
 * 
 * Should implement the functions
 * createFile
 * deleteFile
 */

'use strict';

const fs = require('fs');

class JsonDataStorage {
  constructor() {
  }

  /* fileName: string
  * name of the file to be written
  * content: object
  * content to be written to the file
  */
  writeToJsonFile(filePath, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  }

  loadFromJsonFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  }

}

module.exports = { JsonDataStorage };
