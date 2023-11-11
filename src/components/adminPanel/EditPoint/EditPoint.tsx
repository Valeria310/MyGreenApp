import * as React from 'react';

import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useParams } from 'react-router-dom';

import classes from './EditPoint.module.scss';
import pointIcon from '../../../assets/images/point_icon.svg';
import s from '../../MapSection/MapSection.module.scss';
import AdminHeader from '../AdminHeader';
import PointForm from '../PointForm';

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
    info: string;
};

const EditPoint: React.FC = () => {
    const { id } = useParams<PointId>();

    const [pointData, setPointData] = React.useState<dataAPI>();

    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    async function getData() {
        try {
            const response = await axios.get(`https://31.184.254.112:8081/recycling-points/${id}`);
            setPointData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
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
                <Box className={classes.editPoint}>
                    <Box className={classes.editPoint__container}>
                        <Box className={classes.editPoint__inner}>
                            <h1 className={classes.editPoint__title}>Редактирование точки</h1>
                            <PointForm {...pointData} />
                            <MapContainer
                                className={classes.editPoint__mapContainer}
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
                </Box>
            </>
        );
    }

    // const pointData = markersState[idx];
    // pointData.display = true;

    return (
        <>
            {content}
            {/* <AdminHeader />
            <Box className={classes.editPoint}>
                <Box className={classes.editPoint__container}>
                    <Box className={classes.editPoint__inner}>
                        <h1 className={classes.editPoint__title}>Редактирование точки</h1>
                        <PointForm {...pointData} />
                        <MapContainer
                            className={classes.editPoint__mapContainer}
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
                                        <Popup
                                            className={s.popup}
                                            keepInView={false}
                                            maxWidth={370}
                                        >
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
            </Box> */}
        </>
    );
};

export default EditPoint;
