"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RepositoryService_1 = __importDefault(require("../service/RepositoryService"));
const route = (0, express_1.default)();
const _repositoryService = new RepositoryService_1.default();
route.get("/repositories", (_req, res) => {
    res.send({ repositories: _repositoryService.readRepositories() });
});
exports.default = route;
