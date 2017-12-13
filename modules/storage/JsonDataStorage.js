"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var JsonDataStorage = /** @class */ (function () {
    function JsonDataStorage() {
    }
    /*
    * fileName: string
    * name of the file to be written
    * content: string
    * content to be written to the file
    */
    JsonDataStorage.prototype.writeToJsonFile = function (filePath, content) {
        return new Promise(function (resolve, reject) {
            fs_1.writeFile(filePath, content, function (err) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve();
                }
            });
        });
    };
    JsonDataStorage.prototype.loadFromJsonFile = function (filePath) {
        return new Promise(function (resolve, reject) {
            fs_1.readFile(filePath, function (err, data) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(data);
                }
            });
        });
    };
    return JsonDataStorage;
}());
exports.JsonDataStorage = JsonDataStorage;
