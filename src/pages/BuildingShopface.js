import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 
import Gallery from '../components/Gallery';



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

      
    return (
        <div>

              <section>
            <Navbar />
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
                  <Gallery images = {imageUrls}/>
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
                <CustomFooter />
            </section>

          

        </div>
      


    )
}

export default BuildingShopface;
