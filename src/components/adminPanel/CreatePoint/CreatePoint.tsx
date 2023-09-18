import React, { useEffect } from 'react';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from 'react-hook-form';

import classes from './CreatePoint.module.scss';
import AdminHeader from '../AdminHeader';

type FormValues = {
    organizationName: string;
};

const CreatePoint = () => {
    const form = useForm<FormValues>({
        mode: 'onBlur'
    });
    const { register, handleSubmit, formState, watch } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
    };

    const renderStringLength = (value: string) => {
        if (value.length > 100) {
            return (
                <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                    {value.length}/100
                </FormHelperText>
            );
        }
        return <FormHelperText sx={{ ml: '15px' }}>{value.length}/100</FormHelperText>;
    };

    const watchForm = watch();

    return (
        <>
            <AdminHeader />

            <div className={classes.createPoint}>
                <div className={classes.createPoint__container}>
                    <div className={classes.createPoint__inner}>
                        <form
                            className={classes.createPoint__form}
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <h1 className={classes.createPoint__title}>Добавление новой точки</h1>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={
                                        errors.organizationName?.message
                                            ? classes.createPoint__textareaLabel +
                                              ' ' +
                                              classes.createPoint__textareaLabel_error
                                            : classes.createPoint__textareaLabel
                                    }
                                    htmlFor="organizationName"
                                >
                                    Наименование организации
                                </label>
                                <TextareaAutosize
                                    id="organizationName"
                                    className={
                                        errors.organizationName?.message
                                            ? classes.createPoint__textarea +
                                              ' ' +
                                              classes.createPoint__textarea_error
                                            : classes.createPoint__textarea
                                    }
                                    aria-label="Наименование организации"
                                    {...register('organizationName', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,". ]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 100,
                                            message:
                                                'Наименование организации должно быть не более 100 символов'
                                        }
                                    })}
                                />

                                {watchForm.organizationName ? (
                                    renderStringLength(watchForm.organizationName)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                                )}

                                {errors.organizationName?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.organizationName.message}
                                    </FormHelperText>
                                ) : null}
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="website"
                                >
                                    {'Ссылка на сайт организации (опционально)'}
                                </label>
                                <TextareaAutosize
                                    id="website"
                                    className={classes.createPoint__textarea}
                                    aria-label="Ссылка на сайт организации (опционально)"
                                />
                                <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="address"
                                >
                                    Адрес
                                </label>
                                <TextareaAutosize
                                    id="address"
                                    className={classes.createPoint__textarea}
                                    aria-label="Адрес"
                                />
                                <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="phone"
                                >
                                    {'Контактный телефон (опционально)'}
                                </label>
                                <TextareaAutosize
                                    id="phone"
                                    className={classes.createPoint__textarea}
                                    aria-label="Контактный телефон (опционально)"
                                />
                                <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="work-hours"
                                >
                                    Время работы
                                </label>
                                <TextareaAutosize
                                    id="work-hours"
                                    className={classes.createPoint__textarea}
                                    aria-label="Время работы"
                                />
                                <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                            </div>
                            <h2 className={classes.createPoint__subtitle}>Виды вторсырья</h2>
                            <div className={classes.createPoint__checkboxes}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Пластик"
                                    />
                                    <FormControlLabel control={<Checkbox />} label="Бумага" />
                                    <FormControlLabel control={<Checkbox />} label="Стекло" />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Электронная и бытовая техника"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Крупногабаритные отходы"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Опасные отходы"
                                    />
                                    <FormControlLabel control={<Checkbox />} label="Металл" />
                                    <FormControlLabel control={<Checkbox />} label="Ветошь" />
                                </FormGroup>
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="coordinates"
                                >
                                    Координаты пункта приема вторсырья{' '}
                                </label>
                                <TextareaAutosize
                                    id="coordinates"
                                    className={classes.createPoint__textarea}
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
                                <FormControlLabel
                                    value="display"
                                    control={<Radio />}
                                    label="Отображать на карте"
                                />
                                <FormControlLabel
                                    value="notDisplay"
                                    control={<Radio />}
                                    label="Не отображать на карте"
                                />
                            </RadioGroup>
                            <div className={classes.createPoint__buttons}>
                                <Button type="submit" variant="contained" sx={{ mr: '16px' }}>
                                    Сохранить
                                </Button>
                                <Button type="button" variant="text">
                                    Отменить
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePoint;
