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
                    title: 'Elevate your', 
                    lastWord: "Brand",
                    subheading: "Local Expertise, Global Standards: Toowoomba's Premier Sign Makers"
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