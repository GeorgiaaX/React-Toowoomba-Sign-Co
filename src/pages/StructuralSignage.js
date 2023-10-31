import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function StructuralSignage() {
    //gallerySlide Urls
    const imageUrls = [
       
    ]

    //gallery stills urls
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
                    heading={{ 
                        title: "Structural",
                        lastWord: "Signage",
                        subheading: "New Structures & Framework / Signs for Existing Structures / Freestanding Signage  / Architectural Signage",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Make a bold statement"
              secondPhrase = "Architectural Elegance"
              descriptionFirst= " Crafted with precision and durability in mind, our structural signage seamlessly integrates with your space, conveying essential information in a visually striking way."
              descriptionSecond =  "Whether it's identifying key locations in a corporate building, enhancing the aesthetics of a public space, or providing crucial safety information, our structural signage serves a dual purpose – form and function.">
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

export default StructuralSignage;
