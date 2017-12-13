"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var JsonDataStorage_1 = require("./JsonDataStorage");
var JsonUserConfigStorage_1 = require("./JsonUserConfigStorage");
var Storage = /** @class */ (function () {
    function Storage() {
        this.jsonDataStorage = new JsonDataStorage_1.JsonDataStorage();
        this.jsonUserConfigStorage = new JsonUserConfigStorage_1.JsonUserConfigStorage();
        this.userConfigPath = this.jsonUserConfigStorage.getUserConfigPath();
        this.dataStoragePath = this.jsonUserConfigStorage.getDatStoragePath();
    }
    Storage.prototype.writeToFile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.jsonDataStorage.writeToJsonFile(_this.dataStoragePath, data)
                .then(function () {
                return resolve();
            })["catch"](function (err) {
                return reject(err);
            });
        });
    };
    Storage.prototype.loadFromFile = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.jsonDataStorage.loadFromJsonFile(path)
                .then(function (res) {
                return resolve(res);
            })["catch"](function (err) {
                return reject(err);
            });
        });
    };
    Storage.prototype.getFolderContents = function (filePath) {
        return new Promise(function (resolve, reject) {
            fs_1.readdir(filePath, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    return Storage;
}());
exports.Storage = Storage;
