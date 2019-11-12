import UserModel from "../model/UserModel";
import jwt from "jsonwebtoken";

let userModel = new UserModel();

export default async function (req, res,next) {
    try{
        const token = req.headers.authorization.split(' ')[1]; 
        if(!token) {
            res.status(401).json({
                message: "Token exp"
            });
        }
        const userId = jwt.verify(token, "thisissecret");
        const user = await userModel.findUserById(userId);
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
}