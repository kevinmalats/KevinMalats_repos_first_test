import {IPostgresGateway} from "../repository/IPostgresGateway";
import PostgresSql from "../connection/PostgresSql";
class PostgresGateway implements IPostgresGateway{
    private _postgres: PostgresSql = new PostgresSql();
    createOrUpdateItem(query: string, values:object[]): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            this._postgres.connect();
            console.log(query);
            console.log(values)
            this._postgres.client.query(query,values)
                .then(res => {
                        console.log(res.rows)
                        resolve(true)
                    }
                )
                .catch(e => reject(e))
        })
    }

    getItems(query: string): Promise<object[]> {
        return new Promise((resolve, reject)=>{
            this._postgres.connect();
            console.log(query)
            this._postgres.client.query(query)
                .then(res => {
                        console.log(res.rows)
                        resolve(res.rows)
                    }
                )
                .catch(e => reject(e))
        })

    }

}

export default PostgresGateway;