import dotenv from 'dotenv';
dotenv.config();
const { Client } = require("pg");
class PostgresSql{
    public client = new Client(process.env.DATABASE_URL);
    public connect = async  () => {
        await this.client.connect();
        try {
            const results = await this.client.query("SELECT NOW()");
            console.log("success connection");
        } catch (err) {
            console.error("error executing query:", err);
        }
    }
    public endConnection = async () =>{
        await this.client.end()
    }
}

/* const client = new Client(process.env.DATABASE_URL);

(async () => {
    console.log("conectando")
    await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log("success connection");
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        //client.end();
    }
})();*/

export default PostgresSql