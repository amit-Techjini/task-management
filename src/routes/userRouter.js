import express from "express";
import * as userController from "../controller/userController";

export default function createUserRoute() {
    const userRoute = express.Router();

    //route to register a user
    userRoute.post('/register', userController.register);

    //route to login a user
    userRoute.post('/login', userController.login);
    
    return userRoute;

}
