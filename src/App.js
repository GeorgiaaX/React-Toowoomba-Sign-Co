import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BuildingShopface from './pages/BuildingShopface';
import IlluminatedDesigns from './pages/IlluminatedDesigns';
import ReceptionInterior from './pages/ReceptionInterior';
import StructuralSignage from './pages/StructuralSignage';

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
        <Route path="/building-shopface" element={<BuildingShopface />} />
        <Route path="/illuminated-designs" element={<IlluminatedDesigns />} />
        <Route path="/reception-interior" element={<ReceptionInterior />} />
        <Route path="/structural-signage" element={<StructuralSignage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;