import React from 'react';

import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';

import classes from './AdminHeader.module.scss';
import logo from '../../../assets/images/logo-admin.png';

const AdminHeader = () => {
    const [role, setRole] = React.useState('admin');

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };
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
                            <MenuItem value="admin">admin</MenuItem>
                            <MenuItem value="user">user</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminHeader;
