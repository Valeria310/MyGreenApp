import React from 'react';
import './Footer.scss';

import { Navigation } from '../Navigation/Navigation';

export const Footer = () => (
    <footer className="footer">
        <div className="container footer-container">
            <a href='#' className="footer-logo"></a>
            <Navigation />
            <span className="socials">mygreen@mygreen.by</span>
        </div>
        <a href="#" className='up-btn'></a>
    </footer>
)