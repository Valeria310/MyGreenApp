import React, { useEffect, useRef } from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import MapSection from 'src/components/MapSection/MapSection';
import NavSection from 'src/components/NavSection';
import { ParallaxSection } from 'src/components/Parallax/Parallax';
import PrivacyPolicy from 'src/components/PrivacyPolicy';
import RecycleSection from 'src/components/RecycleSection';
import { Ticker } from 'src/components/Ticker/Ticker';
import { useFixedContactButton } from 'src/hooks/useFixedContactButton';

import './Homepage.scss';
import { SuccessPopUp } from '../../components/SuccessPopUp/SuccessPopUp';

export const Homepage = () => {
    useEffect(() => {
        const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
        scrollToElement(elementId);
    }, [location]);

    const scrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const [ref] = useFixedContactButton();

    return (
        <PrivacyPolicy />

    // <React.Fragment>
    //     <Header />
    //     <div className='home-sticky-container'>
    //         <ParallaxSection />
    //         <NavSection />
    //         <RecycleSection expandable={false} />
    //         <MapSection />
    //         <ContactButton />
    //     </div>
    //     <section ref={ref} className="ticker">
    //         <Ticker />
    //     </section>
    //     <footer className="footer">
    //         <Footer />
    //     </footer>
    // </React.Fragment>
    );
};
