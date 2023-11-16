import { SetStateAction } from 'react';

import { FormData } from '../ContactButton/ContactButton';

export interface FeedbackFormProps {
    showResultPopUp:(result:string) => void;
    data: {
        formData: FormData;
        setFormData: React.Dispatch<SetStateAction<FormData>>
    };
}
