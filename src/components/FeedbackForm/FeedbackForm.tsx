import s from  './FeedbackForm.module.scss';

export const FeedbackForm = () => {
    return (
        <form className={s.feedbackForm}>
            <h2 className={s.feedbackFormHeading}>Связаться с нами</h2>
            <p className={s.feedbackFormDescription}>Если у вас есть вопросы или предложения — заполните форму ниже</p>
            <div className={s.feedbackFormField}>
                <label htmlFor='name'>Имя</label>
                <input type='text' id='name' name='name'></input>
            </div>
            <div className={s.feedbackFormField}>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email'></input>
            </div>
            <div className={s.feedbackFormField}>
                <label htmlFor='message'>Сообщение</label>
                <textarea id='message' name='message'></textarea>
            </div>
            <div className={s.feedbackFormPolytics}>
                <input type='checkbox' id="agree" className={s.feedbackFormCheckbox}></input>
                <label htmlFor='agree'><span>отправляя сообщение, вы соглашаетесь&nbsp;</span></label>
                <span>c <a href='#'>политикой конфиденциальности</a></span>
            </div>
            <button type='submit' className={s.feedbackFormSubmitBtn}>Отправить</button>
        </form>
    );
};
