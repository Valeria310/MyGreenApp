// import { DevTool } from '@hookform/devtools';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import classes from './Login.module.scss';
import logo from '../../../assets/images/Logo.png';

type FormValues = {
    username: string;
    password: string;
};

const LogIn = () => {
    const form = useForm<FormValues>({
        mode: 'onBlur'
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
    };

    return (
        <div className={classes.logIn}>
            <img className="LogIn__logo" src={logo} alt="" />
            <form className={classes.logIn__form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className={classes.logIn__title}>Войти в панель администрирования</h1>
                <div>
                    <TextField
                        label="Имя"
                        id="username"
                        sx={{ mb: 2, width: '100%' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>
                        }}
                        {...register('username', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            },
                            pattern: {
                                value: /^[A-Za-z0-9_-]+$/,
                                message: 'Некорректное значение'
                            },
                            minLength: {
                                value: 6,
                                message: 'Имя пользователя должно быть не менее 6 символов'
                            },
                            maxLength: {
                                value: 15,
                                message: 'Имя пользователя должно быть не более 15 символов'
                            }
                        })}
                        error={errors.username?.message ? true : false}
                        helperText={errors.username?.message ? errors.username?.message : null}
                    />
                </div>
                <div>
                    <TextField
                        label="Пароль"
                        id="password"
                        sx={{ mb: 2, width: '100%' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>
                        }}
                        type="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/g,
                                message:
                                    'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ (!@#$%^&*)'
                            },
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть не менее 8 символов'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Пароль должен быть не более 20 символов'
                            }
                        })}
                        error={errors.password?.message ? true : false}
                        helperText={errors.password?.message ? errors.password?.message : null}
                    />
                </div>
                <p className={classes.logIn__text}>
                    <a className={classes.logIn__link} href="#">
                        Забыли пароль?
                    </a>{' '}
                    Обратитесь к суперадмину
                </p>
                <Button
                    type="submit"
                    className={classes.logIn__button}
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Войти
                </Button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>
    );
};

export default LogIn;
