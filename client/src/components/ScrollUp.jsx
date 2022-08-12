import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";

const GoTop = styled.div`
    .container {
        width: 500px;
        text-align: center;
    }

    .goUp {
        position: fixed;
        bottom: 6vh;
        right: 5vw;
        font-size: 5vh;
        background: #F64F00;
        color: white;
        cursor: pointer;
        border-radius: 20%;
        border: none;
    }

    .goUp:hover {
        box-shadow: 0 10px 20px #F64F00;
    }
`

function ScrollUp() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
    <GoTop>
        <div className="container">
            {showButton && (
                <button onClick={scrollToTop} className="goUp">Top</button>
            )}
        </div>
    </GoTop>
    )
}

export default ScrollUp