import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductList from './components/Products/ProductList';

const App = () => {
  const [products, setProducts] = useState([]); // Initialize products state

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/products" element={<Products setProducts={setProducts} />} />
        <Route path="/product_list" element={<ProductList products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;

