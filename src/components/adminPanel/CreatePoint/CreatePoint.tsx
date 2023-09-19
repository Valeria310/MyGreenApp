import React, { useState } from 'react';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Box } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useForm } from 'react-hook-form';

import classes from './CreatePoint.module.scss';
import AdminHeader from '../AdminHeader';

type FormValues = {
    title: string;
    website: string;
    address: string;
    phone: string;
    shedule: string;
    coordinates: string;
    wasteTitle: string[];
    display: boolean;
};

interface State extends SnackbarOrigin {
    open: boolean;
}

const CreatePoint = () => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right'
    });
    const { vertical, horizontal, open } = state;

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const form = useForm<FormValues>({
        mode: 'onBlur'
    });
    const { register, handleSubmit, formState, watch } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
        setState({ ...state, open: true });
    };

    const renderStringLength = (value: string, number: number) => {
        if (value.length > number) {
            return (
                <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                    {value.length}/{number}
                </FormHelperText>
            );
        }
        return (
            <FormHelperText sx={{ ml: '15px' }}>
                {value.length}/{number}
            </FormHelperText>
        );
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
                                        errors.title?.message
                                            ? classes.createPoint__textareaLabel +
                                              ' ' +
                                              classes.createPoint__textareaLabel_error
                                            : classes.createPoint__textareaLabel
                                    }
                                    htmlFor="title"
                                >
                                    Наименование организации
                                </label>
                                <TextareaAutosize
                                    id="title"
                                    className={
                                        errors.title?.message
                                            ? classes.createPoint__textarea +
                                              ' ' +
                                              classes.createPoint__textarea_error
                                            : classes.createPoint__textarea
                                    }
                                    aria-label="Наименование организации"
                                    {...register('title', {
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

                                {watchForm.title ? (
                                    renderStringLength(watchForm.title, 100)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                                )}

                                {errors.title?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.title.message}
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
                                    {...register('website', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:.]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Имя сайта должно быть не более 50 символов'
                                        }
                                    })}
                                />
                                {watchForm.website ? (
                                    renderStringLength(watchForm.website, 50)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/50</FormHelperText>
                                )}
                                {errors.website?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.website.message}
                                    </FormHelperText>
                                ) : null}
                                {/* <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText> */}
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={
                                        errors.address?.message
                                            ? classes.createPoint__textareaLabel +
                                              ' ' +
                                              classes.createPoint__textareaLabel_error
                                            : classes.createPoint__textareaLabel
                                    }
                                    htmlFor="address"
                                >
                                    Адрес
                                </label>
                                <TextareaAutosize
                                    id="address"
                                    className={
                                        errors.address?.message
                                            ? classes.createPoint__textarea +
                                              ' ' +
                                              classes.createPoint__textarea_error
                                            : classes.createPoint__textarea
                                    }
                                    aria-label="Адрес"
                                    {...register('address', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,"№(). ]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'Адрес должен быть не более 100 символов'
                                        }
                                    })}
                                />
                                {watchForm.address ? (
                                    renderStringLength(watchForm.address, 100)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                                )}
                                {errors.address?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.address.message}
                                    </FormHelperText>
                                ) : null}
                                {/* <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText> */}
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
                                    {...register('phone', {
                                        pattern: {
                                            value: /^[0-9-() ]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 100,
                                            message:
                                                'Номер телефона должен быть не более 100 символов'
                                        }
                                    })}
                                />
                                {watchForm.phone ? (
                                    renderStringLength(watchForm.phone, 100)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                                )}
                                {errors.phone?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.phone.message}
                                    </FormHelperText>
                                ) : null}
                                {/* <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText> */}
                            </div>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={classes.createPoint__textareaLabel}
                                    htmlFor="shedule"
                                >
                                    Время работы
                                </label>
                                <TextareaAutosize
                                    id="shedule"
                                    className={classes.createPoint__textarea}
                                    aria-label="Время работы"
                                    {...register('shedule', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,;(). ]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 300,
                                            message:
                                                'Время работы должно быть не более 300 символов'
                                        }
                                    })}
                                />
                                {watchForm.shedule ? (
                                    renderStringLength(watchForm.shedule, 300)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/300</FormHelperText>
                                )}
                                {errors.shedule?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.shedule.message}
                                    </FormHelperText>
                                ) : null}
                                {/* <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText> */}
                            </div>
                            <h2
                                className={
                                    errors.wasteTitle?.message
                                        ? classes.createPoint__subtitle +
                                          ' ' +
                                          classes.createPoint__subtitle_error
                                        : classes.createPoint__subtitle
                                }
                            >
                                Виды вторсырья
                            </h2>
                            <Box sx={{ mb: '30px' }}>
                                <FormControl className={classes.createPoint__checkboxes}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="plastic"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Пластик"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="paper"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Бумага"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="glass"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Стекло"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="electronics"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Электронная и бытовая техника"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="largeSize"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Крупногабаритные отходы"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="dangerous"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Опасные отходы"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="metal"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Металл"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="rags"
                                                    {...register('wasteTitle', {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                'Указание вида вторсырья обязательно'
                                                        }
                                                    })}
                                                />
                                            }
                                            label="Ветошь"
                                        />
                                    </FormGroup>
                                </FormControl>
                                {errors.wasteTitle?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.wasteTitle.message}
                                    </FormHelperText>
                                ) : null}
                            </Box>
                            <div className={classes.createPoint__textareaBox}>
                                <label
                                    className={
                                        errors.coordinates?.message
                                            ? classes.createPoint__textareaLabel +
                                              ' ' +
                                              classes.createPoint__textareaLabel_error
                                            : classes.createPoint__textareaLabel
                                    }
                                    htmlFor="coordinates"
                                >
                                    Координаты пункта приема вторсырья{' '}
                                </label>
                                <TextareaAutosize
                                    id="coordinates"
                                    className={
                                        errors.coordinates?.message
                                            ? classes.createPoint__textarea +
                                              ' ' +
                                              classes.createPoint__textarea_error
                                            : classes.createPoint__textarea
                                    }
                                    aria-label="Координаты пункта приема вторсырья "
                                    {...register('coordinates', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[0-9. ]+$/,
                                            message: 'Некорректное значение'
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'Координаты должны быть не более 100 символов'
                                        }
                                    })}
                                />
                                {watchForm.coordinates ? (
                                    renderStringLength(watchForm.coordinates, 100)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText>
                                )}
                                {errors.coordinates?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.coordinates.message}
                                    </FormHelperText>
                                ) : null}
                                {/* <FormHelperText sx={{ ml: '15px' }}>0/100</FormHelperText> */}
                            </div>
                            <h2 className={classes.createPoint__subtitle}>Статус</h2>
                            <RadioGroup
                                sx={{ mb: '48px' }}
                                aria-labelledby="Статус"
                                defaultValue={true}
                                name="status-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value={true}
                                    control={<Radio {...register('display', { required: true })} />}
                                    label="Отображать на карте"
                                />
                                <FormControlLabel
                                    value={false}
                                    control={<Radio {...register('display', { required: true })} />}
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
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                open={open}
                                autoHideDuration={3000}
                                onClose={handleClose}
                                key={vertical + horizontal}
                            >
                                <Alert
                                    onClose={handleClose}
                                    // severity="success"
                                    sx={{
                                        width: '100%',
                                        background: '#EDF7ED',
                                        color: '#1E4620'
                                    }}
                                >
                                    Новый пункт приема добавлен успешно
                                </Alert>
                            </Snackbar>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePoint;
