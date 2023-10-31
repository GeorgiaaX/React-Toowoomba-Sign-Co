import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';
import ProductDetail from '../components/ProductDetail'; 



function BuildingShopface() {
      
    return (
        <div>

              <section>
            <Navbar />
        </section>


        <section>
                <Header
                    isGenericPage={true} 
                    isContactPage={false} 
                    heading={{ 
                        title: "Building and",
                        lastWord: "Shopface",
                        subheading: "Fascia Signs / 3D Lettering / Lightboxes / Pylons",
                    }}
                />
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
