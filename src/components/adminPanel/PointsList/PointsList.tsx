import React, { useEffect } from "react";

import { TablePagination } from "@mui/base/TablePagination";
import {
	Box,
	Chip,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { markersState } from "src/constants/MapState";

import classes from "./PointsList.module.scss";

type dataAPI = {
	id: number;
	name: string;
	address: string;
	phoneNumber: string;
	website: string;
	location: {
		latitude: number;
		longitude: number;
	};
	workingHours: {
		TUESDAY: {
			openingTime: string;
			closingTime: string;
			lunchStartTime: string;
			lunchEndTime: string;
		};
		WEDNESDAY: {
			openingTime: string;
			closingTime: string;
			lunchStartTime: string;
			lunchEndTime: string;
		};
		THURSDAY: {
			openingTime: string;
			closingTime: string;
			lunchStartTime: string;
			lunchEndTime: string;
		};
		MONDAY: {
			openingTime: string;
			closingTime: string;
			lunchStartTime: string;
			lunchEndTime: string;
		};
		FRIDAY: {
			openingTime: string;
			closingTime: string;
			lunchStartTime: string;
			lunchEndTime: string;
		};
	};
	recyclableTypes: string[];
	displayed: boolean;
};

const PointsList = () => {
	const navigate = useNavigate();

	const [tableData, setTableData] = React.useState<dataAPI[]>([]);
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

	// const tableData = markersState;

	useEffect(() => {
		fetch("https://31.184.254.112:8081/recycling-points/")
			.then((res) => res.json())
			.then((data) => setTableData(data));
	}, []);

	useEffect(() => {
		console.log(tableData);
	}, [tableData]);

	const chipDisplayed = (
		<Chip label={"Отображается"} variant="outlined" color="success" />
	);
	const chipHidden = (
		<Chip label={"Не отображается"} variant="outlined" color="error" />
	);

	const rowHandler = (ref: number) => {
		navigate(`point/${ref}`);
	};

	const trimSchedule = (str: string) => {
		return str[0] === "В" ? str.slice(14) : str;
	};

	return (
		<>
			<TableContainer component={Box} sx={{ maxHeight: "450px" }}>
				<Table stickyHeader>
					<TableHead>
						<TableRow className={classes.row}>
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
							? tableData.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: tableData
						).map((row) => (
							<TableRow
								className={classes.row}
								onClick={() => rowHandler(row.id)}
								key={row.id}
								sx={{
									"&:hover": {
										background: "#EDF7FD",
										cursor: "pointer",
									},
								}}>
								<TableCell className={classes.cell}>{row.name}</TableCell>
								<TableCell
									className={
										row.website
											? classes.cell
											: classes.cell + " " + classes.noData
									}>
									{row.website ? row.website : "Нет данных"}
								</TableCell>
								<TableCell className={classes.cell}>{row.address}</TableCell>
								<TableCell
									className={
										row.phoneNumber
											? classes.cell
											: classes.cell + " " + classes.noData
									}>
									{row.phoneNumber ? row.phoneNumber : "Нет данных"}
								</TableCell>
								<TableCell
									className={
										classes.cell + " " + classes.noData
										// row.schedule
										// 	? classes.cell
										// : classes.cell + " " + classes.noData
									}>
									{"Нет данных"}
									{/* {row.schedule ? trimSchedule(row.schedule) : "Нет данных"} */}
								</TableCell>
								<TableCell className={classes.cell}>
									{row.recyclableTypes.slice().join(", ")}
								</TableCell>
								<TableCell className={classes.cell}>
									{row.location.latitude} - {row.location.longitude}
								</TableCell>
								<TableCell className={classes.cell}>
									{row.displayed ? chipDisplayed : chipHidden}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				slots={{
					root: "div",
					toolbar: "div",
				}}
				labelRowsPerPage={"Строк на странице"}
				labelDisplayedRows={function defaultLabelDisplayedRows({
					from,
					to,
					count,
				}) {
					return `${from}–${to} из ${count !== -1 ? count : `more than ${to}`}`;
				}}
				className={classes.pagination}
				rowsPerPageOptions={[5, 10, 15, { label: "Все", value: -1 }]}
				count={tableData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				slotProps={{
					select: {
						"aria-label": "rows per page",
					},
					actions: {
						showFirstButton: true,
						showLastButton: true,
					},
				}}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</>
	);
};

export default PointsList;
