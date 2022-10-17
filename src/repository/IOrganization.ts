import {Organization} from "../interface/Organization";

export interface IOrganization {
    readOrganizations(): Promise<Organization[]>
    createOrganization(organization:Organization):Promise<boolean>
    deleteOrganization(params: object):Promise<boolean>
    updateOrganization(organization:Organization):Promise<boolean>
}