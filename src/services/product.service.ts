
export interface IDummyProduct{
    id:  number;
    title: string;
    price: number;
}

export class ProductService {
    private products: IDummyProduct[]=[
        {id: 1, title:"Coffe Latte", price: 10},
        {id: 2, title:"Matcha Latte", price: 5},
    ];

    public getAllProduct(): IDummyProduct[] {
        return this.products
    }

    public createProduct(title:string, price:number): IDummyProduct {
        const newProduct: IDummyProduct = {
            id: Math.floor(Math.random() * 100) +100,
            title,
            price,
        };

        this.products.push(newProduct);
        return newProduct;
    }
}
