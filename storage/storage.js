'use strict';

// import * as jsonDataStorage from './jsonDataStorage';
// import { JsonUserConfigStorage } from './jsonUserConfigStorage';

class Storage {

  constructor() {
    this.userConfig = new JsonUserConfigStorage();
    this.dataStoragePath = userConfig.getDatStoragePath();
    writeToFile();
  }
  // read user pref
  // save user pref
  // getSaveFilePath (should just hard code this for now)
  // readSaveFile
  // writeSaveFile
  writeToFile() {
    jsonDataStorage.writeToJsonFile(this.dataStoragePath, "success");
  }

  // handle model changed event
  // (to be registered to the event handler)
}

module.exports = { Storage };