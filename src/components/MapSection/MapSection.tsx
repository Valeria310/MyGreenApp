import React, { useState } from 'react';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { FilterButton } from './FilterButton';
import s from './MapSection.module.scss';
import pointIcon from '../../assets/images/point_icon.svg';
import {
    FilterButtonsObjType, filterButtonsState,
    markersState,
    waste
} from '../../constants/MapState';


const customIcon = new L.Icon({
    iconUrl: pointIcon,
    iconSize: new L.Point(27, 32)
});

const MapSection = ()=> {

    const [filterButtons, setFilterButtons] = useState<Array<FilterButtonsObjType>>(filterButtonsState);

    const changeButtonStatus = (id: string) => {

        if (id === "all") {
            filterButtons[0].isActive = !filterButtons[0].isActive
        } else {
            filterButtons[0].isActive = false
        }

        filterButtons.map(b => b.id === id ? b.isActive = !b.isActive : b)

        if (id === "all" && filterButtons[0].isActive) {

            filterButtons.map(b => b.isActive = false)

        } else if (id === "all" && filterButtons[0].isActive === false) {

            filterButtons.map(b => b.isActive = true)

        }

        else if (id !== "all") {

            let buttonsStatusArray: Array<boolean> = []
            filterButtons.map(b => buttonsStatusArray.push(b.isActive))
            buttonsStatusArray.shift()
            if(!buttonsStatusArray.includes(false)) {
                filterButtons[0].isActive = true
            }

        }

        // setButtonsStatus({...buttonsStatus})

        setFilterButtons([...filterButtons])

//         let updatedFilterButtonState
//
//         console.log(id)
//
//
//         // if (id === "all") {
//         //     filterButtons[0].isActive = !filterButtons[0].isActive
//         // } else {
//         //     filterButtons[0].isActive = false
//         // }
//         // filterButtons.map(b => b.wasteTitle === wasteType ? b.isActive = !b.isActive : b);
//         // setFilterButtonsStatus({ ...filterButtonsStatus });
//         // const buttonToChange = filterButtons.find(f=>f.id == id);
//
//         // const updatedFilterButtons = filterButtons.map(b => b.id === id ?
//         //     { id: b.id, wasteTitle: b.wasteTitle, isActive: !b.isActive } : b);
// //
// // if(id !== "all") {
// //
// //     filterButtons[0].isActive = false
// //
// // }
// //
//         // любая кнопка при нажатии меняет свой статус а кнопка все гаснет
//         console.log(filterButtons)
//         filterButtons[0].isActive = false
//         console.log(filterButtons)
//
//             updatedFilterButtonState = filterButtons.map(b => b.id == id ?
//                 {id: b.id, wasteTitle: b.wasteTitle, isActive: !b.isActive} : b);
//             console.log(updatedFilterButtonState)
//
//
//
//
//
//       //  если нажимаем на кнопку все, то все остальные кнопки загораются/гаснут
//
//         if (id === "all" && filterButtons[0].isActive) {
//
//             filterButtons.map(b => b.isActive = false)
//
//         } else if (id === "all" && filterButtons[0].isActive === false) {
//
//             filterButtons.map(b => b.isActive = true)
//
//         }
//
//         //если все кнопки кроме "все" нажаты то и сама кнопка все становится активной
//
//         else if (id !== "all") {
//
//             let buttonsStatusArray: Array<boolean> = []
//             filterButtons.map(b => buttonsStatusArray.push(b.isActive))
//             buttonsStatusArray.shift()
//             if(!buttonsStatusArray.includes(false)) {
//                 filterButtons[0].isActive = true
//             }
//
//             console.log(buttonsStatusArray)
//
//         }
//
//
//         setFilterButtons([...updatedFilterButtonState]);

        // console.log(updatedFilterButtons);
    };

    const filteredMarkers = markersState;

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
                            id={f.id}
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
};

export default MapSection;
