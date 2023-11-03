import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function IlluminatedDesigns() {
    //gallerySlide Urls
    const imageUrls = [
        "../images/IlluminatedDesigns/IDImg1.jpg",
        "../images/IlluminatedDesigns/IDImg21.jpg",
        "../images/IlluminatedDesigns/IDImg9.jpg",
        "../images/IlluminatedDesigns/IDImg19.jpg",
        "../images/IlluminatedDesigns/IDImg16.jpg",
        "../images/IlluminatedDesigns/IDImg3.jpg",
        "../images/IlluminatedDesigns/IDImg18.jpg",
        "../images/IlluminatedDesigns/IDImg10.jpg",
        "../images/IlluminatedDesigns/IDImg6.jpg",
        "../images/IlluminatedDesigns/IDImg15.jpg",

    ]

    //gallery stills urls
    const galleryUrls = [

        "../images/IlluminatedDesigns/IDImg1.jpg",
        "../images/IlluminatedDesigns/IDImg12.jpg",
        "../images/IlluminatedDesigns/IDImg2.jpg",
        "../images/IlluminatedDesigns/IDImg15.jpg",
        "../images/IlluminatedDesigns/IDImg3.jpg",
        "../images/IlluminatedDesigns/IDImg24.jpg", 
        "../images/IlluminatedDesigns/IDImg7.jpg",
        "../images/IlluminatedDesigns/IDImg21.jpg",
        "../images/IlluminatedDesigns/IDImg8.jpg",
        "../images/IlluminatedDesigns/IDImg9.jpg",
        "../images/IlluminatedDesigns/IDImg5.jpg",
        "../images/IlluminatedDesigns/IDImg18.jpg",
        "../images/IlluminatedDesigns/IDImg11.jpg",
        "../images/IlluminatedDesigns/IDImg23.jpg",
        "../images/IlluminatedDesigns/IDImg13.jpg",
        "../images/IlluminatedDesigns/IDImg4.jpg",
        "../images/IlluminatedDesigns/IDImg10.jpg",
        "../images/IlluminatedDesigns/IDImg16.jpg",
        "../images/IlluminatedDesigns/IDImg17.jpg",
        "../images/IlluminatedDesigns/IDImg19.jpg",
        "../images/IlluminatedDesigns/IDImg20.jpg",
        "../images/IlluminatedDesigns/IDImg6.jpg",
        "../images/IlluminatedDesigns/IDImg22.jpg",
        "../images/IlluminatedDesigns/IDImg14.jpg",
           
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
                        title: "3D Illuminated Letters and",
                        lastWord: "Displays",
                        subheading: "Fabricated Letters / Lightboxes / 3D Signage",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Illuminate your brand"
              secondPhrase = "Captivate your audience"
              descriptionFirst= "These striking visual elements take your business to the next level, day or night. Our customizable 3D letters are designed to radiate your brand's personality."
              descriptionSecond = "From sleek sophistication to eye-catching vibrancy, our 3D Illuminated Letters and Displays add a touch of brilliance and professionalism to your business, leaving a lasting impression on all who encounter them.">
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

export default IlluminatedDesigns;
