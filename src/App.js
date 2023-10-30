import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element = {<Home />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/product/:productId" element = {<Product />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
