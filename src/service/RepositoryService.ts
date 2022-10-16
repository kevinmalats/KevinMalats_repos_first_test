import { v4 as uuidv4 } from 'uuid';
import {IRepository} from "../repository/IRepository";
import {Repository} from "../interface/Repository";
import {StateRepositoryEnum} from "../infrastructure/StateRepositoryEnum";
const repos: Repository[] = [
    {
        id:1,
        state:StateRepositoryEnum.Verificado
    },
    {
        id:2,
        state:StateRepositoryEnum.En_Espera
    },
    {
        id:3,
        state:StateRepositoryEnum.Aprobado
    }
];
class RepositoryService implements IRepository{
    readRepositories(): Repository[] {
        return repos;
    }

}

export default RepositoryService;