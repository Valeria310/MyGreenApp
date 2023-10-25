import { SetStateAction } from 'react';

import { FormData } from '../ContactButton/ContactButton';

export interface FeedbackPopUpProps {
    show: boolean;
    onClose: () => void;
    data: {
        formData: FormData;
        setFormData: React.Dispatch<SetStateAction<FormData>>
    };
}
