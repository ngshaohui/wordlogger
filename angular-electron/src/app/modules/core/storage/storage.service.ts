import { Injectable } from '@angular/core';

// Quick Fix to workaround global conflict of require
const electron = (<any>window).require("electron");

@Injectable()
export class StorageService {

  constructor() { }

  test(): void {
    //able to send the object back directly
    electron.ipcRenderer.send('test-msg', {'test': 'blah'});
  }

}
