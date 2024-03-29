"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const RepositoryRoutes_1 = __importDefault(require("./src/routes/RepositoryRoutes"));
const OrganizationRoutes_1 = __importDefault(require("./src/routes/OrganizationRoutes"));
const MetricRoutes_1 = __importDefault(require("./src/routes/MetricRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use(RepositoryRoutes_1.default);
app.use(OrganizationRoutes_1.default);
app.use(MetricRoutes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
