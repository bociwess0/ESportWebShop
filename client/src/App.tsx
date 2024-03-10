import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchProducts } from './DatabaseRequests/Requests';
import { Product } from './Interfaces/Interface';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      setProducts(await fetchProducts());
    }

    getProducts();
    console.log(products);
    

  }, [])

  return (
    <div className="App">
      {products.map((item) => <p>{item.name}</p>)}
    </div>
  );
}

export default App;
