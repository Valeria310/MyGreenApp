import { useState } from 'react';

import contactIcon from 'src/assets/icons/contact-us.svg';

import s from './ContactButton.module.scss';
import FeedbackPopUp from '../FeedbackPopUp';

export interface FormData {
    name: string;
    email: string;
    messageType: 'Отзыв' | 'Вопрос' | 'Предложение' | 'Проблема/Жалоба';
    message: string;
}

export const ContactButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        messageType: 'Отзыв',
        message: ''
    });

    return (
        <div id='contact-us' className={s.stickyContainer}>
            {!showForm &&
                <div className={s.contactButton} onClick={() => setShowForm(true)}>
                    <img src={contactIcon} alt='contact-us' />
                </div>
            }
            <FeedbackPopUp show={showForm} onClose={() => setShowForm(false)} data={{ formData, setFormData }} />
        </div>
    );
};
