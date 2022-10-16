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
const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    try {
        const results = yield client.query("SELECT NOW()");
        console.log(results);
    }
    catch (err) {
        console.error("error executing query:", err);
    }
    finally {
        client.end();
    }
}))();
