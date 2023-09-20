import React from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import MapSection from 'src/components/MapSection/MapSection';
import NavSection from 'src/components/NavSection';
import { ParallaxSection } from 'src/components/Parallax/Parallax';
import RecycleSection from 'src/components/RecycleSection';
import { Ticker } from 'src/components/Ticker/Ticker';

import './Homepage.scss';

export const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <ParallaxSection />
            <NavSection />
            <RecycleSection expandable={false} />
            <MapSection />
            <Ticker />
            <Footer />
            <ContactButton />
        </React.Fragment>
    );
};
