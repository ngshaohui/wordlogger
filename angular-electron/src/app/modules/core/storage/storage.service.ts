import { Injectable } from '@angular/core';

import { Vocab } from '../interface/vocab.interface';

// Quick Fix to workaround global conflict of require
const electron = (<any>window).require("electron");

@Injectable()
export class StorageService {

  constructor() { }

  storeVocab(vocab: Vocab): void {
    //able to send the object back directly
    electron.ipcRenderer.send('store-vocab', vocab);
  }

}
