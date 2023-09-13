import { FC, useRef } from 'react';

import crossIcon from 'src/assets/icons/popup-cross.svg';
import { useClickOutside } from 'src/hooks/useClickOutside';

import s from './PopUp.module.scss';
import { PopUpProps } from './PopUpProps';

export const PopUp:FC<PopUpProps> = ({ children, closeFunction, closeOnClickOutside, showCloseCrossButton }) => {
    const popUpRef = closeOnClickOutside ? useClickOutside(closeFunction) : useRef(null);

    return (
        <div className={s.backScreen}>
            <div className={s.popUpWrapper} ref={popUpRef}>
                { showCloseCrossButton &&
                    <div className={s.closeBlock}>
                        <button type='button' className={s.closeButton} onClick={closeFunction}>
                            <img src={crossIcon} alt='x' />
                        </button>
                    </div>
                }
                { children }
            </div>
        </div>
    );
};
