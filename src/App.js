import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BuildingShopface from "./pages/BuildingShopface";
import IlluminatedDesigns from "./pages/IlluminatedDesigns";
import ReceptionInterior from "./pages/ReceptionInterior";
import StructuralSignage from "./pages/StructuralSignage";
import DirectionalWayfinding from "./pages/DirectionalWayfinding";
import WindowGraphics from "./pages/WindowGraphics";
import VehicleBranding from "./pages/VehicleBranding";
import RetailPOS from "./pages/RetailPOS";
import CommercialSignage from "./pages/CommercialSignage";
import OurProcess from "./pages/OurProcess";
import Success from "./pages/Success";
import AboutUsPage from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import GalleryBuildingShopface from "./pages/GalleryBuildingShopface";
import GalleryIlluminatedDesigns from "./pages/GalleryIlluminatedDesigns";
import GalleryReceptionInterior from "./pages/GalleryReceptionInterior";
import GalleryStructuralSignage from "./pages/GalleryStructuralSignage";
import GalleryDirectionalWayfinding from "./pages/GalleryDirectionalWayfinding";
import GalleryWindowGraphics from "./pages/GalleryWindowGraphics";
import GalleryVehicleBranding from "./pages/GalleryVehicleBranding";
import GalleryRetailPOS from "./pages/GalleryRetailPOS";
import GalleryCommercialSignage from "./pages/GalleryCommericalSignage";
import ScrollToTop from "./components/ScollToTop";

function App() {
  useEffect(() => {
    const handleBackButtonEvent = (event) => {
      window.location.reload(true);
    };

    window.addEventListener("popstate", handleBackButtonEvent);

    return () => {
      window.removeEventListener("popstate", handleBackButtonEvent);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/building-shopface" element={<BuildingShopface />} />
        <Route path="/illuminated-designs" element={<IlluminatedDesigns />} />
        <Route path="/reception-interior" element={<ReceptionInterior />} />
        <Route path="/structural-signage" element={<StructuralSignage />} />
        <Route
          path="/directional-wayfinding"
          element={<DirectionalWayfinding />}
        />
        <Route path="/window-graphics" element={<WindowGraphics />} />
        <Route path="/vehicle-branding" element={<VehicleBranding />} />
        <Route path="/retail-pos" element={<RetailPOS />} />
        <Route path="/commercial-signage" element={<CommercialSignage />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/portfolio-gallery" element={<Portfolio />} />
        <Route
          path="/gallery-building-shopface"
          element={<GalleryBuildingShopface />}
        />
        <Route
          path="/gallery-illuminated-designs"
          element={<GalleryIlluminatedDesigns />}
        />
        <Route
          path="/gallery-reception-interior"
          element={<GalleryReceptionInterior />}
        />
        <Route
          path="/gallery-structural-signage"
          element={<GalleryStructuralSignage />}
        />
        <Route
          path="/gallery-directional-wayfinding"
          element={<GalleryDirectionalWayfinding />}
        />
        <Route
          path="/gallery-window-graphics"
          element={<GalleryWindowGraphics />}
        />
        <Route
          path="/gallery-vehicle-branding"
          element={<GalleryVehicleBranding />}
        />
        <Route path="/gallery-retail-pos" element={<GalleryRetailPOS />} />
        <Route
          path="/gallery-commercial-signage"
          element={<GalleryCommercialSignage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
