import React from 'react';

import ContactButton from 'src/components/ContactButton';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import RecycleSection from 'src/components/RecycleSection';
import { useFixedContactButton } from 'src/hooks/useFixedContactButton';

import './RecyclePage.scss';

export const RecyclePage = () => {
    const [ref] = useFixedContactButton();

    return (
        <React.Fragment>
            <Header />
            <div className='recycle-sticky-container'>
                <RecycleSection expandable={true} />
                <ContactButton />
            </div>
            <footer ref={ref} className="footer">
                <Footer />
            </footer>
        </React.Fragment>
    );
};
