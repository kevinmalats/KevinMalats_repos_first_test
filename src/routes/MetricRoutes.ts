import router, { Router } from "express";
import  {  Request, Response } from 'express';
import MetricService from "../service/MetricService";

const route: Router = router();
const _metricService: MetricService = new MetricService();

route.get("/metrics/tribe/:id_tribe", async (_req: Request, res: Response)=>{
    console.log(_req.query)
    try{
        const result = await _metricService.readMetrics(_req.params,_req.query)
        res.json({repositories:result})

    }catch (error) {
        console.log(error) // I can see the error is being thrown.. I am purposefuly giving it an id that does not exist
        res.send(error.message)
    }

})

route.post("/metrics/create", (req: Request, res: Response)=>{
    res.send("building")
})

export default route;