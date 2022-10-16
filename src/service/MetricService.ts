import { v4 as uuidv4 } from 'uuid';
import {IMetrics} from "../repository/IMetrics";
import {Metric} from "../interface/Metric";

class MetricService implements IMetrics{
    createMetric(): boolean {
        return false;
    }

    deleteMetric(): boolean {
        return false;
    }

    readMetrics(): Metric[] {
        return []
    }

    updateMetric(): boolean {
        return false;
    }


}

export default MetricService;