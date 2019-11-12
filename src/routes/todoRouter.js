import express from "express";
import auth from "../utils/auth";
import * as todoController from "../controller/todoController";

export default function createTodoRoute() {
    const userRoute = express.Router();

    //route to register a user
    userRoute.post('/createTodo', auth, todoController.createTodo);

    //route to login a user
    // userRoute.post('/login', userController.login);
    
    return userRoute;

}