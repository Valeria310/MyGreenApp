import './Footer.scss';

import { Navigation } from '../Navigation/Navigation';

export const Footer = () => (
    <footer className="footer">
        <div className="footer_hill"></div>
        <div className="footer_small_trees"></div>
        <div className="footer_dark_hill"></div>
        <div className="footer_big_trees"></div>
        <div className="container footer-container">
            <a href='#about' className="footer-logo"></a>
            <Navigation />
            <span className="socials">mygreenfeedback@gmail.com</span>
        </div>
        <a href="#about" className='up-btn'></a>
    </footer>
)