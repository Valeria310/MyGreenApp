import './Footer.scss';

import { Navigation } from '../Navigation/Navigation';

export const Footer = () => {
    const handleClick = () => {
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    return (<footer className="footer">
        <div className="footer_hill"></div>
        <div className="footer_small_trees"></div>
        <div className="footer_dark_hill"></div>
        <div className="footer_big_trees"></div>
        <div className="container footer-container">
            <a href='#' className="footer-logo" onClick={handleClick}></a>
            <Navigation />
            <span className="socials">info@ecohub.by</span>
        </div>
        <div className="footer_info">© 2023 EcoHub. All Rights Reserved.</div>
        <a href="#" className='up-btn'></a>
    </footer>)
}