import { useState } from 'react';

import contactIcon from 'src/assets/icons/contact-us.svg';

import s from './ContactButton.module.scss';
import ErrorPopUp from '../ErrorPopUp';
import FeedbackPopUp from '../FeedbackPopUp';
import SuccessPopUp from '../SuccessPopUp';


// export interface FormData {
//     name: string;
//     email: string;
//     messageType: 'Отзыв' | 'Вопрос' | 'Предложение' | 'Проблема/Жалоба';
//     message: string;
// }

export const ContactButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
    const [showErrorPopUp, setShowErrorPopUp] = useState(false);


    const showResultPopUpHandler = (result: string) => {

        if (result === 'success') {
            setShowForm(false);
            setShowSuccessPopUp(true);
        } else if (result === 'error') {
            setShowForm(false);
            setShowErrorPopUp(true);
        }

    };

    return (
        <div id="contact-us" className={s.stickyContainer}>
            {!showForm &&
                <div className={s.contactButton} onClick={() => setShowForm(true)}>
                    <img src={contactIcon} alt="contact-us"/>
                </div>
            }

            <FeedbackPopUp showResultPopUp={showResultPopUpHandler} show={showForm} onClose={() => setShowForm(false)}/>
            {showErrorPopUp && <ErrorPopUp show={showErrorPopUp} onClose={() => setShowErrorPopUp(false)}/>}
            {showSuccessPopUp && <SuccessPopUp show={showSuccessPopUp} onClose={() => setShowSuccessPopUp(false)}/>}

        </div>
    );
};
