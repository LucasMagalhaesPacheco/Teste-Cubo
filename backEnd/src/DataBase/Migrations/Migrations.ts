import BaseDataBase from "../BaseDataBase";
import { ParticipationDataBase } from "../ParticipationDataBase";
import { members } from "./data";

class Migrations extends BaseDataBase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created sucessfully")

            console.log("Populate Tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            this.getConnetion()
                .destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await this.getConnetion()
        .raw(`
        DROP TABLE IF EXISTS ${ParticipationDataBase.CUBO_TABLE};
        
        CREATE TABLE IF NOT EXISTS ${ParticipationDataBase.CUBO_TABLE} (
            id varchar(255) PRIMARY KEY,
            firstName varchar(255) not null,
            lastName varchar(255) not null,
            participation float not null
            ); 
            
    `)
    }

    insertData = async (): Promise<any> => { 
        await this.getConnetion()
        .into(ParticipationDataBase.CUBO_TABLE)
        .insert(members)
        
    }
}

const migrations = new Migrations() 
migrations.execute()