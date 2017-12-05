/* 
 * TODO should seperate out the fs functions into its own components
 * this allows a switch to a db in the near future
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

/* fileName: String
 * name of the file to be written
 * (optional) content: String
 * content to be written to the file
 * if no content is specified, empty file will be created
 */
function writeToJsonFile(filePath, content='') {
  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}

function deleteJsonFile(fileName) {
  fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log('File deleted!');
  });
}

module.exports = { testWrite };