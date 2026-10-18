import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { ProductService } from "../services/product.service.js";
import { validate } from "../middleware/validate.middleware.js";
import { CreateProductSchema } from "../schemas/product.schema.js";


const productRouter: Router = Router();
const productService: ProductService = new ProductService();

const productController: ProductController = new ProductController (
    productService,
);

productRouter.get("/", productController.getProduct);

productRouter.post (
    "/",
    validate(CreateProductSchema),
    productController.addProduct,
);


export { productRouter}