import { FC } from 'react';

import s from './SuccessMessage.module.scss';
import { SuccessMessageProps } from './SuccessMessageProps';
import happySmile from '../../assets/icons/happy-smile.svg';

export const SuccessMessage:FC<SuccessMessageProps> = ({ closeFunction }) => {
    return (
        <div className={s.messageWrapper}>
            <div className={s.message}>
                <div className={s.messageSmile}>
                    <img src={happySmile} alt=':)' />
                </div>
                <h2 className={s.messageHeading}>Спасибо</h2>
                <p className={s.messageText}>
                    Мы получили ваше сообщение и свяжемся с вами в ближайшее время
                </p>
            </div>
            <div className={s.actionButtons}>
                <button
                    type='button'
                    className={`${s.actionButton} ${s.primaryButton}`}
                    onClick={closeFunction}
                >
                    Ок
                </button>
            </div>
        </div>
    );
};
