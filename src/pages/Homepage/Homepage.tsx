import React from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import MapSection from 'src/components/MapSection/MapSection';
import NavSection from 'src/components/NavSection';
import { ParallaxSection } from 'src/components/Parallax/Parallax';
import RecycleSection from 'src/components/RecycleSection';
import { Ticker } from 'src/components/Ticker/Ticker';
import { useFixedContactButton } from 'src/hooks/useFixedContactButton';

import './Homepage.scss';
import { SuccessPopUp } from '../../components/SuccessPopUp/SuccessPopUp';

export const Homepage = () => {
    const [ref] = useFixedContactButton();

    return (
        <React.Fragment>
            <Header />
            <div className='home-sticky-container'>

                <ParallaxSection />
                <NavSection />
                <RecycleSection expandable={false} />
                <MapSection />
                <ContactButton />
            </div>
            <section ref={ref} className='ticker'>
                <Ticker/>
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </React.Fragment>
    );
};
