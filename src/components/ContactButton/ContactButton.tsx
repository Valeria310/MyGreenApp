import React, { useState } from 'react';

import contactIcon from 'src/assets/icons/contact-us.svg';

import s from './ContactButton.module.scss';
import FeedbackPopUp from '../FeedbackPopUp';

export const ContactButton = () => {
    const [showtForm, setShowForm] = useState(false);

    return (
        <React.Fragment>
            {!showtForm &&
                <div id='contact-btn' className={s.contactButton} onClick={() => setShowForm(true)}>
                    <img src={contactIcon} alt='contact-us' />
                </div>
            }
            <FeedbackPopUp show={showtForm} onClose={() => setShowForm(false)} />
        </React.Fragment>
    );
};
