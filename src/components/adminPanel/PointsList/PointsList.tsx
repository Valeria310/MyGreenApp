import React from 'react';

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';
import Chip from '@mui/material/Chip';

import { markersState } from 'src/constants/MapState';

import classes from './PointsList.module.scss';

const PointsList = () => {
    const tableData = markersState;
    console.log('tableData: ', tableData);

    const chipDisplayed = <Chip label={'Отображается'} variant="outlined" color="success" />;
    const chipHidden = <Chip label={'Не отображается'} variant="outlined" color="error" />;

    return (
        <TableContainer component={Paper} sx={{ maxHeight: '480px' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell}>Организация</TableCell>
                        <TableCell className={classes.cell}>Сайт</TableCell>
                        <TableCell className={classes.cell}>Адрес</TableCell>
                        <TableCell className={classes.cell}>Телефон</TableCell>
                        <TableCell className={classes.cell}>Часы работы</TableCell>
                        <TableCell className={classes.cell}>Виды вторсырья</TableCell>
                        <TableCell className={classes.cell}>Координаты </TableCell>
                        <TableCell className={classes.cell}>Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            sx={{
                                '&:hover': { background: 'lightblue', cursor: 'pointer' }
                            }}
                            key={row.id}
                            onClick={() => console.log('Clicked', row.title)}
                        >
                            <TableCell className={classes.cell}>{row.title}</TableCell>
                            <TableCell className={classes.cell}>{row.website}</TableCell>
                            <TableCell className={classes.cell}>{row.address}</TableCell>
                            <TableCell
                                className={
                                    row.phone ? classes.cell : classes.cell + ' ' + classes.noPhone
                                }
                            >
                                {row.phone ? row.phone : 'Нет данных'}
                            </TableCell>
                            <TableCell className={classes.cell}>
                                {row.schedule[0] === 'В' ? row.schedule.slice(14) : row.schedule}
                            </TableCell>
                            <TableCell className={classes.cell}>
                                {row.wasteTypes.slice().join(', ')}
                            </TableCell>
                            <TableCell className={classes.cell}>
                                {row.latitude} - {row.longitude}
                            </TableCell>
                            <TableCell className={classes.cell}>
                                {row.display ? chipDisplayed : chipHidden}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PointsList;
