import React from 'react';

function ScrollDownButton({ targetRef }) {
    const OFFSET_VALUE = 100;

    const scrollToRef = () => {
        if (targetRef.current) {
            const offsetTop = targetRef.current.offsetTop;
            window.scrollTo({
                top: offsetTop - OFFSET_VALUE, 
                behavior: 'smooth'
            });
        }
    }

    return (
        <button className = "btn btn-primary modalButton" onClick={scrollToRef}>
            Get a Quote
        </button>
    );
}

export default ScrollDownButton;