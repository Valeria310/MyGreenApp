import { useNavigate } from 'react-router-dom';

import s from './ErrorMessage.module.scss';
import sadSmile from '../../assets/icons/sad-smile.svg';

const ErrorMessage = () => {
    const navigate = useNavigate();

    return (
        <div className={s.messageWrapper}>
            <div className={s.message}>
                <div className={s.messageSmile}>
                    <img src={sadSmile} alt=':(' />
                </div>
                <h2 className={s.messageHeading}>Ошибка</h2>
                <p className={s.messageText}>
                    К сожалению, мы не можем обработать ваш запрос в настоящее время. Мы уже работаем над устранением технических проблем. Пожалуйста, свяжитесь с нами по e-mail <span className={s.email}>info@ecohub.by</span>
                </p>
            </div>
            <div className={s.actionButtons}>
                <button
                    type='button'
                    className={`${s.actionButton} ${s.primaryButton}`}
                    onClick={() => navigator.clipboard.writeText('info@ecohub.by')}
                >
                    Скопировать e-mail
                </button>
                <button
                    type='button'
                    className={`${s.actionButton} ${s.secondaryButton}`}
                    onClick={() => navigate('/')}
                >
                    На главную
                </button>
            </div>
        </div>
    );
};

export default ErrorMessage;
