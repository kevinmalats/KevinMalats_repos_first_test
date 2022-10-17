"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostgresSql_1 = __importDefault(require("../connection/PostgresSql"));
class PostgresGateway {
    constructor() {
        this._postgres = new PostgresSql_1.default();
    }
    createOrUpdateItem(query, values) {
        return new Promise((resolve, reject) => {
            this._postgres.connect();
            console.log(query);
            console.log(values);
            this._postgres.client.query(query, values)
                .then(res => {
                console.log(res.rows);
                resolve(true);
            })
                .catch(e => reject(e));
        });
    }
    getItems(query, values) {
        return new Promise((resolve, reject) => {
            this._postgres.connect();
            console.log(values);
            if (values !== undefined) {
                this._postgres.client.query(query, values)
                    .then(res => {
                    console.log(res.rows);
                    resolve(res.rows);
                })
                    .catch(e => reject(e));
            }
            else
                this._postgres.client.query(query)
                    .then(res => {
                    console.log(res.rows);
                    resolve(res.rows);
                })
                    .catch(e => reject(e));
        });
    }
    deleteItem(query, values) {
        return new Promise((resolve, reject) => {
            this._postgres.connect();
            console.log(query);
            console.log(values);
            this._postgres.client.query(query, values)
                .then(res => {
                console.log(res.rows);
                resolve(true);
            })
                .catch(e => reject(e));
        });
    }
}
exports.default = PostgresGateway;
