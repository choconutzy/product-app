import { Request, Response } from "express";
import IController from "./ControllerInterface";
const Category_Model = require('../db/models').Category;


class CategoryController implements IController {
    showAll = async(req: Request, res: Response): Promise<Response> => {
        try {
            const categories = await Category_Model.findAll()
            return res.status(200).json({
                message: "success get all category",
                data: categories
            })
        } catch (error) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }
    search(req: Request, res: Response): Response {
        return res.send("this is category by id")
    }
}

export default new CategoryController()