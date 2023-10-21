import { SetStateAction } from 'react';

import { FormData } from '../ContactButton/ContactButton';

export interface FeedbackFormProps {
    data: {
        formData: FormData;
        setFormData: React.Dispatch<SetStateAction<FormData>>
    };
}
