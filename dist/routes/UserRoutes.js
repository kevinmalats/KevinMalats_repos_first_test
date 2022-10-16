"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QrService_1 = __importDefault(require("../service/QrService"));
const UserService_1 = __importDefault(require("../service/UserService"));
const route = (0, express_1.default)();
const _qrService = new QrService_1.default();
const _userService = new UserService_1.default(_qrService);
route.get("/user", (_req, res) => {
    res.send("Eureka");
});
route.post("/user/create", (req, res) => {
    console.log("goal ", req.body);
    res.send(_userService.createUser(req.body));
});
exports.default = route;
