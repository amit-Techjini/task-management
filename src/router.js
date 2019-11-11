import express from "express";
import createUserRoute from "./routes/userRouter";


export default function createRouter() {

    const router = express.Router();

    router.use('/user',createUserRoute())
    //put this at the bottom of all route
    router.all("*", async (req, res) => {
        console.log(`-- Router not found -- url: ${req.originalUrl}, method: ${req.method}`);
        res.status(404).json({
            msg: "Page Not Found"
        });
    });

    return router;
}
