import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

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
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ManagePoints = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <AdminHeader />

            <div className={classes.managePoints}>
                <div className={classes.managePoints__container}>
                    <h1 className={classes.managePoints__title}>Пункты приема</h1>
                    <div className={classes.managePoints__tabsBox}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Таблица" {...a11yProps(0)} />
                            <Tab label="Карта" {...a11yProps(1)} />
                        </Tabs>
                        <Button variant="contained" startIcon={<AddIcon />}>
                            Добавить
                        </Button>
                    </div>
                    <CustomTabPanel value={value} index={0}>
                        <PointsList />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <PointsMap />
                    </CustomTabPanel>
                </div>
            </div>
        </>
    );
};

export default ManagePoints;
