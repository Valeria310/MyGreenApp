import { useEffect } from 'react';

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import classes from './CreatePoint.module.scss';
import AdminHeader from '../AdminHeader';
import PointForm from '../PointForm';

const CreatePoint = () => {
    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('EcoHub') ? true : false;

    useEffect(() => {
        if (!localStorage.getItem('EcoHub')) {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <AdminHeader />
            <Box className={classes.createPoint}>
                <Box className={classes.createPoint__container}>
                    <Box className={classes.createPoint__inner}>
                        <h1 className={classes.createPoint__title}>Добавление новой точки</h1>
                        <PointForm />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CreatePoint;
