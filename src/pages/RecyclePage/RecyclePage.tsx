import React from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import RecycleSection from 'src/components/RecycleSection';
import { useHideContactButton } from 'src/hooks/useHideContactButton';

import './RecyclePage.scss';

export const RecyclePage = () => {
    const [ref] = useHideContactButton();

    return (
        <React.Fragment>
            <Header />
            <RecycleSection expandable={true} />
            <footer ref={ref} className="footer">
                <Footer />
            </footer>
            <ContactButton />
        </React.Fragment>
    );
};
