export interface Product {
    id: number,
    name: string,
    description: string,
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

export interface User {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    phone: string,
}

export interface Order {
    id: number,
    orderDate: Date,
    orderItems: Product [],
    totalPrice: number,
    userId: string
}