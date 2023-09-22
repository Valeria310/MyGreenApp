import { Box } from '@mui/material';

import classes from './CreatePoint.module.scss';
import AdminHeader from '../AdminHeader';
import PointForm from '../PointForm';

type FormValues = {
    title: string;
    website: string;
    address: string;
    phone: string;
    shedule: string;
    coordinates: string;
    wasteTitle: string[];
    display: boolean;
};

const CreatePoint = () => {
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
