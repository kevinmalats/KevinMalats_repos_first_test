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
const OrganizationService_1 = __importDefault(require("../service/OrganizationService"));
const route = (0, express_1.default)();
const _organizationService = new OrganizationService_1.default();
route.get("/organizations", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield _organizationService.readOrganizations());
}));
route.post("/organizations", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.body);
    res.send(yield _organizationService.createOrganization(_req.body));
}));
route.put("/organizations", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.body);
    res.send(yield _organizationService.updateOrganization(_req.body));
}));
route.delete("/organizations/:id_organization", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.params);
    res.send(yield _organizationService.deleteOrganization(_req.params));
}));
exports.default = route;
