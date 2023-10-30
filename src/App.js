import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  useEffect(() => {
    const handleBackButtonEvent = (event) => {
      window.location.reload(true);
    };

    window.addEventListener('popstate', handleBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', handleBackButtonEvent);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;