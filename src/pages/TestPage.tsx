import { useState } from 'react';

import FeedbackForm from 'src/components/FeedbackForm';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { ParallaxSection } from 'src/components/Parallax/Parallax';
import PopUp from 'src/components/PopUp';


const TestPage = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <>
            <Header />
            <ParallaxSection />
            <button type='button' onClick={() => setShowPopUp(true)} style={{ position: 'absolute', top: 106, left: 0, zIndex: 100 }}>Open</button>
            <Footer />
            {showPopUp &&
                <PopUp closeFunction={() => setShowPopUp(false)} closeOnClickOutside={true} showCloseCrossButton={true}>
                    <FeedbackForm />
                </PopUp>
            }
        </>
    );
};

export default TestPage;
