import { FC } from 'react';

import { ErrorPopUpProps } from './ErrorPopUpProps';
import ErrorMessage from '../ErrorMessage';
import PopUp from '../PopUp';

export const ErrorPopUp:FC<ErrorPopUpProps> = ({ show, onClose }) => {
    return (
        <PopUp
            show={show}
            closeHandler={onClose}
            closeOnClickOutside={false}
            showCloseCrossButton={false}
            largePadding={true}
        >
            <ErrorMessage />
        </PopUp>
    );
};
