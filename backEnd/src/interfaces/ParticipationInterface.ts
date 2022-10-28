import Participation from "../models/Participation"

export interface IParticipationDBModel {
 id: string,
 firstName: string,
 lastName: string,
 participation: number
}

export interface IRegisterParticipationInputDTO {
    firstName: string,
    lastName: string,
    participation: number
} 

export interface IRegisterParticipationOutputDTO {
    message: string
}

export interface IGetAllParticipationInputDTO {
    search: string
    order: string,
    sort: string
}

export interface IGetAllParticipationOutputDTO {
    participation: Participation[]
}