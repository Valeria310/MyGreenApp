import React from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import PrivacyPolicy from 'src/components/PrivacyPolicy';
import { useFixedContactButton } from 'src/hooks/useFixedContactButton';

import './PrivacyPolicyPage.scss';

export const PrivacyPolicyPage = () => {
    const [ref] = useFixedContactButton();

    return (
        <React.Fragment>
            <Header />
            <div className="privacy-sticky-container">
                <PrivacyPolicy />
                <ContactButton />
            </div>
            <footer ref={ref} className="footer">
                <Footer />
            </footer>
        </React.Fragment>
    );
};
