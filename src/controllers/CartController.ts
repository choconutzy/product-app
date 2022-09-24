import { Response } from "express";
import IController from "./ControllerInterface";
const Product_Model = require('../db/models').Product;
const Cart = require("../db/models").User_Product;

class CartController implements IController {
    showAll = async(req: any, res: Response): Promise<Response> => {
        try {
            const carts = await Cart.findAll({
                where: {
                    user_id : req.user.id
                }
            })
            return res.status(200).json({
                message: "success get all products from cart",
                data: carts
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }
    search = async(req: any, res: Response): Promise<Response> => {
        try {
            const cart = await Cart.findOne({
                where: {
                    product_id: req.params.id,
                    user_id: req.user.id
                }
            })
            if(!cart || cart === undefined || cart === null){
                return res.status(404).json({
                    message: "cart not found"
                })
            }
            return res.status(200).json({
                message: "success get product from cart",
                data: cart
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }
    create = async(req: any, res: Response): Promise<Response> => {
        try {
            const {product_id, quantity} = req.body
            const product = await Product_Model.findOne({
                where : {
                    id: product_id
                }
            })
            const anyCart = await Cart.findOne({
                where: {
                    product_id,
                    user_id: req.user.id
                }
            })
            if(!anyCart || anyCart === undefined || anyCart === null){
                const newCart = await Cart.create({
                    user_id: req.user.id,
                    product_id: product_id, 
                    quantity: quantity,
                    total : (product.price*quantity)
                })
                return res.status(200).json({
                    message: "success add product to cart"
                })
            } else {
                return res.status(204).json({
                    message: "use update methode"
                })

            }

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }

    update = async(req: any, res: Response): Promise<Response> => {
        try {
            const {user_id, product_id, quantity} = req.body
            const anyCart = await Cart.findOne({
                where: {
                    product_id,
                    user_id: req.user.id
                },
                include: {model: Product_Model}
            })
            const payload = {
                user_id,
                product_id, 
                quantity,
                total : (anyCart.Product.price*quantity)
            }
            const newCart = await Cart.update(payload, { where: { product_id }})
            return res.status(200).json({
                message: "success update product to cart",
                data: payload
            })
        } catch (error) {
            return res.status(500).json({
                message: "product not found"
            })
        }
    }

    delete = async(req: any, res: Response): Promise<Response> => {
        try {
            const delete_product = await Cart.destroy({
                where: {
                    product_id: req.params.id,
                    user_id : req.user.id
                }
            })
            return res.status(200).json({
                message: "success delete product from cart"
            })
        } catch (error) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }
}

export default new CartController()