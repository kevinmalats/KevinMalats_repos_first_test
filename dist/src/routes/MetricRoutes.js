"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MetricService_1 = __importDefault(require("../service/MetricService"));
const route = (0, express_1.default)();
const _userService = new MetricService_1.default();
route.get("/metrics", (_req, res) => {
    res.send("Eureka");
});
route.post("/metrics/create", (req, res) => {
    console.log("goal ", req.body);
});
exports.default = route;
