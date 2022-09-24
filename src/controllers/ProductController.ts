import { Request, Response } from "express";
import IController from "./ControllerInterface";
const Category_Model = require('../db/models').Category;
const Product_Model = require('../db/models').Product;


class ProductController implements IController {
    search=async({ query }: Request, res: Response): Promise<Response> => {
        if(query.category){
            try {
                const products = await Product_Model.findAll({
                    include: {
                        model: Category_Model,
                        where: {
                            id: query.category
                        }
                    }
                })
                return res.status(200).json({
                    message: `success get product by category`,
                    data: products
                })
            } catch (error) {
                return res.status(500).json({
                    message: "internal server error"
                })
            }
        } else if(query.id) {
            const product = await Product_Model.findOne({
                where: {
                    id: query.id
                }
            })
            return res.status(200).json({
                message: `success get product by id ${query.id}`,
                data: product
            })
        } else {
            return res.send("error")
        }
    }

    showAll= async(req: Request, res: Response):  Promise<Response> => {
        try {
            const products = await Product_Model.findAll()
            return res.status(200).json({
                message: "success get all product",
                data: products
            })
        } catch (error) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }
}

export default new ProductController()