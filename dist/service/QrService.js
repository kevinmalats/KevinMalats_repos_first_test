"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("qrcode"));
class QrService {
    readQr() {
    }
    createQr(user) {
        console.log("QRcreates");
        console.log(user);
        let url = "https://parzibyte.me/blog" + user.id;
        // this._getBase64(stringdata);
        return this._getCodeQr(url);
    }
    _getBase64(stringdata) {
        qrcode_1.default.toDataURL(stringdata, function (err, url) {
            if (err)
                return console.log("error occured");
            console.log(url);
        });
    }
    _getCodeQr(stringdata) {
        console.log("stringdata");
        console.log(stringdata);
        let qrcode = "";
        qrcode_1.default.toString(stringdata, { type: 'terminal' }, (err, code) => {
            if (err)
                throw "error";
            // Printing the generated code
            console.log(code);
            qrcode = code;
        });
        return qrcode;
    }
}
exports.default = QrService;
