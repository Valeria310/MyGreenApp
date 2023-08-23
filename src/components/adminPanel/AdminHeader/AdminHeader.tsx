import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import classes from './AdminHeader.module.scss';
import logo from '../../../assets/images/logo-admin.png';

const AdminHeader = () => {
    const [role, setRole] = React.useState('admin');

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };
    return (
        <div className={classes.adminHeader}>
            <div className={classes.adminHeader__container}>
                <div className={classes.adminHeader__inner}>
                    <img className={classes.adminHeader__image} src={logo} alt="EcoHub" />
                    <FormControl  variant="standard" sx={{ minWidth: 70 }}>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select className={classes.adminHeader__select}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={role}
                            onChange={handleChange}
                        >
                            <MenuItem value="admin">admin</MenuItem>
                            <MenuItem value="user">user</MenuItem>
                        </Select>
                    </FormControl>
                </div>   
            </div>
        </div>
    );
};

export default AdminHeader;