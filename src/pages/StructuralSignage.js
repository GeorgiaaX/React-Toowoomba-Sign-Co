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
       "../images/StructuralSignage/SSImg5.jpg",
       "../images/StructuralSignage/SSImg6.jpg",
       "../images/StructuralSignage/SSImg3.jpg",
       "../images/StructuralSignage/SSImg13.jpg",
       "../images/StructuralSignage/SSImg15.jpg",
       "../images/StructuralSignage/SSImg22.jpg",
       "../images/StructuralSignage/SSImg23.jpg",
       "../images/StructuralSignage/SSImg25.jpg",
       "../images/StructuralSignage/SSImg9.jpg",
       "../images/StructuralSignage/SSImg4.jpg",
    ]

    //gallery stills urls
    const galleryUrls = [
        "../images/StructuralSignage/SSImg1.jpg",
        "../images/StructuralSignage/SSImg4.jpg",
        "../images/StructuralSignage/SSImg5.jpg",
        "../images/StructuralSignage/SSImg8.jpg",
        "../images/StructuralSignage/SSImg9.jpg",
        "../images/StructuralSignage/SSImg10.jpg",
        "../images/StructuralSignage/SSImg11.jpg",
        "../images/StructuralSignage/SSImg6.jpg",
        "../images/StructuralSignage/SSImg7.jpg",
        "../images/StructuralSignage/SSImg12.jpg",
        "../images/StructuralSignage/SSImg13.jpg",
        "../images/StructuralSignage/SSImg14.jpg",
        "../images/StructuralSignage/SSImg2.jpg",
        "../images/StructuralSignage/SSImg18.jpg",
        "../images/StructuralSignage/SSImg19.jpg",
        "../images/StructuralSignage/SSImg20.jpg",
        "../images/StructuralSignage/SSImg3.jpg",
        "../images/StructuralSignage/SSImg21.jpg",
        "../images/StructuralSignage/SSImg22.jpg",
        "../images/StructuralSignage/SSImg23.jpg",
        "../images/StructuralSignage/SSImg15.jpg",
        "../images/StructuralSignage/SSImg16.jpg",
        "../images/StructuralSignage/SSImg17.jpg",
        "../images/StructuralSignage/SSImg24.jpg",
        "../images/StructuralSignage/SSImg25.jpg",
     
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
