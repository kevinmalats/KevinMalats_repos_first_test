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
const StatesRepositoryEnum_1 = require("../infrastructure/StatesRepositoryEnum");
const PostgresGateway_1 = __importDefault(require("../gateway/PostgresGateway"));
const lodash = require('lodash');
class MetricService {
    constructor() {
        this._postgresGateway = new PostgresGateway_1.default();
    }
    createMetric() {
        return false;
    }
    deleteMetric() {
        return false;
    }
    readMetrics(params, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_tribe } = params;
            const metrics = [];
            const date_now = new Date().getFullYear();
            if (!(yield this._existTribe(id_tribe))) {
                throw new Error('La Tribu no se encuentra registrada');
            }
            if (!(yield this._verifyCoverage(id_tribe))) {
                throw new Error('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');
            }
            const filter = this._filterParams(queryParams);
            console.log(filter);
            const query = "Select r.state,  o.name organization, r.id_repository, t.name tribe," +
                "m.coverage, m.bugs, m.vulnerabilities, m.hotspot" +
                ", m.code_smells " +
                "From metrics m Left Join repository r On " +
                "m.id_repository = r.id_repository Left Join tribe t On r.id_tribe = t.id_tribe Left Join organization o " +
                "On t.id_organization = o.id_organization " +
                "Where t.id_tribe = $1 And " +
                filter.query +
                "r.state = $3 And " +
                "m.coverage > $4";
            const values = [id_tribe, filter.value, StatesRepositoryEnum_1.StatesRepositoryEnum.Enable, 0.75];
            ((yield this._postgresGateway.getItems(query, values)).map((row) => metrics.push({
                bugs: lodash.get(row, "bugs"),
                code_smells: lodash.get(row, "code_smells"),
                coverage: lodash.get(row, "coverage"),
                hotspot: lodash.get(row, "hotspot"),
                vulnerabilities: lodash.get(row, "vulnerabilities"),
                id: lodash.get(row, "id_repository"),
                organization: lodash.get(row, "organization"),
                state: lodash.get(row, "state"),
                tribe: lodash.get(row, "tribe"),
                verificationState: "Verificado"
            })));
            return metrics;
        });
    }
    _filterParams(params) {
        if (params.date)
            return { query: "date_part('year', r.create_time) = $2 And ", value: params.date };
        if (params.state)
            return { query: "r.state = $2 And ", value: params.state };
        if (params.coverage)
            return { query: "m.coverage >= $2 And ", value: params.coverage };
        return { query: "date_part('year', r.create_time) = $2 And ", value: new Date().getFullYear() };
    }
    _existTribe(id_tribe) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "Select * From tribe t Where t.id_tribe = $1 ";
            const values = [id_tribe];
            const result = yield this._postgresGateway.getItems(query, values);
            return result.length > 0;
        });
    }
    _verifyCoverage(id_tribe) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "Select m.coverage, m.bugs, m.vulnerabilities, m.hotspot" +
                ", m.code_smells " +
                "From metrics m Left Join repository r On " +
                "m.id_repository = r.id_repository Left Join tribe t On r.id_tribe = t.id_tribe " +
                "Where t.id_tribe = $1 And " +
                "m.coverage > $2";
            const values = [id_tribe, 0.75];
            const result = yield this._postgresGateway.getItems(query, values);
            return result.length > 0;
        });
    }
    updateMetric() {
        return false;
    }
}
exports.default = MetricService;
