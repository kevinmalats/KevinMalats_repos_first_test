import router, { Router } from "express";
import  {  Request, Response } from 'express';
import RepositoryService from "../service/RepositoryService";

const route: Router = router();
const _repositoryService: RepositoryService = new RepositoryService();

route.get("/repositories", (_req: Request, res: Response)=>{
    res.send({repositories:_repositoryService.readRepositories()});
})


export default route;