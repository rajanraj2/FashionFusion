import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from  "cors";
import ErrorHandler from "./middlewares/error.js";
const app = express();

app.use(express.json()); // to support JSON-encoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//config
dotenv.config()

//import routes
import userRouter from './routes/userRoutes.js';


app.use('/api/v1/user',  userRouter);



app.use(ErrorHandler)
export default app;