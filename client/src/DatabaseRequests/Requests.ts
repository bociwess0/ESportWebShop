import axios, { AxiosResponse } from "axios";
import { Cart, Product } from "../Interfaces/Interface";
import { error, log } from "console";

// Define the type for the product object

axios.defaults.baseURL = "http://localhost:5164/api/";
axios.defaults.withCredentials = true;

var cookieName = 'userId';

function checkCookie(): boolean {
    const cookies: string[] = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie: string = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            return true;
        }
    }
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

// User

interface LoginData {
    email: string,
    password: string
}

interface LoginResponse {
    success: boolean;
    message: string;
}

export async function loginUser(loginData: LoginData): Promise<LoginResponse> {
    try {
        const response = await axios.post(`Account/login`, loginData);
        if (response.status === 200) {
            console.log(`User with email: ${loginData.email} is successfully logged in!`);
            return {
                success: true,
                message: `User with email: ${loginData.email} is successfully logged in!`
            };
        } else {
            return {
                success: false,
                message: `Unexpected response status: ${response.status}`
            };
        }
    } catch (error) {
        console.log('Error logging in:', error);
        return {
            success: false,
            message: `Login failed: ${error}`
        };
    }
}


interface RegisterData {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    phone: string,
}

export async function registerUser(registerData: RegisterData): Promise<LoginResponse> {
    try {
        const response = await axios.post(`Account/register`, registerData);
        if (response.status === 200) {
            console.log(`User with email: ${registerData.email} is successfully logged in!`);
            return {
                success: true,
                message: `User with email: ${registerData.email} is successfully logged in!`
            };
        } else {
            return {
                success: false,
                message: `Unexpected response status: ${response.status}`
            };
        }
    } catch (error) {
        console.log('Error logging in:', error);
        return {
            success: false,
            message: `Login failed: ${error}`
        };
    }
}