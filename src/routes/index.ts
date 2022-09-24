import { AuthRoutes, CartRoutes, CategoryRouters, ProductRouters } from "./Routes";
import BaseRoutes from "./BaseRoutes";
import { Request, Response } from "express";
import { authenticationMiddleware } from "../middleware/auth"

class Routes extends BaseRoutes{
    routes() {
        this.router.get("/", (req: Request, res: Response) => {
        res.send("Welcome to WoiShop")})
        this.router.use("/auth", AuthRoutes)
        this.router.use("/products", authenticationMiddleware,  ProductRouters)
        this.router.use("/categories", authenticationMiddleware, CategoryRouters)
        this.router.use("/cart", authenticationMiddleware, CartRoutes)
    }
}

const Routers = new Routes().router

export default Routers