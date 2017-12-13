/*
 * TODO complete this
 * leaving this out for now since it is not imperative to making this work
 * Should generate a default config file when the app is first launched
 */
/*
 * Contents of the appConfig file should not be changed by the user
 * Can possibly obfuscate the contents
 */
'use strict';
exports.__esModule = true;
var fs_1 = require("fs");
// TODO
// apparently user configs should be stored in app data folder instead
// will implement in the future
var defaultUserConfigPath = 'userConfig.json';
var defaultDataStoragePath = "data.json";
var JsonUserConfigStorage = /** @class */ (function () {
    function JsonUserConfigStorage() {
        this.userConfigPath = defaultUserConfigPath;
        this.dataStoragePath = defaultDataStoragePath;
        //read config?
    }
    JsonUserConfigStorage.prototype.getDatStoragePath = function () {
        return this.dataStoragePath;
    };
    JsonUserConfigStorage.prototype.getUserConfigPath = function () {
        return this.dataStoragePath;
    };
    //TODO return promise
    //read data from config file
    //if file does not exist, create file
    JsonUserConfigStorage.prototype.readConfig = function () {
        this.fileExists(this.userConfigPath)
            .then(function () {
            fs_1.readFile('./config.json', function (err, data) {
                if (err)
                    throw err;
                //TODO proper return (convert to json first)
                console.log(data);
            });
        })["catch"](function (err) {
            console.log(err);
        });
    };
    //returns a promise
    JsonUserConfigStorage.prototype.fileExists = function (path) {
        return new Promise(function (resolve, reject) {
            fs_1.access(path, fs_1.constants.F_OK |
                fs_1.constants.R_OK |
                fs_1.constants.W_OK, function (err) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve();
                }
            });
        });
    };
    return JsonUserConfigStorage;
}());
exports.JsonUserConfigStorage = JsonUserConfigStorage;
