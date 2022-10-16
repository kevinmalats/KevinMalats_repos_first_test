"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateRepositoryEnum_1 = require("../infrastructure/StateRepositoryEnum");
const repos = [
    {
        id: 1,
        state: StateRepositoryEnum_1.StateRepositoryEnum.Verificado
    },
    {
        id: 2,
        state: StateRepositoryEnum_1.StateRepositoryEnum.En_Espera
    },
    {
        id: 3,
        state: StateRepositoryEnum_1.StateRepositoryEnum.Aprobado
    }
];
class RepositoryService {
    readRepositories() {
        return repos;
    }
}
exports.default = RepositoryService;
