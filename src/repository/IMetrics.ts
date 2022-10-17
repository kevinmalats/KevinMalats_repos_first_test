import {Metric} from "../interface/Metric";

export interface IMetrics {
    readMetrics(params: object, query: object): Promise<Metric[]>
    createMetric():boolean
    deleteMetric():boolean
    updateMetric():boolean
}