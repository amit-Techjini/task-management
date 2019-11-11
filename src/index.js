import express from "express";
import dotenv from "dotenv";
import createRouter from "./router";
dotenv.config();

//set-up the app
const app = express();
app.use(express.json());

app.use(createRouter());

//port for the server to run
const port = process.env.PORT || 8000;

//server setup
app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});