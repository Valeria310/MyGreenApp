import { useState } from 'react';

import { FeedbackPopUp } from 'src/components/FeedbackPopUp/FeedbackPopUp';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import NavSection from 'src/components/NavSection';
import { ParallaxSection } from 'src/components/Parallax/Parallax';


const TestPage = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <>
            <Header />
            <ParallaxSection />
            <button type='button' onClick={() => setShowPopUp(true)} style={{ position: 'fixed', top: 106, left: 0, zIndex: 100 }}>Open</button>
            <NavSection />
            <Footer />
            <FeedbackPopUp show={showPopUp} onClose={() => setShowPopUp(false)} />
        </>
    );
};

export default TestPage;
