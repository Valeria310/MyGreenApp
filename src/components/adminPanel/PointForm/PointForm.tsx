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
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { waste } from 'src/constants/MapState';

import classes from './PointForm.module.scss';

type dataAPI = {
    id: number;
    name: string | undefined;
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
    info: string;
};

type FormValues = {
    title: string;
    website: string;
    address: string;
    phone: string;
    schedule: string;
    coordinates?: string | undefined;
    wasteTypes: string[];
    display: boolean | string | undefined;
    id: number | undefined;
    info: string | undefined;
    longitude: number;
    latitude: number;
};

interface State extends SnackbarOrigin {
    open: boolean;
}

const PointForm: React.FC<Partial<dataAPI>> = (props) => {
    const navigate = useNavigate();
    const [tableData, setTableData] = React.useState<dataAPI[]>([]);

    // List of all points
    async function getData() {
        try {
            const response = await axios.get('https://31.184.254.112:8081/recycling-points/');
            setTableData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        getData();
    }, []);

    // Popup
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

    // Form validation
    const form = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues: {
            title: props ? props.name : '',
            website: props ? props.website : '',
            address: props ? props.address : '',
            phone: props ? props.phoneNumber : '',
            schedule: props ? props.workingHours : '',
            wasteTypes: props ? props.recyclableTypes : [],
            coordinates: props.location
                ? props.location.latitude.toString() + ' ' + props.location.longitude.toString()
                : '',
            display: props ? props.displayed : false,
            id: props ? props.id : tableData[tableData.length - 1].id + 1,
            info: props ? props.info : ''
        }
    });

    const { register, handleSubmit, formState, watch } = form;
    const { errors, isValid } = formState;
    let { isDirty } = formState;

    if (props.id) {
        isDirty = true;
    }

    const onSubmit = (data: FormValues) => {
        const resultData: FormValues = { ...data };

        if (data.coordinates) {
            const latLong = data.coordinates.split(' ');
            resultData.latitude = Number(latLong[0]);
            resultData.longitude = Number(latLong[1]);
            delete resultData.coordinates;
        }
        resultData.display = toBoolean(resultData.display);
        resultData.id = data.id ? data.id : tableData[tableData.length - 1].id + 1;
        resultData.info = data.info ? data.info : '';

        const newPoint: dataAPI = {
            id: resultData.id,
            name: resultData.title,
            website: resultData.website,
            address: resultData.address,
            workingHours: resultData.schedule,
            phoneNumber: resultData.phone,
            location: {
                latitude: resultData.latitude,
                longitude: resultData.longitude
            },
            info: resultData.info,
            recyclableTypes: resultData.wasteTypes,
            displayed: Boolean(resultData.display)
        };
        console.log('=== Result data to database:', newPoint);

        const isPointExists = tableData.some((point) => point.id === newPoint.id);

        if (isPointExists) {
            // method PATCH
            console.log('== Should update info with method PATCH');
        } else {
            // method POST
            console.log('== Should add new info with method POST');
        }

        setState({ ...state, open: true });
        setTimeout(() => navigate(-1), 1500);
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

    const wasteWithoutAll = waste.slice(1);

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
                                    maxLength={100}
                                    aria-label="Наименование организации"
                                    {...register('title', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,"().№ ]+$/,
                                            message: 'Некорректное значение'
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
                                    maxLength={50}
                                    {...register('website', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:.]+$/,
                                            message: 'Некорректное значение'
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
                                    maxLength={100}
                                    {...register('address', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,"№(). ]+$/,
                                            message: 'Некорректное значение'
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
                                    maxLength={100}
                                    {...register('phone', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-() ]+$/,
                                            message: 'Некорректное значение'
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
                                    maxLength={300}
                                    {...register('schedule', {
                                        pattern: {
                                            value: /^[A-Za-zА-ЯЁа-яё0-9-/:,;(). ]+$/,
                                            message: 'Некорректное значение'
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
                                        {wasteWithoutAll
                                            .slice(0, Math.ceil(wasteWithoutAll.length / 2))
                                            .map((item) => (
                                                <FormControlLabel
                                                    key={item}
                                                    control={
                                                        <Checkbox
                                                            defaultChecked={
                                                                props.recyclableTypes &&
                                                                props.recyclableTypes.includes(item)
                                                                    ? true
                                                                    : false
                                                            }
                                                            value={item}
                                                            {...register('wasteTypes', {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'Указание вида вторсырья обязательно'
                                                                }
                                                            })}
                                                        />
                                                    }
                                                    label={item[0].toUpperCase() + item.slice(1)}
                                                />
                                            ))}
                                    </FormGroup>
                                    <FormGroup>
                                        {wasteWithoutAll
                                            .slice(Math.ceil(wasteWithoutAll.length / 2))
                                            .map((item) => (
                                                <FormControlLabel
                                                    key={item}
                                                    control={
                                                        <Checkbox
                                                            defaultChecked={
                                                                props.recyclableTypes &&
                                                                props.recyclableTypes.includes(item)
                                                                    ? true
                                                                    : false
                                                            }
                                                            value={item}
                                                            {...register('wasteTypes', {
                                                                required: {
                                                                    value: true,
                                                                    message:
                                                                        'Указание вида вторсырья обязательно'
                                                                }
                                                            })}
                                                        />
                                                    }
                                                    label={item[0].toUpperCase() + item.slice(1)}
                                                />
                                            ))}
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
                                    aria-label="Координаты пункта приема вторсырья"
                                    maxLength={100}
                                    {...register('coordinates', {
                                        required: {
                                            value: true,
                                            message: 'Обязательное поле'
                                        },
                                        pattern: {
                                            value: /^(?!.*\.$)(0|[1-9]+)(?:[.]\d*|)\s?(0|[1-9]+)(?:[.]\d*|)$/,
                                            message: 'Некорректное значение'
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
                                defaultValue={props.displayed ? props.displayed : true}
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mr: '16px' }}
                                    disabled={!isDirty || !isValid}
                                >
                                    Сохранить
                                </Button>
                                <Button onClick={() => navigate(-1)} type="button" variant="text">
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
