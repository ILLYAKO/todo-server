import request from "supertest";
import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "../routes";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.8igykmh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

beforeAll(async () => 
    await mongoose.connect(uri)
);

afterAll(async () => {
    await mongoose.disconnect();
});

describe("GET /todos", () => {
    it("should respond with an array of todos", async () => {
        const response = await request(app).get("/todos");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});


