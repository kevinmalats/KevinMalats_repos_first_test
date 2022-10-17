import router, { Router } from "express";
import  {  Request, Response } from 'express';
import RepositoryService from "../service/RepositoryService";
import OrganizationService from "../service/OrganizationService";

const route: Router = router();
const _organizationService: OrganizationService = new OrganizationService();

route.get("/organizations", async (_req: Request, res: Response) => {
    res.send(await _organizationService.readOrganizations());
})
route.post("/organizations", async (_req: Request, res: Response) => {
    console.log(_req.body)
    res.send(await _organizationService.createOrganization(_req.body));
})

route.put("/organizations", async (_req: Request, res: Response) => {
    console.log(_req.body)
    res.send(await _organizationService.updateOrganization(_req.body));
})

route.delete("/organizations/:id_organization", async (_req: Request, res: Response) => {
    console.log(_req.params)
    res.send(await _organizationService.deleteOrganization(_req.params));
})


export default route;