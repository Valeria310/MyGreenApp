import { useState } from 'react';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { FilterButton } from './FilterButton';
import s from './MapSection.module.scss';
import pointIcon from '../../assets/images/point_icon.svg';
import {
    filterButtons,
    FilterButtonsObjType,
    filterType,
    markersForTest,
    waste
} from '../../constants/MapState';


const customIcon = new L.Icon({
    iconUrl: pointIcon,
    iconSize: new L.Point(27, 32)
});

function MapSection() {

    const [filterButtonsStatus, setFilterButtonsStatus] = useState<Array<FilterButtonsObjType>>(filterButtons);

    const changeButtonStatus = (wasteType: filterType) => {
        filterButtons.map(b => b.wasteTitle === wasteType ? b.isActive = !b.isActive : b);
        setFilterButtonsStatus({ ...filterButtonsStatus });

    };

    const filteredMarkers = markersForTest;

    filteredMarkers.map(m => m.display = false);

    for (let i = 0; i < filterButtons.length; i++) {
        if (filterButtons[i].isActive) {
            filteredMarkers.map(m => m.wasteTypes.includes(waste[i]) ? m.display = true : m);
        }
    }

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    return (

        <section className={s.map} id="map">
            <div className={s.mapHeaderWrapper}>
                <h2>Куда сдать?</h2>
                <div className={s.buttonsWrapper}>


                    {filterButtons.map((f, i) =>
                        <FilterButton
                            key={i}
                            title={f.wasteTitle}
                            changeButtonStatus={changeButtonStatus}
                            isActive={f.isActive}
                        />
                    )}

                </div>
                {/*<div>*/}
                {/*    <input placeholder={"Искать по адресу"} className={s.searchField}/></div>*/}
            </div>
            <div className={s.mapWrapper}>

                <MapContainer center={[53.9024716, 27.5618225]} zoom={11.5} scrollWheelZoom={true} className={s.mapContainer}>
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
            </div>



        </section>


    );
}

export default MapSection;
