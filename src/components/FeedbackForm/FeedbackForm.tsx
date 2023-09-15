import { useState, useEffect } from 'react';

import s from  './FeedbackForm.module.scss';

export const FeedbackForm = () => {
    // Form state control
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // Message symbols count
    const [count, setCount] = useState(0);
    // Checkbox control
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        setCount(formData.message.length);
    }, [formData.message]);

    const setFormField = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return (
        <form className={s.feedbackForm}>
            <h2 className={s.feedbackFormHeading}>Связаться с нами</h2>
            <p className={s.feedbackFormDescription}>Если у вас есть вопросы или предложения — заполните форму ниже</p>
            <div className={s.feedbackFormField}>
                <label htmlFor='name'>Имя</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={(e) => setFormField(e.target.name, e.target.value)}
                />
            </div>
            <div className={s.feedbackFormField}>
                <label htmlFor='email'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={(e) => setFormField(e.target.name, e.target.value)}
                />
            </div>
            <div className={s.feedbackFormField}>
                <label htmlFor='message'>Сообщение</label>
                <textarea
                    id='message'
                    name='message'
                    maxLength={300}
                    value={formData.message}
                    onChange={(e) => setFormField(e.target.name, e.target.value)}
                />
                <div className={s.messageCounter}>{count}/300</div>
            </div>
            <div className={s.feedbackFormPolytics}>
                <div className={`${s.feedbackFormCheckbox}${agreed ? ' ' + s.selected : ''}`} onClick={() => setAgreed(!agreed)}/>
                <input type='checkbox' id="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
                <span>
                    <label onClick={() => setAgreed(!agreed)}>отправляя сообщение, вы соглашаетесь&nbsp;</label>
                    <span>c <a href='#'>политикой конфиденциальности</a></span>
                </span>
            </div>
            <button type='submit' className={s.feedbackFormSubmitBtn} disabled={!agreed}>Отправить</button>
        </form>
    );
};
