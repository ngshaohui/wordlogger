import { readFile, writeFile } from 'fs';

export class JsonDataStorage {
  constructor() {
  }

  /* 
  * fileName: string
  * name of the file to be written
  * content: string
  * content to be written to the file
  */
  writeToJsonFile(filePath: string, content: string): Promise<any> {
    return new Promise((resolve, reject) => {
      writeFile(filePath, content, (err: any) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  }

  loadFromJsonFile(filePath: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      readFile(filePath, (err: any, data: Buffer) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  }

}
