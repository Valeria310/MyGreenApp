import { useState } from 'react';

import { Alert, Box, Button, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.scss';
import logo from '../../../assets/images/Logo.png';

type FormValues = {
    username: string;
    password: string;
};

interface UserDataToServer {
    usernameOrEmail: string;
    password: string;
    rememberMe: true;
}
interface UserDataFromServer {
    accessToken: string;
    email: string | null;
    refreshToken: string;
    role: string;
    username: string;
}

const LogIn = () => {
    const [authError, setAuthError] = useState('');

    const navigate = useNavigate();

    const form = useForm<FormValues>({
        mode: 'onBlur'
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    async function authorization(user: UserDataToServer) {
        try {
            const response = await axios.post(
                'https://31.184.254.112:8081/auth/login',
                JSON.stringify(user),
                {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            );

            const dataFromServer: UserDataFromServer = response.data;
            localStorage.setItem('EcoHub', JSON.stringify(dataFromServer));

            navigate('/admin');
        } catch (err) {
            console.log('err: ', err);
            if (axios.isAxiosError(err)) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else if (err.response?.status === 400) {
                    console.error(err.response.data.error);
                    setAuthError(err.response.data.error);
                } else if (err.response?.status === 401) {
                    console.error(err.response.data.error);
                    setAuthError(err.response.data.error);
                } else if (err.response?.status === 404) {
                    console.error(err.response.data.error);
                    setAuthError(err.response.data.error);
                } else {
                    console.error(err.response.data.error);
                    setAuthError(err.response.data.error);
                }
            }
        }
    }

    function clearLoginFormFields(object: UserDataToServer) {
        let clearedObject = object;
        clearedObject = {
            usernameOrEmail: '',
            password: '',
            rememberMe: true
        };
        return clearedObject;
    }

    const onSubmit = (data: FormValues) => {
        const dataToServer: UserDataToServer = {
            usernameOrEmail: data.username,
            password: data.password,
            rememberMe: true
        };

        authorization(dataToServer);

        clearLoginFormFields(dataToServer);
    };

    const content = (
        <Box className={classes.logIn}>
            <img className="LogIn__logo" src={logo} alt="" />
            <form className={classes.logIn__form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className={classes.logIn__title}>Войти в панель администрирования</h1>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
                <p className={classes.logIn__text}>
                    {/* <a className={classes.logIn__link} href="#"> */}
                    Забыли пароль?&nbsp;
                    {/* </a>{' '} */}
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
        </Box>
    );

    const errorAlert = (message: string) => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Alert severity="error">{message}</Alert>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ margin: '16px auto' }}
                    onClick={() => {
                        setAuthError('');
                        navigate('/login');
                    }}
                >
                    Back
                </Button>
            </Box>
        );
    };

    return authError ? errorAlert(authError) : content;
};

export default LogIn;
