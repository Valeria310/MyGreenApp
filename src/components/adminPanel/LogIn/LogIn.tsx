import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import classes from './Login.module.scss';
import logo from '../../../assets/images/Logo.png';

const LogIn = () => {
    return (
        <div className={classes.logIn}>
            <img className="LogIn__logo" src={logo} alt="" />
            <form className={classes.logIn__form}>
                <h1 className={classes.logIn__title}>Войти в панель администрирования</h1>
                <TextField
                    label="Имя"
                    id="name"
                    sx={{ mb: 2, width: '100%' }}
                    InputProps={{ startAdornment: <InputAdornment position="start"></InputAdornment>
                    }}
                />
                <TextField
                    label="Пароль"
                    id="password"
                    sx={{ mb: 2, width: '100%' }}
                    InputProps={{ startAdornment: <InputAdornment position="start"></InputAdornment>
                    }}
                    type="password"
                />
                <p className={classes.logIn__text}><a className={classes.logIn__link} href="#">Забыли пароль?</a> Обратитесь к суперадмину</p>
                <Button className={classes.logIn__button} variant="contained" size="large" sx={{ mt: 2 }}>Войти</Button>
            </form>
        </div>
    );
};

export default LogIn;
