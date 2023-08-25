import React from 'react';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import classes from './EditPoint.module.scss';
import pointIcon from '../../../assets/images/point_icon.svg';
import { markersState } from '../../../constants/MapState';
import s from '../../MapSection/MapSection.module.scss';

const EditPoint = () => {
    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });

    const filteredMarkers = markersState;
    filteredMarkers.map(m => m.display = true);

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';

    return (
        <div className={classes.editPoint}>
            <div className={classes.editPoint__container}>
                <div className={classes.editPoint__inner}>
                    <h1 className={classes.editPoint__title}>Редактирование точки</h1>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="name">Наименование организации</label>
                        <TextareaAutosize id="name" className={classes.editPoint__textarea}
                            aria-label="Наименование организации"
                            value="ОАО Белвтор ресурсы"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="website">{'Ссылка на сайт организации (опционально)'}</label>
                        <TextareaAutosize id="website" className={classes.editPoint__textarea}
                            aria-label="Ссылка на сайт организации (опционально)"
                            value="https://belvtorresurs.by/"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="address">Адрес</label>
                        <TextareaAutosize id="address" className={classes.editPoint__textarea}
                            aria-label="Адрес"
                            value="№ 29. Минск, ул.Челюскинцев, 30"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="phone">{'Контактный телефон (опционально)'}</label>
                        <TextareaAutosize id="phone" className={classes.editPoint__textarea}
                            aria-label="Контактный телефон (опционально)"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="work-hours">Время работы</label>
                        <TextareaAutosize id="work-hours" className={classes.editPoint__textarea}
                            aria-label="Время работы"
                            value={`Пн-Пт: с 09:00 до 17:00 (обед 14:00-15:00)
Сб: с 09:00 до 14:00;
вых: Воскресенье`}
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <h2 className={classes.editPoint__subtitle}>Виды вторсырья</h2>
                    <div className={classes.editPoint__checkboxes}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Пластик" />
                            <FormControlLabel control={<Checkbox />} label="Бумага" />
                            <FormControlLabel control={<Checkbox />} label="Стекло" />
                            <FormControlLabel control={<Checkbox />} label="Электронная и бытовая техника" />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Крупногабаритные отходы" />
                            <FormControlLabel control={<Checkbox />} label="Опасные отходы" />
                            <FormControlLabel control={<Checkbox />} label="Металл" />
                            <FormControlLabel control={<Checkbox />} label="Ветошь" />
                        </FormGroup>
                    </div>
                    <div className={classes.editPoint__textareaBox}>
                        <label className={classes.editPoint__textareaLabel} htmlFor="coordinates">Координаты пункта приема вторсырья </label>
                        <TextareaAutosize id="coordinates" className={classes.editPoint__textarea}
                            aria-label="Координаты пункта приема вторсырья"
                            value="16.495467, 163.260896"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <h2 className={classes.editPoint__subtitle}>Статус</h2>
                    <RadioGroup
                        sx={{ mb: '48px' }}
                        aria-labelledby="Статус"
                        defaultValue="display"
                        name="status-radio-buttons-group"
                    >
                        <FormControlLabel value="display" control={<Radio />} label="Отображать на карте" />
                        <FormControlLabel value="notDisplay" control={<Radio />} label="Не отображать на карте" />
                    </RadioGroup>
                    <div className={classes.editPoint__buttons}>
                        <Button variant="contained" sx={{ mr: '16px' }}>Сохранить</Button>
                        <Button variant="text">Отменить</Button>
                    </div>
                    <MapContainer className={classes.editPoint__mapContainer} center={[53.9024716, 27.5618225]} zoom={11.5} scrollWheelZoom={false}>
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
            </div>
        </div>
    );
};

export default EditPoint;
