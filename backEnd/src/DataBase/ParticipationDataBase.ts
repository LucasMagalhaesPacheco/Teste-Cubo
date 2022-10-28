import { IGetAllParticipationInputDTO, IParticipationDBModel } from "../interfaces/ParticipationInterface";
import Participation from "../models/Participation";
import BaseDataBase from "./BaseDataBase";

export class ParticipationDataBase extends BaseDataBase {
    public static CUBO_TABLE = "Cubo_Table"

    public ParticipationDBModel = (participation: Participation): IParticipationDBModel => {
       const participationDB: IParticipationDBModel = {
        id: participation.getId(),
        firstName: participation.getFirstName(),
        lastName: participation.getlastName(),
        participation: participation.getParticipation()
       }
     return participationDB
    } 

    public insertParticipation = async (participation: Participation): Promise<void> => {
        const participationDB = this.ParticipationDBModel(participation)

        await this.getConnetion()
        .insert(participationDB)
        .into(ParticipationDataBase.CUBO_TABLE)
    }

    public getParticipation = async (input: IGetAllParticipationInputDTO): Promise<IParticipationDBModel[] | undefined> => {
        const search = input.search
        const order = input.order
        const sort = input.sort

        const participation: IParticipationDBModel[] = await this.getConnetion()
        .where("participation", "LIKE", `%${search}%`)
        .orderBy(order, sort)
        .select("*")
        .from(ParticipationDataBase.CUBO_TABLE)

        return participation
    }
}