import React from 'react';

import Chip from '@mui/material/Chip';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import classes from './PointsMap.module.scss';
import pointIcon from '../../../assets/images/point_icon.svg';
import { markersState } from '../../../constants/MapState';
import { waste } from '../../../constants/MapState';
import s from '../../MapSection/MapSection.module.scss';


const PointsMap = () => {
    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });

    const filteredMarkers = markersState;
    filteredMarkers.map(m => m.display = true);

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    const chipsList = waste.map((item, index) => {
        return <Chip className={classes.pointsMap__chip} key={index} label={item} variant="outlined" color="primary" />;
    });

    return (
        <>
            <div className={classes.pointsMap__filters}>
                <Chip className={classes.pointsMap__chip} label="Все" color="primary" />
                {chipsList}
            </div>
            <MapContainer className={classes.pointsMap__mapContainer} center={[53.9024716, 27.5618225]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                    url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}&lang=ru`}
                />
                <MarkerClusterGroup chunkedLoading>
                    {filteredMarkers.map((m, i) =>
                        m.display ? <Marker key={i} position={[m.latitude, m.longitude]} icon={customIcon}>
                            <Popup className={s.popup} keepInView={false} maxWidth={370}>
                                <div className={s.popupHeader}>{m.title}</div>
                                <div className={s.popupAddressWrapper}>
                                    <ul className={s.address}>
                                        <li className={s.locationPoint}>
                                            <div className={s.popupAddressContent}>{m.address}</div>
                                        </li>
                                        <li className={s.phone}>
                                            <div className={s.popupAddressContent}>{m.phone}</div>
                                        </li>
                                        <li className={s.schedule}>
                                            <div className={s.popupAddressContent}>{m.schedule}</div>
                                        </li>
                                        <li className={s.website}>
                                            <div className={s.popupAddressContent}><a href={m.website}>{m.website}</a></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={s.popupFooter}>
                                        Перерабатываем:
                                    <ul className={s.wasteTypes}>
                                        {m.wasteTypes.map((item, i) =>
                                            <li key={i}>{item}</li>
                                        )}
                                    </ul>
                                </div>
                            </Popup>
                        </Marker> : ''
                    )}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
};

export default PointsMap;
