"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class UserService {
    constructor(InjectQrService) {
        this._qrService = InjectQrService;
    }
    getUser() {
    }
    createUser(user) {
        console.log("createuser");
        console.log(user);
        user.id = (0, uuid_1.v4)();
        return Object.assign(Object.assign({}, user), { qrCode: this._qrService.createQr(user) });
    }
}
exports.default = UserService;
