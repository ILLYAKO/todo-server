import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import bodyParser from "body-parser";

const PORT: string | number = process.env.PORT || 4000;

const app: Express = express();

app.use(cors());

app.use(bodyParser.json());

app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.8igykmh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error;
    });
