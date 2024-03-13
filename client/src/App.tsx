import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchProducts } from './DatabaseRequests/Requests';
import { Product } from './Interfaces/Interface';
import Header from './Components/Layout/Header/Header';
import Products from './Pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import { Provider, useDispatch } from 'react-redux';
import { store } from './Redux/store';
import { importProductsFromDatabase } from './Redux/productSlice';

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      setProducts(await fetchProducts());
    }

    
    getProducts();
    
    dispatch(importProductsFromDatabase({products: products}));
  
  }, [])

  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
