import app from "./app";
import { participationRouter } from "./Router/ParticipationRouter";


app.use("/participation", participationRouter)