import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
const User_Model = require("../db/models").user;

class AuthController {
    constructor() {
        this.findUser
        this.jwtSign
        this.register
        this.login
    }
    protected optios = {
        expires: new Date(
          Date.now() + (24 * 60 * 60 * 1000)
        ),
        httpOnly: true,
      };

    protected jwtSign(userData:any):Secret {
        const token_secret =String(process.env.SECRET_TOKEN)
        return jwt.sign({
            sub: userData.name,
            tel: userData.tel_num,
            iss: "mini-service",
            iat: new Date().getTime() / 1000,
            exp: (new Date().getTime() / 1000) + 3600
        }, token_secret)
    }

    protected findUser = async(tel_num:string) => {
        const findUser = await User_Model.findOne({
            where: {
                tel_num: parseInt(tel_num)
            }
        });
        return findUser
    }

    register = async({body}: Request, res: Response) => {
        let { tel_num } = body;
        const findUser = await this.findUser(tel_num)
        if(findUser){
            return res.status(403).send({
                message: "telp number has been used"
            })
        };
        const accessToken = this.jwtSign(body);
        const createdUser = await User_Model.create(body);

        return res.status(201).cookie('token', accessToken, this.optios).send({
            message: "Account created", accessToken
        });
    }

    login = async(req: Request, res: Response) => {
        let { tel_num } = req.body;
        const findUser = await this.findUser(tel_num)
        if(!findUser){
            return res.status(403).send({
                message: "telp num not registered yet"
            })
        }
        const accessToken = this.jwtSign(findUser)

        return res.status(201).cookie('token', accessToken, this.optios).send({
            message: "Success to login", accessToken,
        })
    }

    google = async(req: Request, res: Response) => {
        
    }

    logout = async(req: Request, res: Response) => {
        res.cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true,
          });
        return res.send({
            status: 200,
            success: true,
            data: {}
        })
    }
}

export default new AuthController()