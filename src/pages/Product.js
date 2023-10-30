
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
// import ProductDetail from '../components/ProductDetail'; 
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 

function Product() {
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
        </div>
      


    )
}

export default Product;
