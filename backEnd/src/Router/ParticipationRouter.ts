import { Router } from "express";
import { ParticipationBusiness } from "../Business/ParticipationBusiness";
import { ParticipationController } from "../Controller/ParticipationController";
import { ParticipationDataBase } from "../DataBase/ParticipationDataBase";
import GenerateId from "../services/GenerateId";



export const participationRouter = Router()


const participationController = new ParticipationController(
    new ParticipationBusiness(
        new ParticipationDataBase,
        new GenerateId
    )
)

participationRouter.post("/", participationController.registerParticipation)
participationRouter.get("/", participationController.getAllParticipation)