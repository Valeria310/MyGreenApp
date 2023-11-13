import { useFormContext } from 'react-hook-form';

import s from  './FeedbackForm.module.scss';

type PropsType = {
    label: string,
    type?: string,
    id: string,
    placeholder: string,
    validation: any,
    name: string,
    multiline?: boolean,
    className?: string,
}

export const Input = ({ label, type, id, placeholder, validation, name, multiline, className}: PropsType) => {

    function findInputError(errors:any, name:any):any {
        const filtered = Object.keys(errors)
            .filter(key => key.includes(name))
            .reduce((cur, key) => {
                return Object.assign(cur, { error: errors[key] });
            }, {});
        return filtered;
    }

    const isFormInvalid = (err:any) => {
        if (Object.keys(err).length > 0) return true;
        return false;
    };


    const { register,
        formState: { errors }
    } = useFormContext();

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);


    return (
        <div>
            <div className={s.feedbackFormInputLabelWrap}>
                <div>
                    <label htmlFor={id}>{label}</label>
                </div>
                <div>
                    {isInvalid &&
                        (
                            <InputError
                                message={inputError.error.message}
                                key={inputError.error.message}
                            />
                        )
                    }
                </div>

            </div>
            {multiline ? (
                <textarea
                    id={id}
                    // type={type}
                    className=''
                    placeholder={placeholder}
                    {...register(`${name}`, validation)}
                ></textarea>
            ) : (
                <input
                    id={id}
                    type={type}
                    className=''
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            )}
        </div>
    );
};



const InputError = ( message: any) => {
    return <div className={s.feedbackFormError}> {message.message}</div>;

};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 }
};