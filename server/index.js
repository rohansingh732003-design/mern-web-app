import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 7000;
const mongoURL = process.env.MONGO_URL;

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("DB Connected successfully");
        app.listen(port, () => {
            console.log(`Server is running on port : ${port}`);
        });
    })
    .catch((error) => console.log(error));

app.use("/api", route);
