'use-strict';

import { Storage } from './storage/Storage';

const vocabList;

class Model {
  constructor(storage) {
    this.storage = storage;
    //call storage to load
    loadVocabListFromStorage();
  }

  loadVocabListFromStorage() {
    this.storage.loadFromFile()
    .then((res) => {
      vocabList = res;
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }

  add(obj) {
    this.vocabList.push(obj);
    this.storage.writeToFile(obj)
    .then(() => {
      //TODO emit success event
      console.log("successfully added to save file"); //temporary TODO remove this
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }
}