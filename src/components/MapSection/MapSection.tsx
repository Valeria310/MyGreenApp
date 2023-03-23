import {useState} from 'react';

import s from './MapSection.module.scss';

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {filterButtons, FilterButtonsObjType, filterType, markers, waste} from "../../constants/MapState";
import {FilterButton} from "./FilterButton";


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


    return (

        <section className={s.map} id="map">
            <div className={s.mapWrapper}>
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
                <div>
                    <input placeholder={"Искать по адресу"} className={s.searchField}/></div>
                <div>
                    <MapContainer center={[53.9024716, 27.5618225]} zoom={11.5} scrollWheelZoom={true}
                                  className={s.mapContainer}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {
                            filteredMarkers.map((m, i) =>
                                m.display ? <Marker key={i} position={[m.latitude, m.longitude]}>
                                    <Popup>
                                        <h3>{m.title}</h3>
                                        {m.address}<br/>
                                        {m.info}<br/>
                                        Перерабатываем: {m.wasteTypes}
                                    </Popup>
                                </Marker> : ""
                            )}
                    </MapContainer>
                </div>
            </div>


        </section>


    );
}

export default MapSection;
