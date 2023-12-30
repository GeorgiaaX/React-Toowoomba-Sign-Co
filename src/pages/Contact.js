import React, {useEffect} from 'react';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import CustomFooter from '../components/CustomFooter';
import ContactDetails from '../components/ContactDetails';
import Form from '../components/Form';

export default function Contact() {

    useEffect(() => {
        document.title = "Contact Toowoomba Sign Co | Your local sign experts in Toowoomba & Darling Downs";
        document.querySelector('meta[name="description"]').setAttribute("content", "Get in touch with our expert sign writers who can help your business stand out with quality signage for your building, office, retail store or vehicle. Contact us today - 0413 733 947.");
    }, []);


    const [, forceUpdate] = React.useState();

    React.useEffect(() => {
    forceUpdate({});
    }, []);
    
    const contactFormRef = React.createRef();

    return (
        <div>
            <header>
                <NavBar />
            </header>
            
            <section>
                <Header
                    isGenericPage={false} 
                    isContactPage={true} 
                    heading={{ 
                        title: "Contact Toowoomba Sign",
                        lastWord: "Co",
                        subheading: "Get in touch for expert signage advice for your business in Toowoomba & Darling Downs",
                    }}
                    contactFormRef={contactFormRef}
                />
            </section>

            <section>
                <ContactDetails />
            </section>

            <section>
                <Form ref={contactFormRef} />
            </section>

            <section>
                <CustomFooter />
            </section>
        </div>
    );
}