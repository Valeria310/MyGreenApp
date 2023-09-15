import { FC } from 'react';

import { SuccessPopUpProps } from './SuccessPopUpProps';
import PopUp from '../PopUp';
import SuccessMessage from '../SuccessMessage';

export const SuccessPopUp:FC<SuccessPopUpProps> = ({ show, onClose }) => {
    return (
        <PopUp
            show={show}
            closeHandler={onClose}
            closeOnClickOutside={false}
            showCloseCrossButton={false}
            largePadding={true}
        >
            <SuccessMessage closeFunction={onClose} />
        </PopUp>
    );
};
