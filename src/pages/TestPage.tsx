import { useState } from 'react';

import ErrorPopUp from 'src/components/ErrorPopUp';
import FeedbackPopUp from 'src/components/FeedbackPopUp';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import NavSection from 'src/components/NavSection';
import { ParallaxSection } from 'src/components/Parallax/Parallax';
import SuccessPopUp from 'src/components/SuccessPopUp';


const TestPage = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <>
            <Header />
            <ParallaxSection />
            <button type='button' onClick={() => setShowPopUp(true)} style={{ position: 'fixed', top: 106, left: 0, zIndex: 100 }}>Open</button>
            <NavSection />
            <Footer />
            <SuccessPopUp show={showPopUp} onClose={() => setShowPopUp(false)} />
        </>
    );
};

export default TestPage;
