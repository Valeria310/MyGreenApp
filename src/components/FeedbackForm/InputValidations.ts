/*-------------------------------------------------------------------
|  🐼 Input Validators
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
    name: 'name',
    label: 'Имя',
    type: 'text',
    id: 'name',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        maxLength: {
            value: 30,
            message: '30 символов максимум'
        }
    }
};

export const desc_validation = {
    name: 'messageContent',
    label: 'Сообщение',
    multiline: true,
    id: 'description',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        maxLength: {
            value: 500,
            message: '500 символов максимум'
        }
    }
};

export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        minLength: {
            value: 6,
            message: 'min 6 characters'
        }
    }
};

export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
};

export const email_validation = {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    id: 'email',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введен некорректный e-mail'
        }
    }
};
