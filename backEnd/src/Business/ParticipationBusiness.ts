import { ParticipationDataBase } from "../DataBase/ParticipationDataBase";
import { MissingFields } from "../error/MissingFields";
import { NotFoundError } from "../error/NotFoundError";
import { ParamsError } from "../error/ParamsError";
import { IGetAllParticipationInputDTO, IGetAllParticipationOutputDTO, IRegisterParticipationInputDTO, IRegisterParticipationOutputDTO } from "../interfaces/ParticipationInterface";
import Participation from "../models/Participation";
import GenerateId from "../services/GenerateId";


export class ParticipationBusiness {
    constructor(
        private participationData = new ParticipationDataBase,
        private generateId = new GenerateId
    ){}

    public registerParticipation = async (input: IRegisterParticipationInputDTO): Promise<IRegisterParticipationOutputDTO> => {
        const {firstName, lastName, participation} = input

        if(!firstName || !lastName || !participation) {
            throw new MissingFields()
        }

        if(typeof firstName !== "string") {
            throw new ParamsError("Parâmetro 'firstName' inválido, não é uma string ou não foi enviado certo")
        }

        if(typeof lastName !== "string") {
            throw new ParamsError("Parâmetro 'lastName' inválido, não é uma string ou não foi enviado certo")
        }

        if(typeof participation !== "number") {
            throw new ParamsError("Parâmetro 'participation' inválido, não é um number ou não foi enviado certo")
        }

        const id = this.generateId.generate()

        const newParticipation = new Participation(
            id,
            firstName,
            lastName,
            participation
        )

        await this.participationData.insertParticipation(newParticipation)

        const response: IRegisterParticipationOutputDTO = {
            message: "Usuário Cadastrado"
        }

        return response
    }

    public getAllParticipation = async (input: IGetAllParticipationInputDTO) => {
        const search = input.search || ""
        const order = input.order || "participation"
        const sort = input.sort || "DESC"

        if(typeof search !== "string") {
            throw new ParamsError("Sua busca não está em formato de string")
        }

        if(typeof order !== "string") {
            throw new ParamsError("Sua ordenação está em formato errado")

        }

        if(typeof sort !== 'string') {
            throw new ParamsError("Parâmetro 'sort' errado")
        }

        const newInput: IGetAllParticipationInputDTO = {
            search,
            order,
            sort
        }

        const participationDB = await this.participationData.getParticipation(newInput)

        if(!participationDB) {
            throw new NotFoundError()
        }

        const participation = participationDB.map((participation) => {
            return new Participation(
                participation.id,
                participation.firstName,
                participation.lastName,
                participation.participation
            )
        })

        const response: IGetAllParticipationOutputDTO = {
            participation
        }

        return response

    }
}