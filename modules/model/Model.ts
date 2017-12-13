import { Storage } from '../storage/Storage'

import { Card } from '../interface/Card'

//TODO this should be a class of its own

export class Model {
  vocabList: Card[]
  constructor(
    private storage: Storage
  ) {
    this.vocabList = []
    this.storage = storage;
    //call storage to load
    this.storage.loadFromFile('data.json')
    .then((res: Buffer) => {
      //convert the buffer to a string then to an object
      this.vocabList = JSON.parse(res.toString());
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }

  add(card: Card): void {
    this.vocabList.push(card);
    this.storage.writeToFile(JSON.stringify(this.vocabList))
    .then(() => {
      //TODO emit success event
    })
    .catch((err) => {
      throw err;
      //TODO emit failure event
    });
  }
}
