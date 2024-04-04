import axios, { AxiosResponse } from "axios";
import { Product } from "../Interfaces/Interface";
import { error, log } from "console";

// Define the type for the product object

const URL = "http://localhost:5164/api/";


export async function fetchProducts(): Promise<Product[]> {
    const response: AxiosResponse<any> = await axios.get(URL + "Products");
    const products: Product[] = [];

    for (const key in response.data) {
        if (Object.prototype.hasOwnProperty.call(response.data, key)) {
            const product: Product = response.data[key];
            products.push(product);
        }
    }    

    return products;
}

export async function addTocartDB(product:Product) {
    axios.post(`${URL}Cart?productId=${product.id}&quantity=1`, {})
    .then(response => {
        console.log(response.data);
      })
    .catch(error => {
        console.log(error);
    })
}
