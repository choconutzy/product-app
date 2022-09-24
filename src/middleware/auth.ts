import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
const User = require("../db/models").user;


export const authenticationMiddleware = async(req:any, res: Response, next: NextFunction) => {
    let jwtPayload = {};

    // extract jwt / authentication
    const token = req.cookies.token || String(req.headers?.authorization?.split(" ")[1]);
    if (!token) {
      res.status(400).send({ error: "token not found", message: "login please" });
    }
    try {
        jwtPayload = jwt.verify(token, String(process.env.SECRET_TOKEN));
        req.user = jwtPayload
        res.locals.jwtPayload = jwtPayload
        const user = await User.findOne({
            where:{
                tel_num: res.locals.jwtPayload.tel
            }
        })
        req.user.id = user.id
    } catch (error) {
        res.status(400).send({ error: "token invalid", message: "login please" });
        return;
    }
    next()
}