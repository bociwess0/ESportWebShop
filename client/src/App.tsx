import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchProducts } from './DatabaseRequests/Requests';
import { Product } from './Interfaces/Interface';
import Header from './Components/Layout/Header/Header';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      setProducts(await fetchProducts());
    }

    getProducts();
  
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
