import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import CustomFooter from '../components/CustomFooter';

function Product() {


    useEffect(() => {
        const handleBackButtonEvent = (event) => {
          window.location.reload(true);
        };
    
        window.addEventListener('popstate', handleBackButtonEvent);
    
        return () => {
          window.removeEventListener('popstate', handleBackButtonEvent);
        };
      }, []);

      
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
                        subheading: "illuminated signs",
                    }}
                />
            </section>





                    <section>
                        <CustomFooter />
                    </section>

        </div>
      


    )
}

export default Product;
