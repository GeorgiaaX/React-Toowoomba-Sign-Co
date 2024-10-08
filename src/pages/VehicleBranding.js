import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function VehicleBranding() {

  useEffect(() => {
    document.title = "Vehicle Branding | Car Wrap Toowoomba | Toowoomba Sign Co";
    document.querySelector('meta[name="description"]').setAttribute("content", "Help your business stand out when driving around Toowoomba and the Darling Downs with car wrapping and or vehicle signage. Call Toowoomba Sign Co for a quote - 0413 733 947.");
}, []);


  //gallerySlide Urls
  const imageUrls = [
    "../images/VehicleBranding/VFImg12.jpg",
    "../images/VehicleBranding/VFImg44.jpg",
    "../images/VehicleBranding/VFImg3.jpg",
    "../images/VehicleBranding/VFImg9.jpg",
    "../images/VehicleBranding/VFImg46.jpg",
    "../images/VehicleBranding/VFImg2.jpg",
    "../images/VehicleBranding/VFImg45.jpg",
    "../images/VehicleBranding/VFImg13.jpg",
    "../images/VehicleBranding/VFImg14.jpg",
    "../images/VehicleBranding/VFImg11.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/VehicleBranding/VFImg2.jpg",
    "../images/VehicleBranding/VFImg12.jpg",
    "../images/VehicleBranding/VFImg10.jpg",
    "../images/VehicleBranding/VFImg11.jpg",
    "../images/VehicleBranding/VFImg13.jpg",
    "../images/VehicleBranding/VFImg14.jpg",
    "../images/VehicleBranding/VFImg3.jpg",
    "../images/VehicleBranding/VFImg9.jpg",
    "../images/VehicleBranding/VFImg40.jpg",
    "../images/VehicleBranding/VFImg41.jpg",
    "../images/VehicleBranding/VFImg42.jpg",
    "../images/VehicleBranding/VFImg43.jpg",
    "../images/VehicleBranding/VFImg44.jpg",
    "../images/VehicleBranding/VFImg45.jpg",
    "../images/VehicleBranding/VFImg46.jpg",
    "../images/VehicleBranding/VFImg47.jpg",
    "../images/VehicleBranding/VFImg48.jpg",
  ];

      
    return (
        <div>

              <section>
            <Navbar />
        </section>

        <section>
               <FixedQuoteBtn />
            </section>

          <section>
                <Header
                    isGenericPage={true} 
                    isContactPage={false} 
                    heading={{ 
                        title: "Vehicle Branding Signage",
                        lastWord: "Toowoomba",
                        subheading: "Vehicle Wraps / Magnetic Vehicle Signs / Vehicle Branding",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Drive your brand forward with a mobile billboard"
              secondPhrase = "Car wrapping Toowoomba"
              descriptionFirst= "With attention-grabbing graphics logos, and contact information, your brand message is on the move, reaching a broader audience every time you jump in your car"
              descriptionSecond =  "Not only do these graphics enhance brand recognition, but they also add a professional touch to your vehicles, leaving a lasting impression on potential customers everywhere you go. Help your business stand out when driving around Toowoomba and the Darling Downs with car wrapping and vehicle signage."
              buttonLink = "/retail-pos"
              buttonTitle = "View our retail point of sale signage"
              >
              </ProductDetail>
            </section>

            <section>
              <Gallery images = {galleryUrls}
              title = " Vehicle Branding Signage Gallery"/>
              </section>
             

            <section>
                <CustomFooter />
            </section>

    
        </div>
      
    )
}

export default VehicleBranding;
