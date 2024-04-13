"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EanError = void 0;
var EanError;
(function (EanError) {
    EanError[EanError["OK"] = 0] = "OK";
    EanError[EanError["EAN_NOT_FOUND"] = 1] = "EAN_NOT_FOUND";
    EanError[EanError["INVALID_CHECKSUM"] = 2] = "INVALID_CHECKSUM";
    EanError[EanError["INVALID_EAN"] = 3] = "INVALID_EAN";
    EanError[EanError["EAN_RESERVED"] = 4] = "EAN_RESERVED";
    EanError[EanError["FETCHING_ERROR"] = 5] = "FETCHING_ERROR";
})(EanError || (exports.EanError = EanError = {}));
