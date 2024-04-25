import axios, { AxiosResponse } from "axios";
import { Cart, Product } from "../Interfaces/Interface";
import { error, log } from "console";

// Define the type for the product object

axios.defaults.baseURL = "http://localhost:5164/api/";
axios.defaults.withCredentials = true;

var cookieName = 'userId';

function checkCookie(): boolean {
    // Split the cookie string into individual cookies
    const cookies: string[] = document.cookie.split(';');
    
    // Loop through each cookie to check if it matches the provided name
    for (let i = 0; i < cookies.length; i++) {
        const cookie: string = cookies[i].trim();
        // Check if the cookie starts with the provided name
        if (cookie.indexOf(cookieName + '=') === 0) {
            // If found, return true
            return true;
        }
    }
    // If not found, return false
    return false;
}

export function clearCart() {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

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

export async function fetchProductById(id: number) : Promise<Product> {
    
    try {
        const response: AxiosResponse<any> = await axios.get(`Products/${id}`);

        return response.data;

    } catch (error) {
        console.log("Error fetching product data!");
        throw error;
        
    }

}

export async function fetchCart(): Promise<Cart> {

    if (checkCookie()) {
        try {
            const response: AxiosResponse<Cart> = await axios.get<Cart>("Cart");
    
            if (!response.data || Object.keys(response.data).length === 0) {
                // Return an empty cart object or any other default value
                return {
                    id: 0, // Provide a default id
                    userId: "", // Provide a default userId
                    products: [] // Empty array of products
                }; 
            }
    
            return response.data;
    
        } catch (error) {
            // Handle errors here
            console.error("Error fetching cart:", error);
            throw error;
        }
    } else {
        console.log('Cookie "userId" does not exist.');
        return {
            id: 0, // Provide a default id
            userId: "", // Provide a default userId
            products: [] // Empty array of products
        }; 
    }

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

export async function removeFromCartDB(productId:number, quantity:number) {
    axios.delete(`Cart?productId=${productId}&quantity=${quantity}`)
    .then(response => {
        console.log(`Product with id: ${productId} is successfully deleted from cart!`);
      })
    .catch(error => {
        console.log(error);
    })
}
