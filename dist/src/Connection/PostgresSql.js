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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { Client } = require("pg");
class PostgresSql {
    constructor() {
        this.client = new Client(process.env.DATABASE_URL);
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            try {
                const results = yield this.client.query("SELECT NOW()");
                console.log("success connection");
            }
            catch (err) {
                console.error("error executing query:", err);
            }
        });
        this.endConnection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.client.end();
        });
    }
}
/* const client = new Client(process.env.DATABASE_URL);

(async () => {
    console.log("conectando")
    await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log("success connection");
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        //client.end();
    }
})();*/
exports.default = PostgresSql;
