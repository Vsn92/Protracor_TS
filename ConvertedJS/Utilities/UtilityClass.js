"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var protractor_1 = require("protractor");
var UtilityClass = /** @class */ (function () {
    function UtilityClass() {
    }
    UtilityClass.takeScreenshot = function (name) {
        var path = './Screenshots';
        if (!fs_1.existsSync(path))
            fs_1.mkdirSync(path);
        protractor_1.browser.takeScreenshot().then(function (pic) {
            var strm = fs_1.createWriteStream(path + '/' + name + '.png');
            strm.write(new Buffer(pic, 'base64'));
            strm.end();
        });
    };
    return UtilityClass;
}());
exports.UtilityClass = UtilityClass;
//# sourceMappingURL=UtilityClass.js.map