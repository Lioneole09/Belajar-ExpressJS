import type { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service.js";

export class ProductController {
    constructor(private ProductService: ProductService) {} 
    
    public getProduct = (
        req:Request,
        res:Response,
        next:NextFunction,
    ) : void => {
        try {
            const data = this.ProductService.getAllProduct();
            res.status(200).json({
                succes: true,
                message: "Product fetched succesfully",
                product: data,
            });
        } catch(error) {
            next(error);
        }
    };

    public addProduct = (
        req:Request,
        res:Response,
        next:NextFunction,
    ) : void => {
        try {
            const {title, price} = req.body;
             const newProduct = this.ProductService.createProduct(title, price);
            res.status(201).json({
                succes: true,
                message: "Product fetched succesfully",
                product: newProduct,
            });
        } catch(error) {
            next(error);
        }
    };
    
}

