import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function ReceptionInterior() {
    //gallerySlide Urls
    const imageUrls = [
        "../images/ReceptionInterior/RIImg6.jpg",
        "../images/ReceptionInterior/RIImg9.jpg",
        "../images/ReceptionInterior/RIImg3.jpg",
        "../images/ReceptionInterior/RIImg13.jpg",
        "../images/ReceptionInterior/RIImg1.jpg",
        "../images/ReceptionInterior/RIImg7.jpg",
        "../images/ReceptionInterior/RIImg4.jpg",
        "../images/ReceptionInterior/RIImg11.jpg",
        "../images/ReceptionInterior/RIImg2.jpg",
        "../images/ReceptionInterior/RIImg8.jpg",
    ]

    //gallery stills urls
    const galleryUrls = [
        "../images/ReceptionInterior/RIImg1.jpg",
        "../images/ReceptionInterior/RIImg2.jpg",
        "../images/ReceptionInterior/RIImg3.jpg",
        "../images/ReceptionInterior/RIImg5.jpg",
        "../images/ReceptionInterior/RIImg6.jpg",
        "../images/ReceptionInterior/RIImg8.jpg",
        "../images/ReceptionInterior/RIImg4.jpg",
        "../images/ReceptionInterior/RIImg9.jpg",
        "../images/ReceptionInterior/RIImg10.jpg",
        "../images/ReceptionInterior/RIImg7.jpg",
        "../images/ReceptionInterior/RIImg11.jpg",
        "../images/ReceptionInterior/RIImg12.jpg",
        "../images/ReceptionInterior/RIImg13.jpg",
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
                        title: "Reception and",
                        lastWord: "Interior",
                        subheading: "Wall graphics / 3D lettering & Signs / Illuminated Signs & Lettering",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Blend form and function"
              secondPhrase = "Guide and impress visitors"
              descriptionFirst= "From elegant reception desk signs that convey professionalism to interior signs that guide visitors seamlessly through your facility, we offer a range of customizable solutions."
              descriptionSecond =  "Our attention to detail ensures your brand identity is consistently reinforced throughout your space, leaving a lasting and positive impression on all who enter.">
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

export default ReceptionInterior;
