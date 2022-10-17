"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MetricService_1 = __importDefault(require("../service/MetricService"));
const route = (0, express_1.default)();
const _metricService = new MetricService_1.default();
route.get("/metrics/tribe/:id_tribe", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.query);
    try {
        const result = yield _metricService.readMetrics(_req.params, _req.query);
        res.json({ repositories: result });
    }
    catch (error) {
        console.log(error); // I can see the error is being thrown.. I am purposefuly giving it an id that does not exist
        res.send(error.message);
    }
}));
route.post("/metrics/create", (req, res) => {
    res.send("building");
});
exports.default = route;
