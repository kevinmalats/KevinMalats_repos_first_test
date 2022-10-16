import {Metric} from "../interface/Metric";

export interface IMetrics {
    readMetrics(): Metric[]
    createMetric():boolean
    deleteMetric():boolean
    updateMetric():boolean
}