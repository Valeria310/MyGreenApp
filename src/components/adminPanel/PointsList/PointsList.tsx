import React from 'react';

import { TablePagination } from '@mui/base/TablePagination';
import {
    Chip,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';

import { markersState } from 'src/constants/MapState';

import classes from './PointsList.module.scss';

const PointsList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const tableData = markersState;

    const chipDisplayed = <Chip label={'Отображается'} variant="outlined" color="success" />;
    const chipHidden = <Chip label={'Не отображается'} variant="outlined" color="error" />;

    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: '450px' }}>
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
                        {(rowsPerPage > 0
                            ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : tableData
                        ).map((row) => (
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
                                        row.phone
                                            ? classes.cell
                                            : classes.cell + ' ' + classes.noPhone
                                    }
                                >
                                    {row.phone ? row.phone : 'Нет данных'}
                                </TableCell>
                                <TableCell className={classes.cell}>
                                    {row.schedule[0] === 'В'
                                        ? row.schedule.slice(14)
                                        : row.schedule}
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
            <TablePagination
                slots={{
                    root: 'div',
                    toolbar: 'div'
                }}
                labelRowsPerPage={'Строк на странице'}
                labelDisplayedRows={function defaultLabelDisplayedRows({ from, to, count }) {
                    return `${from}–${to} из ${count !== -1 ? count : `more than ${to}`}`;
                }}
                className={classes.pagination}
                rowsPerPageOptions={[5, 10, 15, { label: 'Все', value: -1 }]}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                    select: {
                        'aria-label': 'rows per page'
                    },
                    actions: {
                        showFirstButton: true,
                        showLastButton: true
                    }
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default PointsList;
