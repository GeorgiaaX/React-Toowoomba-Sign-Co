import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function DirectionalWayfinding() {
    const imageUrls = [
  
    ]

    const galleryUrls = [
    
    
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
                    // backgroundImg = "../images/BuildingShopface/BSHeroImg.jpg"
                    heading={{ 
                        title: "Directional and",
                        lastWord: "Wayfinding",
                        subheading: "Directional Pylons / Wayfinding Signage",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Navigate with confidence"
              secondPhrase = "Simplify the complex"
              descriptionFirst= "Our signs offer clear and concise guidance. Whether in a sprawling campus, a bustling hospital, or a busy public venue, our directional signs ensure individuals find their way quickly and efficiently."
              descriptionSecond = "For a more comprehensive understanding of your surroundings, our wayfinding signs map out routes and highlight key landmarks.">
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

export default DirectionalWayfinding;
