'use-strict';

//TODO this should be a class of its own

class Model {
  constructor(storage) {
    this.vocabList = [];
    this.storage = storage;
    //call storage to load
    this.storage.loadFromFile()
    .then((res) => {
      this.vocabList = JSON.parse(res);
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }

  add(obj) {
    this.vocabList.push(obj);
    this.storage.writeToFile(this.vocabList)
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
