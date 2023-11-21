import { useState, useEffect } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, LinearProgress, Paper, Tab, Tabs } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import classes from './ManagePoints.module.scss';
import AdminHeader from '../AdminHeader';
import PointsList from '../PointsList';
import PointsMap from '../PointsMap';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </Box>
    );
}

const ManagePoints = () => {
    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('EcoHub') ? true : false;

    useEffect(() => {
        if (!localStorage.getItem('EcoHub')) {
            navigate('/login');
        }
    }, []);

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const content = (
        <>
            <AdminHeader />
            <Box className={classes.managePoints}>
                <Box className={classes.managePoints__container}>
                    <h1 className={classes.managePoints__title}>Пункты приема</h1>
                    <Paper sx={{ padding: 2 }}>
                        <Box className={classes.managePoints__tabsBox}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Таблица" {...a11yProps(0)} />
                                <Tab label="Карта" {...a11yProps(1)} />
                            </Tabs>
                            <Link to="create-new-point">
                                <Button variant="contained" startIcon={<AddIcon />}>
                                    Добавить
                                </Button>
                            </Link>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <PointsList />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <PointsMap />
                        </CustomTabPanel>
                    </Paper>
                </Box>
            </Box>
        </>
    );

    return isUserLoggedIn ? content : <LinearProgress />;
};

export default ManagePoints;
