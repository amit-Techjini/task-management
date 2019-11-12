import express from "express";
import auth from "../utils/auth";
import * as todoController from "../controller/todoController";

export default function createTodoRoute() {
    const todoRoute = express.Router();

    //route to create a todo
    todoRoute.post('/createTodo', auth, todoController.createTodo);
    
    //update a todo
    todoRoute.put('/update/:id',auth, todoController.updateTodo);
    //route to login a user
    // todoRoute.post('/login', userController.login);
    
    return todoRoute;

}