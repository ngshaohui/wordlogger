'use-strict';

//TODO this should be a class of its own
var vocabList = [];

class Model {
  constructor(storage) {
    this.storage = storage;
    //call storage to load
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
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }
}

module.exports = { Model };
