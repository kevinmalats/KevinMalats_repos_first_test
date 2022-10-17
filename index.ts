import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import repositoryRoutes from "./src/routes/RepositoryRoutes"
import organizationRoutes from "./src/routes/OrganizationRoutes";
import metricRoutes from "./src/routes/MetricRoutes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(repositoryRoutes);
app.use(organizationRoutes);
app.use(metricRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
