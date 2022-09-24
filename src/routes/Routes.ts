import { AuthController, CartController, CategoryController, ProductController } from "../controllers/Index"
import BaseRoutes from "./BaseRoutes";

class ProductRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/search?", ProductController.search)
        this.router.get("/",  ProductController.showAll)
    }
}

class CategoryRoute extends BaseRoutes {
    public routes(): void {
        this.router.get("/",  CategoryController.showAll)
    }
}

class CartRoute extends BaseRoutes {
    public routes(): void {
        this.router.get("/",  CartController.showAll)
        this.router.get("/:id",  CartController.search)
        this.router.post("/",  CartController.create)
        this.router.put("/:id",  CartController.update)
        this.router.delete("/:id",  CartController.delete)
    }
}

class AuthRoute extends BaseRoutes {
    public routes(): void {
        this.router.post("/register", AuthController.register)
        this.router.post("/login", AuthController.login)
        // this.router.post("/google", AuthController.login)
        this.router.get("/logout", AuthController.logout)
    }
}

const ProductRouters = new ProductRoutes().router;
const CategoryRouters = new CategoryRoute().router;
const AuthRoutes = new AuthRoute().router;
const CartRoutes = new CartRoute().router;

export { ProductRouters, CategoryRouters, AuthRoutes, CartRoutes }