import {useFormContext} from "react-hook-form";

type PropsType = {
    label: string,
    type: string,
    id: string,
    placeholder: string
}

export const Input = ({ label, type, id, placeholder }: PropsType) => {

    function findInputError(errors:any, name:any) {
        const filtered = Object.keys(errors)
            .filter(key => key.includes(name))
            .reduce((cur, key) => {
                return Object.assign(cur, { error: errors[key] })
            }, {})
        return filtered
    }

    const isFormInvalid = (err:any) => {
        if (Object.keys(err).length > 0) return true
        return false
    }


    const { register,
        formState: { errors },
    } = useFormContext()

    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)

    return (
        <div>
            <div>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            {isInvalid && (
                <InputError
                    message={inputError.error.message}
                    key={inputError.error.message}
                />
            )}
            <input
                id={id}
                type={type}
                className=""
                placeholder={placeholder}
                {...register(label, {
                    required: {
                        value: true,
                        message: 'required',
                    },
                })}
            />
        </div>
    )
}

type MessageType = {
    message: string,

}

const InputError = ({ message }: MessageType) => {
    return (

            {message}

    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}