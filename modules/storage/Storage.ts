import { readdir } from 'fs'
import { JsonDataStorage } from './JsonDataStorage'
import { JsonUserConfigStorage } from './JsonUserConfigStorage'

export class Storage {
  jsonDataStorage = new JsonDataStorage()
  jsonUserConfigStorage = new JsonUserConfigStorage()
  userConfigPath: string
  dataStoragePath: string
  constructor() {
    this.userConfigPath = this.jsonUserConfigStorage.getUserConfigPath()
    this.dataStoragePath = this.jsonUserConfigStorage.getDatStoragePath()
  }

  writeToFile(data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.jsonDataStorage.writeToJsonFile(this.dataStoragePath, data)
        .then(() => {
          return resolve()
        })
        .catch((err: any) => {
          return reject(err)
        });
    });
  }

  loadFromFile(path: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      this.jsonDataStorage.loadFromJsonFile(path)
        .then((res: Buffer) => {
          return resolve(res)
        })
        .catch((err: any) => {
          return reject(err)
        });
    });
  }

  getFolderContents(filePath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      readdir(filePath, (err: any, data: string[]) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      });
    })
  }

}
