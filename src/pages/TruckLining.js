import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function TruckLining() {
    //gallerySlide Urls
    const imageUrls = [
       "../images/TruckLining/TLImg1.jpg",
       "../images/TruckLining/TLImg4.jpg",
       "../images/TruckLining/TLImg7.jpg",
       "../images/TruckLining/TLImg2.jpg",
       "../images/TruckLining/TLImg10.jpg",
       "../images/TruckLining/TLImg6.jpg",
       "../images/TruckLining/TLImg3.jpg",
       "../images/TruckLining/TLImg9.jpg",
       "../images/TruckLining/TLImg8.jpg",
       "../images/TruckLining/TLImg5.jpg",
    ]

    //gallery stills urls
    const galleryUrls = [
        "../images/TruckLining/TLImg1.jpg",
       "../images/TruckLining/TLImg2.jpg",
       "../images/TruckLining/TLImg3.jpg",
       "../images/TruckLining/TLImg4.jpg",
       "../images/TruckLining/TLImg5.jpg",
       "../images/TruckLining/TLImg6.jpg",
       "../images/TruckLining/TLImg7.jpg",
       "../images/TruckLining/TLImg8.jpg",
       "../images/TruckLining/TLImg9.jpg",
       "../images/TruckLining/TLImg10.jpg",
       "../images/TruckLining/TLImg11.jpg",

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
                        title: "Truck Lining and ",
                        lastWord: "Scrolling",
                        subheading: "Truck & Trailer Lining & Scrolling / Printed Vinyl Graphics / Cut Vinyl Lettering",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Where design meets the road"
              secondPhrase = "Drive your brand forward"
              descriptionFirst= "Transform your trucks into mobile works of art that capture attention wherever they go. Our custom designs provide a dynamic way to showcase your trucks, brand and messages."
              descriptionSecond =  "With vibrant graphics and the ability to update your content while on the move, you can reach a broad audience and leave a lasting impression. ">
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

export default TruckLining;
