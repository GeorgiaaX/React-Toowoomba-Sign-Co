import React, {useEffect} from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import GallerySlide from '../components/GallerySlide';
import Gallery from '../components/Gallery';
import FixedQuoteBtn from '../components/FixedQuoteBtn'; 




function BuildingShopface() {

  useEffect(() => {
    document.title = "Building Signage Toowoomba | Store front & Shop face signage";
    document.querySelector('meta[name="description"]').setAttribute("content", "Elevate the visibility of your business in Toowoomba with our expertly crafted building signage. From storefront signage to pylons, we can customise signage uniquely to your business.");
}, []);


    const imageUrls = [
      "../images/BuildingShopface/BSImg1.jpg",
      "../images/BuildingShopface/BSImg2.jpg",
      "../images/BuildingShopface/BSImg3.jpg",
      "../images/BuildingShopface/BSImg4.jpg",
      "../images/BuildingShopface/BSImg5.jpg",
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
      "../images/BuildingShopface/BSImg19.jpg",
      "../images/BuildingShopface/BSImg20.jpg",
      "../images/BuildingShopface/BSImg3.jpg",
      "../images/BuildingShopface/BSImg4.jpg",
      "../images/BuildingShopface/BSImg5.jpg",
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
                        title: "Building & Shopface",
                        lastWord: "Signage",
                        subheading: "Building signage for your Toowoomba business",
                    }}
                />
            </section>


            <section>
                  <GallerySlide images = {imageUrls}/>
            </section>
               

            <section>
              <ProductDetail 
              firstPhrase = "Elevate the curb appeal of your business"
              secondPhrase = "Make a lasting impression"
              descriptionFirst= "We specialise in creating eye-catching and professional signage solutions that reflect your brand's identity and capture the attention of passersby and potential customers."
              descriptionSecond = "Whether you're looking to enhance your storefront's visibility, promote your business, or create a unique aesthetic, our customised signs are designed to meet your specific needs."
              buttonLink = "/illuminated-designs"
                buttonTitle = "View our 3D Illuminated Signs">
              </ProductDetail>
            </section>

            <section>
              <Gallery images = {galleryUrls}
              title = "Building Signage Gallery"/>
              </section>
             

            <section>
                <CustomFooter />
            </section>

          

        </div>
      


    )
}

export default BuildingShopface;
