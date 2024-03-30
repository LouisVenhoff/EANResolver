"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EanHelper = /** @class */ (function () {
    function EanHelper() {
    }
    EanHelper.validateEAN = function (ean) {
        var checksum = parseInt(ean[ean.length - 1]);
        var rawEan = ean.substring(0, ean.length - 1);
        var calculatedChecksum = this.calculateChecksum(rawEan);
        return calculatedChecksum === checksum;
    };
    EanHelper.calculateChecksum = function (rawEan) {
        var elementArr = rawEan.split("");
        var reversed = elementArr.reverse();
        var weightedCrossSum = 0;
        for (var i = 0; i < reversed.length; i++) {
            var factor = EanHelper.isEqual(i) ? 3 : 1;
            weightedCrossSum += parseInt(reversed[i]) * factor;
        }
        return EanHelper.getChecksumFromCrosssum(weightedCrossSum);
    };
    EanHelper.isEqual = function (inputNumber) {
        if (inputNumber % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EanHelper.getChecksumFromCrosssum = function (inputNumber) {
        var rounded = Math.ceil((inputNumber / 10)) * 10;
        return rounded - inputNumber;
    };
    return EanHelper;
}());
exports.default = EanHelper;
