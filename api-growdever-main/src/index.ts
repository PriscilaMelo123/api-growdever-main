import express from "express";
import cors from 'cors';
import { growdeverRoutes } from "./routes/growdever.routes";
// npm i dotenv ---> para reconhecer a porta no arquivo .env
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/growdever", growdeverRoutes);

app.listen(process.env.PORT, () => {
    console.log("API rodando na porta " + process.env.PORT);
});
