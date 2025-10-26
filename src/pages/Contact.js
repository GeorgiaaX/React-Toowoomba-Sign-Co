import React, {useEffect} from 'react';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import CustomFooter from '../components/CustomFooter';
import ContactDetails from '../components/ContactDetails';
import Form from '../components/Form';

export default function Contact() {

    useEffect(() => {
        document.title = "Contact Toowoomba Sign Co | Signs Toowoomba";
        document.querySelector('meta[name="description"]').setAttribute("content", "Get in touch with Toowoomba Sign Co today. Expert signage solutions in Toowoomba – call us or request a free signage quote online.");
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
                        subheading: "Looking for custom signs in Toowoomba? Our expert signwriters are here to help. Get in touch for a free quote or to discuss your signage project.",
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