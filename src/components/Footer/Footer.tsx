import React from 'react';

import { Navigation } from '../Navigation/Navigation';

import './Footer.scss';

export const Footer = () => {
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    };
    return (
        <React.Fragment>
            <div className="footer_hill"></div>
            <div className="footer_small_trees"></div>
            <div className="footer_dark_hill"></div>
            <div className="footer_big_trees">
                <div className="footer_big_trees_l"></div>
                <div className="footer_big_trees_r"></div>
            </div>
            <div className="container footer-container">
                <a href='/' className="footer-logo"></a>
                <Navigation />
                <span className="socials">info@ecohub.by</span>
            </div>
            <div className="footer_info">© 2023 EcoHub. All Rights Reserved.</div>
            <div onClick={handleClick} className='up-btn'></div>
        </React.Fragment>
    );
};
