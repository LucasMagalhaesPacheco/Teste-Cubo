import { Request, Response } from "express";
import { ParticipationBusiness } from "../Business/ParticipationBusiness";
import { BaseError } from "../error/BaseError";
import { IGetAllParticipationInputDTO, IRegisterParticipationInputDTO } from "../interfaces/ParticipationInterface";


export class ParticipationController {
    constructor(
        private participationBusiness = new ParticipationBusiness
    ){}

    public registerParticipation = async (req: Request, res: Response) => {
    try {

        const {firstName, lastName, participation } = req.body

        const input: IRegisterParticipationInputDTO = {
            firstName,
            lastName,
            participation
        }

        const response = await this.participationBusiness.registerParticipation(input)

        res.status(201).send(response)
        
    } catch (error) {
        if(error instanceof BaseError) {
            return res.status(error.statusCode).send({message: error.message})
        }

        res.status(500).send("Erro inesperado")
    }
    }

    public getAllParticipation = async (req: Request, res: Response) => {
      try {
        const search = req.query.search as string
        const order = req.query.order as string
        const sort = req.query.sort as string

        const input: IGetAllParticipationInputDTO = {
            search,
            order,
            sort
        }

        const response = await this.participationBusiness.getAllParticipation(input)

        res.status(200).send(response)
      } catch (error) {
        if(error instanceof BaseError) {
            return res.status(error.statusCode).send({message: error.message})
        }

        res.status(500).send("Erro inesperado")
      }  
    }
}