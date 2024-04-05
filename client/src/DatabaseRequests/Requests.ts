import axios, { AxiosResponse } from "axios";
import { Cart, Product } from "../Interfaces/Interface";
import { error, log } from "console";

// Define the type for the product object

axios.defaults.baseURL = "http://localhost:5164/api/";
axios.defaults.withCredentials = true;


export async function fetchProducts(): Promise<Product[]> {
    const response: AxiosResponse<any> = await axios.get("Products");
    const products: Product[] = [];

    for (const key in response.data) {
        if (Object.prototype.hasOwnProperty.call(response.data, key)) {
            const product: Product = response.data[key];
            products.push(product);
        }
    }    

    return products;
}

export async function fetchCart() {
    const response: AxiosResponse<any> = await axios.get("Cart");
    var cart = {};

    for(const key in response.data) {
        if (Object.prototype.hasOwnProperty.call(response.data, key)) {
            cart = response.data[key];
        }
    }

    return cart;

}

export async function addTocartDB(product:Product, quantity: number) {
    
    axios.post(`Cart?productId=${product.id}&quantity=${quantity}`, {})
    .then(response => {
        console.log(response.data);
      })
    .catch(error => {
        console.log(error);
    })
}

export async function removeFromCartDB(product:Product) {
    axios.delete(`Cart?productId=${product.id}&quantity=1`)
    .then(response => {
        console.log(response.data);
      })
    .catch(error => {
        console.log(error);
    })
}
