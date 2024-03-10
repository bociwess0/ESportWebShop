import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchProducts } from './DatabaseRequests/Requests';
import { Product } from './Interfaces/Interface';
import Header from './Components/Layout/Header/Header';
import Products from './Pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Products products={products}  />
    </div>
  );
}

export default App;
