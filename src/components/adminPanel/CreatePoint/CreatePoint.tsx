import React from 'react';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import classes from './CreatePoint.module.scss';

const CreatePoint = () => {
    return (
        <div className={classes.createPoint}>
            <div className={classes.createPoint__container}>
                <div className={classes.createPoint__inner}>
                    <h1 className={classes.createPoint__title}>Добавление новой точки</h1>
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="name">Наименование организации</label>
                        <TextareaAutosize id="name" className={classes.createPoint__textarea}
                            aria-label="Наименование организации"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="website">{'Ссылка на сайт организации (опционально)'}</label>
                        <TextareaAutosize id="website" className={classes.createPoint__textarea}
                            aria-label="Ссылка на сайт организации (опционально)"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="address">Адрес</label>
                        <TextareaAutosize id="address" className={classes.createPoint__textarea}
                            aria-label="Адрес"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="phone">{'Контактный телефон (опционально)'}</label>
                        <TextareaAutosize id="phone" className={classes.createPoint__textarea}
                            aria-label="Контактный телефон (опционально)"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>

                    </div>
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="work-hours">Время работы</label>
                        <TextareaAutosize id="work-hours" className={classes.createPoint__textarea}
                            aria-label="Время работы"
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <h2 className={classes.createPoint__subtitle}>Виды вторсырья</h2>
                    <div className={classes.createPoint__checkboxes}>
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
                    <div className={classes.createPoint__textareaBox}>
                        <label className={classes.createPoint__textareaLabel} htmlFor="coordinates">Координаты пункта приема вторсырья </label>
                        <TextareaAutosize id="coordinates" className={classes.createPoint__textarea}
                            aria-label="Координаты пункта приема вторсырья "
                        />
                        <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                    </div>
                    <h2 className={classes.createPoint__subtitle}>Статус</h2>
                    <RadioGroup
                        sx={{ mb: '48px' }}
                        aria-labelledby="Статус"
                        defaultValue="display"
                        name="status-radio-buttons-group"
                    >
                        <FormControlLabel value="display" control={<Radio />} label="Отображать на карте" />
                        <FormControlLabel value="notDisplay" control={<Radio />} label="Не отображать на карте" />
                    </RadioGroup>
                    <div className={classes.createPoint__buttons}>
                        <Button variant="contained" sx={{ mr: '16px' }}>Сохранить</Button>
                        <Button variant="text">Отменить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePoint;