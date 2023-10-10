import * as React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Chip } from '@mui/material';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link, useParams } from 'react-router-dom';

import classes from './Point.module.scss';
import pointIcon from '../../../assets/images/point_icon.svg';
import { markersState } from '../../../constants/MapState';
import s from '../../MapSection/MapSection.module.scss';
import AdminHeader from '../AdminHeader';

type PointId = {
    id: string;
};

const Point: React.FC = () => {
    const { id } = useParams<PointId>();

    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    const pointData = markersState[Number(id) - 1];
    pointData.display = true;

    return (
        <>
            <AdminHeader />
            <Box className={classes.point}>
                <Box className={classes.point__container}>
                    <Link className={classes.point__link} to="/admin">
                        <ChevronLeft />
                        Назад
                    </Link>
                    <Box className={classes.point__titleBox}>
                        <h1 className={classes.point__title}>{pointData.title}</h1>
                        <Link className={classes.point__titleLink} to="edit">
                            <EditIcon sx={{ fontSize: 48 }} />
                        </Link>
                    </Box>
                    <Box className={classes.point__table}>
                        <Box className={classes.point__tableRow}>
                            <Box className={classes.point__tableCol}>
                                Ссылка на сайт организации
                            </Box>
                            <Box className={classes.point__tableCol}>
                                <a
                                    target="/blank"
                                    className={classes.point__websiteLink}
                                    href={pointData.website}
                                >
                                    {pointData.website}
                                </a>
                            </Box>
                        </Box>
                        <Box className={classes.point__tableRow}>
                            <Box className={classes.point__tableCol}>Адрес</Box>
                            <Box className={classes.point__tableCol}>{pointData.address}</Box>
                        </Box>
                        <Box className={classes.point__tableRow}>
                            <Box className={classes.point__tableCol}>Время работы</Box>
                            <Box className={classes.point__tableCol}>
                                {pointData.schedule[0] === 'В'
                                    ? pointData.schedule.slice(14)
                                    : pointData.schedule}
                            </Box>
                        </Box>
                        <Box
                            className={
                                classes.point__tableRow + ' ' + classes.point__tableRow_withChip
                            }
                        >
                            <Box className={classes.point__tableCol}>Виды вторсырья</Box>
                            <Box className={classes.point__tableCol}>
                                {pointData.wasteTypes.map((item) => {
                                    return (
                                        <Chip
                                            key={item}
                                            className={classes.point__typeChip}
                                            label={item[0].toUpperCase() + item.slice(1)}
                                            variant="outlined"
                                            color="primary"
                                        />
                                    );
                                })}
                            </Box>
                        </Box>
                        <Box
                            className={
                                classes.point__tableRow + ' ' + classes.point__tableRow_withChip
                            }
                        >
                            <Box className={classes.point__tableCol}>Статус</Box>
                            <Box className={classes.point__tableCol}>
                                <Chip
                                    className={classes.point__typeChip}
                                    label={
                                        pointData.display
                                            ? 'Отображать на карте'
                                            : 'Не отображать на карте'
                                    }
                                    variant="outlined"
                                    color={pointData.display ? 'success' : 'error'}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <MapContainer
                        className={classes.point__mapContainer}
                        center={[53.9024716, 27.5618225]}
                        zoom={11.5}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                            url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}&lang=ru`}
                        />
                        <MarkerClusterGroup chunkedLoading>
                            {pointData.display ? (
                                <Marker
                                    key={pointData.id}
                                    position={[pointData.latitude, pointData.longitude]}
                                    icon={customIcon}
                                >
                                    <Popup className={s.popup} keepInView={false} maxWidth={370}>
                                        <div className={s.popupHeader}>{pointData.title}</div>
                                        <div className={s.popupAddressWrapper}>
                                            <ul className={s.address}>
                                                <li className={s.locationPoint}>
                                                    <div className={s.popupAddressContent}>
                                                        {pointData.address}
                                                    </div>
                                                </li>
                                                <li className={s.phone}>
                                                    <div className={s.popupAddressContent}>
                                                        {pointData.phone}
                                                    </div>
                                                </li>
                                                <li className={s.schedule}>
                                                    <div className={s.popupAddressContent}>
                                                        {pointData.schedule}
                                                    </div>
                                                </li>
                                                <li className={s.website}>
                                                    <div className={s.popupAddressContent}>
                                                        <a href={pointData.website}>
                                                            {pointData.website}
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={s.popupFooter}>
                                            Перерабатываем:
                                            <ul className={s.wasteTypes}>
                                                {pointData.wasteTypes.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Popup>
                                </Marker>
                            ) : (
                                ''
                            )}
                        </MarkerClusterGroup>
                    </MapContainer>
                </Box>
            </Box>
        </>
    );
};

export default Point;
