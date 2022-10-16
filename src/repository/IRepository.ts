import {Repository} from "../interface/Repository";

export interface IRepository {
    readRepositories(): Repository[]
}