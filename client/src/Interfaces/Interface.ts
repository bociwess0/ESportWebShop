export interface Product {
    id: number,
    name: string,
    desription: string,
    price: number,
    pictureUrl: string,
    type: string,
    brand: string,
    quantityInStock: number,
    quantity: number
}

export interface Cart {
    id: number,
    userId: string,
    products: Product[];
}