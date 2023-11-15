import React, { useState, useEffect } from 'react';

import axios from 'axios';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { FilterButton } from './FilterButton';
import s from './MapSection.module.scss';
import pointIcon from '../../assets/images/point_icon.svg';
import { FilterButtonsObjType, filterButtonsState, waste } from '../../constants/MapState';

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
    workingHours: string;
    recyclableTypes: string[];
    displayed: boolean;
};

const customIcon = new L.Icon({
    iconUrl: pointIcon,
    iconSize: new L.Point(27, 32)
});

const MapSection = () => {
    const [tableData, setTableData] = useState<dataAPI[]>([]);
    const [filterButtons, setFilterButtons] =
        useState<Array<FilterButtonsObjType>>(filterButtonsState);

    async function getData() {
        try {
            const response = await axios.get('https://31.184.254.112:8081/recycling-points/');
            setTableData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const changeButtonStatus = (id: string) => {
        if (id === 'all') {
            filterButtons[0].isActive = !filterButtons[0].isActive;
        } else {
            filterButtons[0].isActive = false;
        }

        filterButtons.map((b) => (b.id === id ? (b.isActive = !b.isActive) : b));

        if (id === 'all' && filterButtons[0].isActive) {
            filterButtons.map((b) => (b.isActive = false));
        } else if (id === 'all' && !filterButtons[0].isActive) {
            filterButtons.map((b) => (b.isActive = true));
        } else if (id !== 'all') {
            const buttonsStatusArray: Array<boolean> = [];
            filterButtons.map((b) => buttonsStatusArray.push(b.isActive));
            buttonsStatusArray.shift();
            if (!buttonsStatusArray.includes(false)) {
                filterButtons[0].isActive = true;
            }
        }

        setFilterButtons([...filterButtons]);
    };

    const filteredMarkers = tableData;

    filteredMarkers.map((m) => (m.displayed = false));

    for (let i = 1; i < filterButtons.length; i++) {
        if (filterButtons[i].isActive) {
            filteredMarkers.map((m) =>
                m.recyclableTypes.includes(waste[i]) ? (m.displayed = true) : m
            );
        }
    }

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    return (
        <section id="map">
            <div className={s.mapHeaderWrapper}>
                <h2>Куда сдать?</h2>
                <div className={s.buttonsWrapper}>
                    {filterButtons.map((f, i) => (
                        <FilterButton
                            key={i}
                            id={f.id}
                            title={f.wasteTitle}
                            changeButtonStatus={changeButtonStatus}
                            isActive={f.isActive}
                        />
                    ))}
                </div>
                {/*<div>*/}
                {/*    <input placeholder={"Искать по адресу"} className={s.searchField}/></div>*/}
            </div>
            <div className={s.mapWrapper}>
                <MapContainer
                    center={[53.9024716, 27.5618225]}
                    zoom={11.5}
                    scrollWheelZoom={true}
                    className={s.mapContainer}
                >
                    <TileLayer
                        attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                        url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}&lang=ru`}
                    />
                    <MarkerClusterGroup chunkedLoading>
                        {filteredMarkers.map((m, i) =>
                            m.displayed ? (
                                <Marker
                                    key={i}
                                    position={[m.location.latitude, m.location.longitude]}
                                    icon={customIcon}
                                >
                                    <Popup className={s.popup} keepInView={false} maxWidth={370}>
                                        <div className={s.popupHeader}>{m.name}</div>
                                        <div className={s.popupAddressWrapper}>
                                            <ul className={s.address}>
                                                <li className={s.locationPoint}>
                                                    <div className={s.popupAddressContent}>
                                                        {m.address}
                                                    </div>
                                                </li>
                                                <li className={s.phone}>
                                                    <div className={s.popupAddressContent}>
                                                        {m.phoneNumber}
                                                    </div>
                                                </li>
                                                <li className={s.schedule}>
                                                    <div className={s.popupAddressContent}>
                                                        {m.workingHours}
                                                    </div>
                                                </li>
                                                <li className={s.website}>
                                                    <div className={s.popupAddressContent}>
                                                        <a href={m.website}>{m.website}</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={s.popupFooter}>
                                            Перерабатываем:
                                            <ul className={s.wasteTypes}>
                                                {m.recyclableTypes.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Popup>
                                </Marker>
                            ) : (
                                ''
                            )
                        )}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </section>
    );
};

export default MapSection;
