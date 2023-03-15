import {useState} from 'react';

import s from './MapSection.module.scss';

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {filterButtons, FilterButtonsObjType, filterType, markers, waste} from "../../constants/MapState";
import {FilterButton} from "./FilterButton";
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';


function MapSection() {

    const [filterButtonsStatus, setFilterButtonsStatus] = useState<Array<FilterButtonsObjType>>(filterButtons)

    const changeButtonStatus = (wasteType: filterType) => {
        filterButtons.map(b => b.wasteTitle === wasteType ? b.isActive = !b.isActive : b)
        setFilterButtonsStatus({...filterButtonsStatus})

    }

    let filteredMarkers = markers;

    filteredMarkers.map(m => m.display = false)

    for (let i = 0; i < filterButtons.length; i++) {
        if (filterButtons[i].isActive) {
            filteredMarkers.map(m => m.wasteTypes.includes(waste[i]) ? m.display = true : m)
        }
    }

    const customIcon = new L.Icon({
        iconUrl: require("../../assets/icons/marker.svg").default,
        iconSize: new L.Point(26.85, 31.76)
    });

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    return (

        <section className={s.map} id="map">
            <div className={s.mapWrapper}>
                <h2>Куда сдать?</h2>
                <div className={s.buttonsWrapper}>
                    {filterButtons.map((f,i) => <FilterButton
                        key={i}
                        title={f.wasteTitle}
                        changeButtonStatus={changeButtonStatus}
                        isActive={f.isActive}
                    />)}
                </div>
                <div>

                    <MapContainer center={[53.9024716, 27.5618225]} zoom={11} scrollWheelZoom={true}
                                  className={s.mapContainer}>
                        <TileLayer
                            attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                            url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}&lang=ru`}
                        />

                        <MarkerClusterGroup chunkedLoading>
                            {filteredMarkers.map((m,i) => m.display ?
                                <Marker key={i} position={[m.latitude, m.longitude]} icon={customIcon}>
                                    <Popup>
                                        <h3>{m.title}</h3>
                                        {m.address}<br/>
                                        {m.info}<br/>
                                        Перерабатываем: {m.wasteTypes}
                                    </Popup>
                                </Marker>
                            : "")}
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
            </div>


        </section>



    );
}

export default MapSection;
