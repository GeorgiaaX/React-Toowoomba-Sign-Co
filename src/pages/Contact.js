import React from 'react';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import CustomFooter from '../components/CustomFooter';
import ContactDetails from '../components/ContactDetails';
import Form from '../components/Form';

export default function Contact() {

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
                        title: "Contact",
                        lastWord: "Us",
                        subheading: "Get in Touch for Expert Signage Advice",
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