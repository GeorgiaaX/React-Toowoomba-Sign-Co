import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
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

      

    const { productId } = useParams();
    const productData = products[productId];

    if (!productData) {
        return <div>Product not found</div>;
    }

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
                        title: productData.name,
                        lastWord: "",
                        subheading: productData.services,
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
