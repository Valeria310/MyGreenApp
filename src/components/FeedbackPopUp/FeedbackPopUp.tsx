import { FC } from 'react';

import { FeedbackPopUpProps } from './FeedbackPopUpProps';
import FeedbackForm from '../FeedbackForm';
import PopUp from '../PopUp';

export const FeedbackPopUp:FC<FeedbackPopUpProps> = ({ show, onClose }) => {
    return (
        <PopUp
            show={show}
            closeHandler={onClose}
            closeOnClickOutside={false}
            showCloseCrossButton={true}
            noBorderRadiusMobile={true}
        >
            <FeedbackForm />
        </PopUp>
    );
};
