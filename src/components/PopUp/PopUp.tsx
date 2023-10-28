import { FC, useRef } from 'react';

import crossIcon from 'src/assets/icons/popup-cross.svg';
import { useClickOutside } from 'src/hooks/useClickOutside';

import s from './PopUp.module.scss';
import { PopUpProps } from './PopUpProps';

export const PopUp:FC<PopUpProps> = (props) => {
    const { children, closeHandler, showCloseCrossButton } = props;
    const popUpRef = props.closeOnClickOutside ? useClickOutside(closeHandler) : useRef(null);

    if (!props.show) {
        // document.body.style.removeProperty('overflow-y');
        document.body.removeAttribute('style');
        return null;
    }

    document.body.style.overflowY = 'hidden';

    return (
        <div className={s.backScreen} onScroll={(e) => e.preventDefault()}>
            <div className={`${s.popUp}${props.noBorderRadiusMobile ? ' ' + s.noBorderRadiusMobile : ''}`} ref={popUpRef}>
                <div className={`${s.popUpWrapper}${props.largePadding ? ' ' + s.largePadding : ''}`}>
                    { showCloseCrossButton &&
                        <div className={s.closeBlock}>
                            <button type='button' className={s.closeButton} onClick={closeHandler}> 
                                <img src={crossIcon} alt='x' />
                            </button>
                        </div>
                    }
                    { children }
                </div>
            </div>
        </div>
    );
};
