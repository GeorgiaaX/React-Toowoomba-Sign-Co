import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function RetailPOS() {
    //gallerySlide Urls
    const imageUrls = [
        "../images/RetailPOS/POSImg1.jpg",
        "../images/RetailPOS/POSImg12.jpg",
        "../images/RetailPOS/POSImg3.jpg",
        "../images/RetailPOS/POSImg9.jpg",
        "../images/RetailPOS/POSImg14.jpg",
        "../images/RetailPOS/POSImg13.jpg",
        "../images/RetailPOS/POSImg10.jpg",
    ]

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
                        title: "Retail",
                        lastWord: "POS",
                        subheading: "A Frames / Pull Up Banners / Stickers / Shop Hoardings / Banners / Flags / Counter Signs",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Elevate your retail space"
              secondPhrase = "Boost your sales"
              descriptionFirst= "These eye-catching displays are strategically positioned to captivate shoppers' attention and influence their purchasing decisions. From enticing product promotions to essential information, our custom-designed signs enhance the overall shopping experience."
              descriptionSecond =  "With a focus on clarity and aesthetics, our POS signage adds a professional touch to your retail environment, helping you maximize sales and customer engagement.">
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

export default RetailPOS;
