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
        "../images/DirectionalWayfinding/DWImg9.jpg",
        "../images/DirectionalWayfinding/DWImg21.jpg",
        "../images/DirectionalWayfinding/DWImg23.jpg",
        "../images/DirectionalWayfinding/DWImg10.jpg",
        "../images/DirectionalWayfinding/DWImg15.jpg",
        "../images/DirectionalWayfinding/DWImg12.jpg",
        "../images/DirectionalWayfinding/DWImg22.jpg",
        "../images/DirectionalWayfinding/DWImg19.jpg",
        "../images/DirectionalWayfinding/DWImg20.jpg",
        "../images/DirectionalWayfinding/DWImg5.jpg",
    ]

    const galleryUrls = [
        "../images/DirectionalWayfinding/DWImg1.jpg",
        "../images/DirectionalWayfinding/DWImg2.jpg",
        "../images/DirectionalWayfinding/DWImg5.jpg",
        "../images/DirectionalWayfinding/DWImg8.jpg",
        "../images/DirectionalWayfinding/DWImg21.jpg",
        "../images/DirectionalWayfinding/DWImg22.jpg",
        "../images/DirectionalWayfinding/DWImg9.jpg",
        "../images/DirectionalWayfinding/DWImg10.jpg", 
        "../images/DirectionalWayfinding/DWImg11.jpg",
        "../images/DirectionalWayfinding/DWImg3.jpg",
        "../images/DirectionalWayfinding/DWImg4.jpg",
        "../images/DirectionalWayfinding/DWImg16.jpg",
        "../images/DirectionalWayfinding/DWImg12.jpg",
        "../images/DirectionalWayfinding/DWImg6.jpg",
        "../images/DirectionalWayfinding/DWImg7.jpg",
        "../images/DirectionalWayfinding/DWImg13.jpg",
        "../images/DirectionalWayfinding/DWImg14.jpg",
        "../images/DirectionalWayfinding/DWImg17.jpg",
        "../images/DirectionalWayfinding/DWImg18.jpg",
        "../images/DirectionalWayfinding/DWImg19.jpg",
        "../images/DirectionalWayfinding/DWImg20.jpg",
        "../images/DirectionalWayfinding/DWImg15.jpg",
        "../images/DirectionalWayfinding/DWImg23.jpg",
    
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
