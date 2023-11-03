import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function VehicleBranding() {
    //gallerySlide Urls
    const imageUrls = [
      "../images/VehicleBranding/VFImg6.jpg",
      "../images/VehicleBranding/VFImg20.jpg",
      "../images/VehicleBranding/VFImg3.jpg",
      "../images/VehicleBranding/VFImg9.jpg",
      "../images/VehicleBranding/VFImg16.jpg",
      "../images/VehicleBranding/VFImg18.jpg",
      "../images/VehicleBranding/VFImg8.jpg",
      "../images/VehicleBranding/VFImg13.jpg",
      "../images/VehicleBranding/VFImg1.jpg",
      "../images/VehicleBranding/VFImg11.jpg",

    ]

    //gallery stills urls
    const galleryUrls = [
        "../images/VehicleBranding/VFImg1.jpg",
      "../images/VehicleBranding/VFImg2.jpg",
      "../images/VehicleBranding/VFImg12.jpg",
      "../images/VehicleBranding/VFImg5.jpg",
      "../images/VehicleBranding/VFImg6.jpg",
      "../images/VehicleBranding/VFImg17.jpg",
      "../images/VehicleBranding/VFImg19.jpg",
      "../images/VehicleBranding/VFImg15.jpg",
      "../images/VehicleBranding/VFImg16.jpg",
      "../images/VehicleBranding/VFImg10.jpg",
      "../images/VehicleBranding/VFImg11.jpg",
      "../images/VehicleBranding/VFImg4.jpg",
      "../images/VehicleBranding/VFImg18.jpg",
      "../images/VehicleBranding/VFImg13.jpg",
      "../images/VehicleBranding/VFImg7.jpg",
      "../images/VehicleBranding/VFImg8.jpg",
      "../images/VehicleBranding/VFImg14.jpg",
      "../images/VehicleBranding/VFImg3.jpg",
      "../images/VehicleBranding/VFImg9.jpg",
      "../images/VehicleBranding/VFImg20.jpg",
      "../images/VehicleBranding/VFImg21.jpg",
     
    ]

      
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
                        title: "Vehicle Fleet",
                        lastWord: "Branding",
                        subheading: "Vehicle Wraps / Magnetic Vehicle Signs / Vehicle Branding",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Drive your brand forward"
              secondPhrase = "Create mobile billboards"
              descriptionFirst= " With attention-grabbing graphics, logos, and contact information, your brand message is on the move, reaching a broader audience with every journey. "
              descriptionSecond =  "Not only do these graphics enhance brand recognition, but they also add a professional touch to your vehicles, leaving a lasting impression on potential customers everywhere you go.">
              </ProductDetail>
            </section>

            <section>
              <Gallery images = {galleryUrls}/>
              </section>
             

            <section>
                <CustomFooter />
            </section>

    
        </div>
      
    )
}

export default VehicleBranding;
