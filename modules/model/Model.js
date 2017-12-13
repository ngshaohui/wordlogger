"use strict";
exports.__esModule = true;
//TODO this should be a class of its own
var Model = /** @class */ (function () {
    function Model(storage) {
        var _this = this;
        this.storage = storage;
        this.vocabList = [];
        this.storage = storage;
        //call storage to load
        this.storage.loadFromFile('data.json')
            .then(function (res) {
            //convert the buffer to a string then to an object
            _this.vocabList = JSON.parse(res.toString());
        })["catch"](function (err) {
            throw err;
            //TODO emit failure event
        });
    }
    Model.prototype.add = function (card) {
        this.vocabList.push(card);
        this.storage.writeToFile(JSON.stringify(this.vocabList))
            .then(function () {
            //TODO emit success event
        })["catch"](function (err) {
            throw err;
            //TODO emit failure event
        });
    };
    return Model;
}());
exports.Model = Model;
