import React from 'react';

import { Box, Button, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import classes from './AdminHeader.module.scss';
import logo from '../../../assets/images/logo-admin.png';
import { baseURL } from '../../../common/common.api';

const AdminHeader = () => {
    const navigate = useNavigate();

    const [role, setRole] = React.useState('admin');

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };

    const userName = JSON.parse(localStorage.getItem('EcoHub') || '{}')?.username;

    async function logOut() {
        try {
            const response = await axios.post(baseURL + 'auth/logout');
            navigate('/login');
            localStorage.removeItem('EcoHub');
        } catch (err) {
            console.log('err: ', err);
        }
    }

    return (
        <Box className={classes.adminHeader}>
            <Box className={classes.adminHeader__container}>
                <Box className={classes.adminHeader__inner}>
                    <Link to="/">
                        <img className={classes.adminHeader__image} src={logo} alt="EcoHub" />
                    </Link>
                    <FormControl variant="standard" sx={{ minWidth: 70 }}>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select
                            className={classes.adminHeader__select}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={role}
                            onChange={handleChange}
                        >
                            <MenuItem value="admin">{userName}</MenuItem>
                            <MenuItem value="user" onClick={logOut}>
                                <Button sx={{ p: 0, m: 0, justifyContent: 'flex-start' }}>
                                    выйти
                                </Button>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminHeader;
