import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductList from './components/Products/ProductList';
import Inventory from './components/Inventory/Inventory';
import InventoryList from './components/Inventory/InventoryList';
import Photo from './components/Photo/Photo';

const App = () => {
  const [products, setProducts] = useState(() => {
    // Retrieve the products from localStorage on initial load
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    // Save the products to localStorage whenever they change
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  const [product, setInv] = useState(() => {
    // Retrieve the products from localStorage on initial load
    const savedProducts = localStorage.getItem('product');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    // Save the products to localStorage whenever they change
    localStorage.setItem('product', JSON.stringify(product));
  }, [product]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setProducts={setProducts} />} />
        <Route path="/product_list" element={<ProductList products={products} />} />
        <Route path="/inventory" element={<Inventory setInv={setInv} />} />
        <Route path="/inventory_list" element={<InventoryList product={product} />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </Router>
  );
};

export default App;
