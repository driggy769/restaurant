import React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import './BackToTop.css';

function BackToTop(props) {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }       
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    }

    return <div className='backToTop'>
        {backToTopButton && (
            <button
            onClick={scrollUp}>
                <AiOutlineArrowUp />
            </button>
        )}
        
    </div>
}

export default BackToTop