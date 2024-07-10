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

export interface OrderProductObj {
    id: number,
    name: string,
    productId: number,
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

export interface UpdatedUser {
    email: string,
    currentPassword: string,
    newPassword: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    phone: string,
}

export interface Order {
    id: number,
    orderDate: Date,
    orderItems: OrderProductObj [],
    totalPrice: number,
    userId: string,
    orderStatus: string
}