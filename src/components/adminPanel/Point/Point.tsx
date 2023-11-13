import { useState, useEffect } from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Chip, LinearProgress } from '@mui/material';
import axios from 'axios';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link, useParams, useNavigate } from 'react-router-dom';

import classes from './Point.module.scss';
import pointIcon from '../../../assets/images/point_icon.svg';
import s from '../../MapSection/MapSection.module.scss';
import AdminHeader from '../AdminHeader';

type PointId = {
    id: string;
};

type dataAPI = {
    id: number;
    name: string | undefined;
    address: string;
    phoneNumber: string;
    website: string;
    location: {
        latitude: number;
        longitude: number;
    };
    workingHours: string;
    recyclableTypes: string[];
    displayed: boolean;
};

const Point: React.FC = () => {
    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('EcoHub') ? true : false;

    useEffect(() => {
        if (!localStorage.getItem('EcoHub')) {
            navigate('/login');
        }
    }, []);

    const { id } = useParams<PointId>();

    const [pointData, setPointDate] = useState<dataAPI>();

    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    async function getData() {
        try {
            const response = await axios.get(`https://31.184.254.112:8081/recycling-points/${id}`);
            setPointDate(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    let content = null;

    if (!pointData) {
        content = (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    } else {
        content = (
            <>
                <AdminHeader />
                {pointData ? (
                    <Box className={classes.point}>
                        <Box className={classes.point__container}>
                            <Link className={classes.point__link} to="/admin">
                                <ChevronLeft />
                                Назад
                            </Link>
                            <Box className={classes.point__titleBox}>
                                <h1 className={classes.point__title}>{pointData.name}</h1>
                                <Link className={classes.point__titleLink} to="edit">
                                    <EditIcon sx={{ fontSize: 48 }} />
                                </Link>
                            </Box>
                            <Box className={classes.point__table}>
                                <Box className={classes.point__tableRow}>
                                    <Box className={classes.point__tableCol}>
                                        Ссылка на сайт организации
                                    </Box>
                                    <Box
                                        className={
                                            pointData.website
                                                ? classes.point__tableCol
                                                : classes.point__tableCol + ' ' + classes.noData
                                        }
                                    >
                                        {pointData.website ? (
                                            <a
                                                target="/blank"
                                                className={classes.point__websiteLink}
                                                href={pointData.website}
                                            >
                                                {pointData.website}
                                            </a>
                                        ) : (
                                            'Нет данных'
                                        )}
                                    </Box>
                                </Box>
                                <Box className={classes.point__tableRow}>
                                    <Box className={classes.point__tableCol}>Адрес</Box>
                                    <Box className={classes.point__tableCol}>
                                        {pointData.address ? pointData.address : 'Нет данных'}
                                    </Box>
                                </Box>
                                <Box className={classes.point__tableRow}>
                                    <Box className={classes.point__tableCol}>Время работы</Box>
                                    <Box className={classes.point__tableCol}>
                                        {pointData.workingHours
                                            ? pointData.workingHours
                                            : 'Нет данных'}
                                    </Box>
                                </Box>
                                <Box
                                    className={
                                        classes.point__tableRow +
                                        ' ' +
                                        classes.point__tableRow_withChip
                                    }
                                >
                                    <Box className={classes.point__tableCol}>Виды вторсырья</Box>
                                    <Box className={classes.point__tableCol}>
                                        {pointData.recyclableTypes.map((item) => {
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
                                        classes.point__tableRow +
                                        ' ' +
                                        classes.point__tableRow_withChip
                                    }
                                >
                                    <Box className={classes.point__tableCol}>Статус</Box>
                                    <Box className={classes.point__tableCol}>
                                        <Chip
                                            className={classes.point__typeChip}
                                            label={
                                                pointData.displayed
                                                    ? 'Отображать на карте'
                                                    : 'Не отображать на карте'
                                            }
                                            variant="outlined"
                                            color={pointData.displayed ? 'success' : 'error'}
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
                                    {pointData.displayed ? (
                                        <Marker
                                            key={pointData.id}
                                            position={[
                                                pointData.location.latitude,
                                                pointData.location.longitude
                                            ]}
                                            icon={customIcon}
                                        >
                                            <Popup
                                                className={s.popup}
                                                keepInView={false}
                                                maxWidth={370}
                                            >
                                                <div className={s.popupHeader}>
                                                    {pointData.name}
                                                </div>
                                                <div className={s.popupAddressWrapper}>
                                                    <ul className={s.address}>
                                                        <li className={s.locationPoint}>
                                                            <div className={s.popupAddressContent}>
                                                                {pointData.address}
                                                            </div>
                                                        </li>
                                                        <li className={s.phone}>
                                                            <div className={s.popupAddressContent}>
                                                                {pointData.phoneNumber}
                                                            </div>
                                                        </li>
                                                        <li className={s.schedule}>
                                                            <div className={s.popupAddressContent}>
                                                                {pointData.workingHours}
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
                                                        {pointData.recyclableTypes.map(
                                                            (item, i) => (
                                                                <li key={i}>{item}</li>
                                                            )
                                                        )}
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
                ) : (
                    'Нет данных о выбранной точке =('
                )}
            </>
        );
    }

    return content;
};

export default Point;
