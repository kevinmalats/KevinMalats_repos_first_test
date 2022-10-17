import { v4 as uuidv4 } from 'uuid';
import {IMetrics} from "../repository/IMetrics";
import {Metric} from "../interface/Metric";
import {StatesRepositoryEnum} from "../infrastructure/StatesRepositoryEnum";
import PostgresGateway from "../gateway/PostgresGateway";
import {Filter} from "../interface/Filter";
const lodash = require('lodash');

class MetricService implements IMetrics{
    private _postgresGateway: PostgresGateway = new PostgresGateway();
    createMetric(): boolean {
        return false;
    }

    deleteMetric(): boolean {
        return false;
    }

   async readMetrics(params: object, queryParams: object): Promise<Metric[]> {
        const { id_tribe } = params;
        const metrics: Metric[]= [];
        const date_now: number = new Date().getFullYear()
       if(!await this._existTribe(id_tribe)){
            throw new Error('La Tribu no se encuentra registrada');
       }
       if(!await this._verifyCoverage(id_tribe)){
           throw new Error('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');
       }

       const filter: Filter = this._filterParams(queryParams);
       console.log(filter);
        const query: string = "Select r.state,  o.name organization, r.id_repository, t.name tribe," +
            "m.coverage, m.bugs, m.vulnerabilities, m.hotspot" +
            ", m.code_smells " +
            "From metrics m Left Join repository r On " +
            "m.id_repository = r.id_repository Left Join tribe t On r.id_tribe = t.id_tribe Left Join organization o " +
            "On t.id_organization = o.id_organization " +
            "Where t.id_tribe = $1 And " +
            filter.query +
            "r.state = $3 And " +
            "m.coverage > $4";
        const values: object[] = [id_tribe, filter.value, StatesRepositoryEnum.Enable,0.75];
       ((await this._postgresGateway.getItems(query, values)).map((row)=>
        metrics.push({
            bugs:lodash.get(row,"bugs"),
            code_smells: lodash.get(row,"code_smells"),
            coverage:lodash.get(row,"coverage"),
            hotspot: lodash.get(row,"hotspot"),
            vulnerabilities:lodash.get(row,"vulnerabilities"),
            id :lodash.get(row,"id_repository"),
            organization: lodash.get(row,"organization"),
            state: lodash.get(row,"state"),
            tribe: lodash.get(row,"tribe"),
            verificationState:"Verificado"
        })
       ));
        return metrics;
    }
    private _filterParams(params:object):Filter{
        if(params.date)
         return {query:"date_part('year', r.create_time) = $2 And ", value: params.date};
        if(params.state)
            return {query:"r.state = $2 And ", value: params.state};
        if(params.coverage)
            return {query:"m.coverage >= $2 And ", value: params.coverage};
        return {query:"date_part('year', r.create_time) = $2 And ", value: new Date().getFullYear()};
    }
    private async _existTribe(id_tribe:number):Promise<boolean>{
        const query: string = "Select * From tribe t Where t.id_tribe = $1 ";
        const values: number[] = [id_tribe];
        const result: object[] = await this._postgresGateway.getItems(query, values);
        return result.length > 0;

    }

    private async _verifyCoverage(id_tribe:number):Promise<boolean>{
        const query: string = "Select m.coverage, m.bugs, m.vulnerabilities, m.hotspot" +
            ", m.code_smells " +
            "From metrics m Left Join repository r On " +
            "m.id_repository = r.id_repository Left Join tribe t On r.id_tribe = t.id_tribe " +
            "Where t.id_tribe = $1 And " +
            "m.coverage > $2" ;
        const values: number[] = [id_tribe,0.75];
        const result: object[] = await this._postgresGateway.getItems(query, values);
        return result.length > 0;

    }

    updateMetric(): boolean {
        return false;
    }


}

export default MetricService;