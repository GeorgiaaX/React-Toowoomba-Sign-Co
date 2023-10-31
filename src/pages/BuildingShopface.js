import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function BuildingShopface() {
    const imageUrls = [
      "../images/BuildingShopface/BSImg1.jpg",
      "../images/BuildingShopface/BSImg2.jpg",
      "../images/BuildingShopface/BSImg3.jpg",
      "../images/BuildingShopface/BSImg4.jpg",
      "../images/BuildingShopface/BSImg5.jpg",
      "../images/BuildingShopface/BSImg6.jpg",
      "../images/BuildingShopface/BSImg7.jpg",
      "../images/BuildingShopface/BSImg8.jpg",
      "../images/BuildingShopface/BSImg9.jpg",
      "../images/BuildingShopface/BSImg10.jpg",
    ]

    const galleryUrls = [
      "../images/BuildingShopface/BSImg12.jpg",
      "../images/BuildingShopface/BSImg13.jpg",
      "../images/BuildingShopface/BSImg14.jpg",
      "../images/BuildingShopface/BSImg15.jpg",
      "../images/BuildingShopface/BSImg16.jpg",
      "../images/BuildingShopface/BSImg17.jpg",
      "../images/BuildingShopface/BSImg18.jpg",
      "../images/BuildingShopface/BSImg19.jpg",
      "../images/BuildingShopface/BSImg20.jpg",
      "../images/BuildingShopface/BSImg3.jpg",
      "../images/BuildingShopface/BSImg4.jpg",
      "../images/BuildingShopface/BSImg5.jpg",
      "../images/BuildingShopface/BSImg6.jpg",
      "../images/BuildingShopface/BSImg7.jpg",
      "../images/BuildingShopface/BSImg8.jpg",
      "../images/BuildingShopface/BSImg9.jpg",
      "../images/BuildingShopface/BSImg10.jpg",
      "../images/BuildingShopface/BSImg11.jpg",
      "../images/BuildingShopface/BSImg21.jpg",
      "../images/BuildingShopface/BSImg22.jpg",
      "../images/BuildingShopface/BSImg23.jpg",
      "../images/BuildingShopface/BSImg24.jpg",
      "../images/BuildingShopface/BSImg25.jpg",
      "../images/BuildingShopface/BSImg26.jpg",
      "../images/BuildingShopface/BSImg27.jpg",
      "../images/BuildingShopface/BSImg28.jpg",
      "../images/BuildingShopface/BSImg29.jpg",
      "../images/BuildingShopface/BSImg30.jpg",
      "../images/BuildingShopface/BSImg31.jpg",
      "../images/BuildingShopface/BSImg32.jpg",
      "../images/BuildingShopface/BSImg33.jpg",
      "../images/BuildingShopface/BSImg34.jpg",
    
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
                        title: "Building and",
                        lastWord: "Shopface",
                        subheading: "Fascia Signs / 3D Lettering / Lightboxes / Pylons",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Elevate your business's curb appeal"
              secondPhrase = "Make a lasting first impression"
              descriptionFirst= "We specialize in creating eye-catching and professional signage solutions that reflect your brand's identity and capture the attention of passersby."
              descriptionSecond = "Whether you're looking to enhance your storefront's visibility, promote your business, or create a unique aesthetic, our customized signs are designed to meet your specific needs.">
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

export default BuildingShopface;
