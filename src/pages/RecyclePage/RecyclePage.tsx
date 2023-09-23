import React from 'react';

// import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import RecycleSection from 'src/components/RecycleSection';

import './RecyclePage.scss';

export const RecyclePage = () => {
    return (
        <React.Fragment>
            <Header />
            <RecycleSection expandable={true} />
            <Footer />
            {/* <ContactButton /> */}
        </React.Fragment>
    );
};
