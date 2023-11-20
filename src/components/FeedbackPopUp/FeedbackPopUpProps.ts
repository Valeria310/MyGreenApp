import { SetStateAction } from 'react';

import { FormData } from '../ContactButton/ContactButton';

export interface FeedbackPopUpProps {
    showResultPopUp:(result:string) => void;
    show: boolean;
    onClose: () => void;
    // data: {
    //     formData: FormData;
    //     setFormData: React.Dispatch<SetStateAction<FormData>>
    // };
}
