import { FC, useRef } from 'react';

import crossIcon from 'src/assets/icons/popup-cross.svg';
import { useClickOutside } from 'src/hooks/useClickOutside';

import s from './PopUp.module.scss';
import { PopUpProps } from './PopUpProps';

export const PopUp:FC<PopUpProps> = (props) => {
    const { children, closeFunction, showCloseCrossButton } = props;
    const popUpRef = props.closeOnClickOutside ? useClickOutside(closeFunction) : useRef(null);

    return (
        <div className={s.backScreen}>
            <div className={s.popUp} ref={popUpRef}>
                { showCloseCrossButton &&
                    <div className={s.closeBlock}>
                        <button type='button' className={s.closeButton} onClick={closeFunction}>
                            <img src={crossIcon} alt='x' />
                        </button>
                    </div>
                }
                <div className={`${s.popUpWrapper}${showCloseCrossButton ? ' ' + s.noPaddingTop : ''}`}>
                    { children }
                </div>
            </div>
        </div>
    );
};
