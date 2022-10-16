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
const PostgresGateway_1 = __importDefault(require("../gateway/PostgresGateway"));
var lodash = require('lodash');
class OrganizationService {
    constructor() {
        this._postgresGateway = new PostgresGateway_1.default();
    }
    createOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "Insert into organization(id_organization,name, status) VALUES ($1,$2,$3)";
            const values = [Math.floor(Math.random() * 10000) + 1, organization.name, organization.status];
            yield this._postgresGateway.createOrUpdateItem(query, values);
            return false;
        });
    }
    deleteOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    readOrganizations() {
        return __awaiter(this, void 0, void 0, function* () {
            lodash.get();
            const organizations = [];
            const query = "Select * from organization";
            (yield this._postgresGateway.getItems(query)).map((row) => organizations.push({
                id_organization: lodash.get(row, "id_organization"),
                name: lodash.get(row, "name", ""),
                status: lodash.get(row, "status")
            }));
            return organizations;
        });
    }
    updateOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "Update organization set name = $1, status = $2 Where id_organization = $3";
            const values = [organization.name, organization.status, organization.id_organization];
            yield this._postgresGateway.createOrUpdateItem(query, values);
            return false;
        });
    }
}
exports.default = OrganizationService;
