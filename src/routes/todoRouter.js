import express from "express";
import * as todoController from "../controller/todoController";

export default function createTodoRoute() {
    const userRoute = express.Router();

    //route to register a user
    userRoute.post('/createTodo', todoController.createTodo);

    //route to login a user
    // userRoute.post('/login', userController.login);
    
    return userRoute;

}