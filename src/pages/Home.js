import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CustomFooter from '../components/CustomFooter'
import ProductsSlide from '../components/ProductsSlide'
import ProductsServices from '../components/ProductsServices'
import FixedQuoteBtn from '../components/FixedQuoteBtn'
import About from '../components/About'





export default function Home() {
    return (
        <div> 

            <header>
                <Navbar />
            </header>

            <section>
               <FixedQuoteBtn />
            </section>
            <section>
                <Hero  isHomePage= {true} heading= {{ 
                    title: 'Elevate your brand in the Toowoomba & Darling Downs', 
                    // lastWord: "Brand",
                    body: "Want your business to stand out with eye-catching, bold signage? Toowoomba Sign Co offer the perfect blend of local expertise and global standards to deliver you with a range of high-quality signs to increase your visibility within the Toowoomba and Darling Downs region."
                    }} />  
            </section>

            <section>
                <ProductsSlide />
            </section>

            <section>
                <About />
            </section>

            <section>
                <ProductsServices />
            </section>

            <section>
                <CustomFooter />
            </section>

        </div>
    )
}