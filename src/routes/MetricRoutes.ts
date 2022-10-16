import router, { Router } from "express";
import  {  Request, Response } from 'express';
import MetricService from "../service/MetricService";

const route: Router = router();
const _userService: MetricService = new MetricService();

route.get("/metrics", (_req: Request, res: Response)=>{
    res.send("Eureka")
})

route.post("/metrics/create", (req: Request, res: Response)=>{

    console.log("goal ",req.body)

    
})

export default route;