import { v4 as uuidv4 } from 'uuid';
import {IOrganization} from "../repository/IOrganization";
import {Organization} from "../interface/Organization";
import PostgresGateway from "../gateway/PostgresGateway";
import {OrganizationRequest} from "../interface/OrganizationRequest";
const lodash = require('lodash');

class OrganizationService implements IOrganization{
    private _postgresGateway: PostgresGateway = new PostgresGateway();
    async createOrganization(organization:OrganizationRequest): Promise<boolean> {
        const query: string = "Insert into organization(id_organization,name, status) VALUES ($1,$2,$3)";
        const values: object[] = [Math.floor(Math.random() * 10000) + 1,organization.name, organization.status];
        await this._postgresGateway.createOrUpdateItem(query,values);
        return false;
    }

    async deleteOrganization(params: object): Promise<boolean> {
        console.log(params)
        const {id_organization} = params;
        const query: string = "Delete From organization Where id_organization = $1";
        const values: number[] = [id_organization];
        await this._postgresGateway.deleteItem(query,values);
        return false;
    }

    async readOrganizations(): Promise<Organization[]> {
        const organizations: Organization[] = [];
        const query: string = "Select * from organization";
          (await this._postgresGateway.getItems(query, undefined)).map((row)=> organizations.push({
              id_organization:lodash.get(row, "id_organization"),
              name:lodash.get(row,"name",""),
              status: lodash.get(row,"status")
          }));
        return organizations;
    }

   async updateOrganization(organization:Organization): Promise<boolean> {
       const query: string = "Update organization set name = $1, status = $2 Where id_organization = $3";
       const values: object[] = [organization.name,organization.status, organization.id_organization];
       await this._postgresGateway.createOrUpdateItem(query,values);
        return false;
    }


}

export default OrganizationService;