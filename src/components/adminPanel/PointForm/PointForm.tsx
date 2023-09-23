import React from 'react';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Radio,
    RadioGroup
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useForm } from 'react-hook-form';

import { MarkerType, markersState, filterType } from 'src/constants/MapState';

import classes from './PointForm.module.scss';

type FormValues = {
    title: string;
    website: string;
    address: string;
    phone: string;
    schedule: string;
    coordinates?: string | undefined;
    wasteTypes: Array<filterType>;
    display: boolean | string | undefined;
    id: number | undefined;
    info: string | undefined;
    longitude: number;
    latitude: number;
};

interface State extends SnackbarOrigin {
    open: boolean;
}

const PointForm: React.FC<Partial<MarkerType>> = (props) => {
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
        mode: 'onBlur',
        defaultValues: {
            title: props ? props.title : '',
            website: props ? props.website : '',
            address: props ? props.address : '',
            phone: props ? props.phone : '',
            schedule: props ? props.schedule : '',
            wasteTypes: props ? props.wasteTypes : [],
            coordinates:
                props.latitude && props.longitude
                    ? props.latitude.toString() + ' ' + props.longitude.toString()
                    : '',
            display: props ? props.display : false,
            id: props ? props.id : markersState[markersState.length - 1].id + 1,
            info: props ? props.info : ''
        }
    });

    const { register, handleSubmit, formState, watch } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        const resultData: FormValues = { ...data };

        if (data.coordinates) {
            const latLong = data.coordinates.split(' ');
            resultData.longitude = Number(latLong[0]);
            resultData.latitude = Number(latLong[1]);
            delete resultData.coordinates;
        }
        resultData.display = toBoolean(resultData.display);
        resultData.id = data.id ? data.id : markersState[markersState.length - 1].id + 1;
        resultData.info = data.info ? data.info : '';
        console.log('=== Result data to database:', resultData);

        setState({ ...state, open: true });
    };

    const toBoolean = (value: boolean | string | undefined) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
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
            <div className={classes.pointForm}>
                <div className={classes.pointForm__container}>
                    <div className={classes.pointForm__inner}>
                        <form
                            className={classes.pointForm__form}
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <div className={classes.pointForm__textareaBox}>
                                <label
                                    className={
                                        errors.title?.message
                                            ? classes.pointForm__textareaLabel +
                                              ' ' +
                                              classes.pointForm__textareaLabel_error
                                            : classes.pointForm__textareaLabel
                                    }
                                    htmlFor="title"
                                >
                                    Наименование организации
                                </label>
                                <TextareaAutosize
                                    id="title"
                                    className={
                                        errors.title?.message
                                            ? classes.pointForm__textarea +
                                              ' ' +
                                              classes.pointForm__textarea_error
                                            : classes.pointForm__textarea
                                    }
                                    aria-label="Наименование организации"
                                    {...register('title', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,".№ ]+$/,
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
                            <div className={classes.pointForm__textareaBox}>
                                <label
                                    className={classes.pointForm__textareaLabel}
                                    htmlFor="website"
                                >
                                    {'Ссылка на сайт организации (опционально)'}
                                </label>
                                <TextareaAutosize
                                    id="website"
                                    className={classes.pointForm__textarea}
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
                            <div className={classes.pointForm__textareaBox}>
                                <label
                                    className={
                                        errors.address?.message
                                            ? classes.pointForm__textareaLabel +
                                              ' ' +
                                              classes.pointForm__textareaLabel_error
                                            : classes.pointForm__textareaLabel
                                    }
                                    htmlFor="address"
                                >
                                    Адрес
                                </label>
                                <TextareaAutosize
                                    id="address"
                                    className={
                                        errors.address?.message
                                            ? classes.pointForm__textarea +
                                              ' ' +
                                              classes.pointForm__textarea_error
                                            : classes.pointForm__textarea
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
                            </div>
                            <div className={classes.pointForm__textareaBox}>
                                <label className={classes.pointForm__textareaLabel} htmlFor="phone">
                                    {'Контактный телефон (опционально)'}
                                </label>
                                <TextareaAutosize
                                    id="phone"
                                    className={classes.pointForm__textarea}
                                    aria-label="Контактный телефон (опционально)"
                                    {...register('phone', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-() ]+$/,
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
                            </div>
                            <div className={classes.pointForm__textareaBox}>
                                <label
                                    className={classes.pointForm__textareaLabel}
                                    htmlFor="schedule"
                                >
                                    Время работы
                                </label>
                                <TextareaAutosize
                                    id="schedule"
                                    className={classes.pointForm__textarea}
                                    aria-label="Время работы"
                                    {...register('schedule', {
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
                                {watchForm.schedule ? (
                                    renderStringLength(watchForm.schedule, 300)
                                ) : (
                                    <FormHelperText sx={{ ml: '15px' }}>0/300</FormHelperText>
                                )}
                                {errors.schedule?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.schedule.message}
                                    </FormHelperText>
                                ) : null}
                            </div>
                            <h2
                                className={
                                    errors.wasteTypes?.message
                                        ? classes.pointForm__subtitle +
                                          ' ' +
                                          classes.pointForm__subtitle_error
                                        : classes.pointForm__subtitle
                                }
                            >
                                Виды вторсырья
                            </h2>
                            <Box sx={{ mb: '30px' }}>
                                <FormControl className={classes.pointForm__checkboxes}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('пластик')
                                                            ? true
                                                            : false
                                                    }
                                                    value="пластик"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('бумага')
                                                            ? true
                                                            : false
                                                    }
                                                    value="бумага"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('стекло')
                                                            ? true
                                                            : false
                                                    }
                                                    value="стекло"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes(
                                                            'электронная и бытовая техника'
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                    value="электронная и бытовая техника"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes(
                                                            'крупногабаритные отходы'
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                    value="крупногабаритные отходы"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('опасные отходы')
                                                            ? true
                                                            : false
                                                    }
                                                    value="опасные отходы"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('металл')
                                                            ? true
                                                            : false
                                                    }
                                                    value="металл"
                                                    {...register('wasteTypes', {
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
                                                    defaultChecked={
                                                        props.wasteTypes &&
                                                        props.wasteTypes.includes('ветошь')
                                                            ? true
                                                            : false
                                                    }
                                                    value="ветошь"
                                                    {...register('wasteTypes', {
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
                                {errors.wasteTypes?.message ? (
                                    <FormHelperText sx={{ ml: '15px', color: 'red' }}>
                                        {errors.wasteTypes.message}
                                    </FormHelperText>
                                ) : null}
                            </Box>
                            <div className={classes.pointForm__textareaBox}>
                                <label
                                    className={
                                        errors.coordinates?.message
                                            ? classes.pointForm__textareaLabel +
                                              ' ' +
                                              classes.pointForm__textareaLabel_error
                                            : classes.pointForm__textareaLabel
                                    }
                                    htmlFor="coordinates"
                                >
                                    Координаты пункта приема вторсырья{' '}
                                </label>
                                <TextareaAutosize
                                    id="coordinates"
                                    className={
                                        errors.coordinates?.message
                                            ? classes.pointForm__textarea +
                                              ' ' +
                                              classes.pointForm__textarea_error
                                            : classes.pointForm__textarea
                                    }
                                    aria-label="Координаты пункта приема вторсырья "
                                    {...register('coordinates', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^(0|[1-9]+)(?:[.]\d*|)\s?(0|[1-9]+)(?:[.]\d*|)$/,
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
                            </div>
                            <h2 className={classes.pointForm__subtitle}>Статус</h2>
                            <RadioGroup
                                sx={{ mb: '48px', alignItems: 'flex-start' }}
                                aria-labelledby="Статус"
                                defaultValue={props.display ? props.display : null}
                                name="status-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value={!!true}
                                    control={<Radio {...register('display', { required: true })} />}
                                    label="Отображать на карте"
                                />
                                <FormControlLabel
                                    value={!!false}
                                    control={<Radio {...register('display', { required: true })} />}
                                    label="Не отображать на карте"
                                />
                            </RadioGroup>
                            <Box className={classes.pointForm__buttons}>
                                <Button type="submit" variant="contained" sx={{ mr: '16px' }}>
                                    Сохранить
                                </Button>
                                <Button type="button" variant="text">
                                    Отменить
                                </Button>
                            </Box>
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                open={open}
                                autoHideDuration={3000}
                                onClose={handleClose}
                                key={vertical + horizontal}
                            >
                                <Alert
                                    onClose={handleClose}
                                    sx={{
                                        width: '100%',
                                        background: '#EDF7ED',
                                        color: '#1E4620'
                                    }}
                                >
                                    {Object.keys(props).length === 0
                                        ? 'Новый пункт приема добавлен успешно'
                                        : 'Пункт приема успешно обновлен'}
                                </Alert>
                            </Snackbar>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PointForm;
