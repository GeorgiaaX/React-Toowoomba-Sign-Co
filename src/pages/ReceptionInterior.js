import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function ReceptionInterior() {

    useEffect(() => {
        document.title = "Reception & Interior Signage Toowoomba & Darling Downs";
        document.querySelector('meta[name="description"]').setAttribute("content", "Transform your office or building in Toowoomba and the Darling Downs with reception and interior signage that can be tailored to your branding and colours. Call for a quote 0413 733 947.");
    }, []);

 
  //gallerySlide Urls
  const imageUrls = [
    "../images/RetailPOS/POSImg1.jpg",
    "../images/RetailPOS/POSImg12.jpg",
    "../images/RetailPOS/POSImg3.jpg",
    "../images/RetailPOS/POSImg9.jpg",
    "../images/RetailPOS/POSImg14.jpg",
    "../images/RetailPOS/POSImg13.jpg",
    "../images/RetailPOS/POSImg10.jpg",
    "../images/RetailPOS/POSImg2.jpg",
    "../images/RetailPOS/POSImg5.jpg",
    "../images/RetailPOS/POSImg16.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/RetailPOS/POSImg1.jpg",
    "../images/RetailPOS/POSImg2.jpg",
    "../images/RetailPOS/POSImg7.jpg",
    "../images/RetailPOS/POSImg4.jpg",
    "../images/RetailPOS/POSImg5.jpg",
    "../images/RetailPOS/POSImg10.jpg",
    "../images/RetailPOS/POSImg11.jpg",
    "../images/RetailPOS/POSImg8.jpg",
    "../images/RetailPOS/POSImg9.jpg",
    "../images/RetailPOS/POSImg3.jpg",
    "../images/RetailPOS/POSImg13.jpg",
    "../images/RetailPOS/POSImg12.jpg",
    "../images/RetailPOS/POSImg16.jpg",
    "../images/RetailPOS/POSImg6.jpg",
    "../images/RetailPOS/POSImg14.jpg",
    "../images/RetailPOS/POSImg15.jpg",
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
                        title: "Reception & Interior",
                        lastWord: "Signage",
                        subheading: "Wall graphics / 3D lettering & Signs / Illuminated Signs & Lettering",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Reception signage that makes a lasting impression"
                secondPhrase = "Impress customers with elegant signage"
              descriptionFirst= "From elegant reception desk signs that convey professionalism to interior signs that guide visitors seamlessly through your office, shop or warehouse, we offer a range of customisable solutions."
              descriptionSecond =  "Our attention to detail ensures your brand identity is consistently reinforced throughout your space, leaving a lasting and positive impression on all customers and visitors." 
              buttonLink = "/structural-signage"
                buttonTitle = "View our structural signage">
              </ProductDetail>
            </section>

            <section>
              <Gallery images = {galleryUrls}
              title = "Reception & Interior Signage"/>
              </section>
             

            <section>
                <CustomFooter />
            </section>

          

        </div>
      


    )
}

export default ReceptionInterior;
