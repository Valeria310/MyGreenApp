export const waste: Array<filterType> = [
    'все',
    'бумага',
    'ветошь',
    'вторая жизнь',
    'металл',
    'пластик',
    'стекло',
    'одежда',
    'обувь',
    'электронная и бытовая техника',
    'крупногабаритные отходы',
    'опасные отходы'
];

export type filterType =
    | 'все'
    | 'ветошь'
    | 'пластик'
    | 'бумага'
    | 'стекло'
    | 'электронная и бытовая техника'
    | 'крупногабаритные отходы'
    | 'опасные отходы'
    | 'металл'
    | 'вторая жизнь'
    | 'одежда'
    | 'обувь';

export type FilterButtonsObjType = {
    id: string;
    wasteTitle: filterType;
    isActive: boolean;
};

export const filterButtonsState: Array<FilterButtonsObjType> = [
    { id: 'all', wasteTitle: waste[0], isActive: true },
    { id: 'paper', wasteTitle: waste[1], isActive: true },
    { id: 'rag', wasteTitle: waste[2], isActive: true },
    { id: 'secondLife', wasteTitle: waste[3], isActive: true },
    { id: 'metal', wasteTitle: waste[4], isActive: true },
    { id: 'plastic', wasteTitle: waste[5], isActive: true },
    { id: 'glass', wasteTitle: waste[6], isActive: true },
    { id: 'clothes', wasteTitle: waste[7], isActive: true },
    { id: 'shoes', wasteTitle: waste[8], isActive: true },
    { id: 'electronics', wasteTitle: waste[9], isActive: true },
    { id: 'largeSize', wasteTitle: waste[10], isActive: true },
    { id: 'dangerous', wasteTitle: waste[11], isActive: true }
];

export type MarkerType = {
    id: number;
    title: string;
    website: string;
    address: string;
    schedule: string;
    phone: string;
    latitude: number;
    longitude: number;
    info: string;
    wasteTypes: Array<filterType>;
    display: boolean;
};

export const markersState: Array<MarkerType> = [
    //заводской район

    {
        id: 1,
        title: 'Пункт №29 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Челюскинцев, 30',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 14:00-15:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.871875,
        longitude: 27.647768,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 2,
        title: 'Пункт №33 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Инженерная, 5',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 14:00-15:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.83348436563007,
        longitude: 27.68773289599531,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 3,
        title: 'Пункт №23 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Ротмистрова, 4',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.83799361094503,
        longitude: 27.692638669011455,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 4,
        title: 'Пункт №45 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Краснослабодская, 84',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.84620314128737,
        longitude: 27.6388538825039,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 5,
        title: 'Пункт №57 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Минск, ул. Илимская, 10',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.889611085511014,
        longitude: 27.689247911341926,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 6,
        title: 'Пункт №63 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Минск, ул.Охотская, 172',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.88518435293745,
        longitude: 27.663267926685606,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 7,
        title: 'Пункт №62 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Минск, ул.Свислочская в р-не ГСК Кольцо',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.84428423631147,
        longitude: 27.6696499978478,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Ленинский район
    {
        id: 8,
        title: 'Пункт №56 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, 2-ой Велосипедный пер. 32а',
        schedule:
            'Время работы: Пн-Пт: с 08:00 до 17:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.870835347987665,
        longitude: 27.59076809784901,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 9,
        title: 'Пункт №46 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, Дворищи, 27а',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.848007723926834,
        longitude: 27.59969916901198,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 10,
        title: 'Пункт №36 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Сырокомли,11а',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 12:00-12:30) Сб: с 09:00 до 11:30; вых: Воскресенье',
        phone: '',
        latitude: 53.84459152467073,
        longitude: 27.557944595995792,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 11,
        title: 'Пункт №37 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Бородинская, 2В',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 12:00-12:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.85806037375973,
        longitude: 27.565346684356463,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 12,
        title: 'Пункт №47 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, пер.Чижевских,1в',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.8488364628712,
        longitude: 27.57563092668395,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 13,
        title: 'Пункт №26 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Горовца, 7А',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:30 (обед 12:00-12:30) вых: Суббота, Воскресенье\n',
        phone: '',
        latitude: 53.87203864398408,
        longitude: 27.608102240177065,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 14,
        title: 'Пункт №41 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Либаво-Роменская, 7',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.87370526382918,
        longitude: 27.562664782505177,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 15,
        title: 'Пункт №48 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Семенова, 30/1',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.87094499601029,
        longitude: 27.579046969013053,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 16,
        title: 'Пункт №11 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Тростенецкая, 8',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.88010294157398,
        longitude: 27.580841469013414,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 17,
        title: 'Пункт №32 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Прушинских,23',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.83442613175766,
        longitude: 27.588359682503338,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Московский район
    {
        id: 18,
        title: 'Пункт №25 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Слободская, 137',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:35) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.845445843462734,
        longitude: 27.45891119784785,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 19,
        title: 'Пункт №59 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Слободская, 128',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.8479068071058,
        longitude: 27.442553040176,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 20,
        title: 'Пункт №24 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Харьковская,57б',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.8993626745654,
        longitude: 27.509934469014276,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 21,
        title: 'Пункт №22 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Семашко,17б',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.858172917852905,
        longitude: 27.50222644017642,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 22,
        title: 'Пункт №53 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Декабристов,23',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.88492727740602,
        longitude: 27.51369568250564,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 23,
        title: 'Пункт №50 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. К.Либкнехта,1В (переулок Северный)',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.89801884180123,
        longitude: 27.5329519030399,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 24,
        title: 'Пункт №67 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Н.Орды, 30',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.845217262906466,
        longitude: 27.487500740175808,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 25,
        title: 'Пункт №72 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Волоха, 20а',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.89686556136754,
        longitude: 27.513723455522175,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 26,
        title: 'Пункт №73 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Белецкого, (нап-в ж/д 20)',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.85922345984756,
        longitude: 27.452002527764517,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Октябрьский район

    {
        id: 27,
        title: 'Пункт №2 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Левкова, 35 к.1',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.8752912331619,
        longitude: 27.556236297849225,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 28,
        title: 'Пункт №3 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Вирская, 17а',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.88085629033699,
        longitude: 27.53322079784939,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 29,
        title: 'Пункт №64 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Кижеватова,42а',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.86035402804197,
        longitude: 27.535030540176518,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 30,
        title: 'Пункт №39 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Корженевского, 20Б',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.8388617930306,
        longitude: 27.52873218435555,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 31,
        title: 'Пункт №38 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Серова,1Б',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.84467833500065,
        longitude: 27.540591326683852,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 32,
        title: 'Пункт №69 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Стебенева,21',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.83584596437567,
        longitude: 27.54107266901138,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 33,
        title: 'Пункт №80 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Могилевская, 78',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.88763123866819,
        longitude: 27.556943611341808,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Партизанский район

    {
        id: 34,
        title: 'Пункт №4 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Филимонова¸11/2',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.9114040326628,
        longitude: 27.632101155522825,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 35,
        title: 'Пункт №19 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Карвата,88',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.90386069643135,
        longitude: 27.679064126686466,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 36,
        title: 'Пункт №55 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Клумова,18',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.89185004599931,
        longitude: 27.605059942029996,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 37,
        title: 'Пункт №65 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Почтовая, 16',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.941476228281324,
        longitude: 27.702828070120216,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Первомайский район
    {
        id: 38,
        title: 'Пункт №5 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Никифорова, 20',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.93981381838715,
        longitude: 27.694878611344112,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 39,
        title: 'Пункт №44 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Основателей, 6',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.93950360398698,
        longitude: 27.725608724836096,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 40,
        title: 'Пункт №34 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Гинтовта, 51',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.95461687669093,
        longitude: 27.68792590234492,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 41,
        title: 'Пункт №35 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Кутузова, 10',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:30 (обед 13:00-14:30) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.93430997721137,
        longitude: 27.6264087142978,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 42,
        title: 'Пункт №58 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Скорины, 51',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.93249998145061,
        longitude: 27.699167267460854,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 43,
        title: 'Пункт №61 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, пер. Калинина,16',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.93317969069473,
        longitude: 27.607891485871093,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 44,
        title: 'Пункт №13 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Рогачевская,1',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.9446022950609,
        longitude: 27.719848651503234,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 45,
        title: 'Пункт №49 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, пр-т. Независимости,193А',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.960497,
        longitude: 27.709298,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 46,
        title: 'Пункт №68 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, Пересечение ул.Славинского и 5-го Слепнянского переулка',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:30 (обед 13:00-13:30) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.93899,
        longitude: 27.633177,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 47,
        title: 'Пункт №75 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Кнорина, 59',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.947054,
        longitude: 27.623411,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    // Фрунзенский район
    {
        id: 48,
        title: 'Пункт №6 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, н-в ж/д Лещинского, 17',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.910618,
        longitude: 27.452177,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 49,
        title: 'Пункт №14 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Бирюзова, 7',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.912526,
        longitude: 27.517221,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 50,
        title: 'Пункт №16 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Матусевича,44Б',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-15:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.915944,
        longitude: 27.466638,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 51,
        title: 'Пункт №18 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Академика Жебрака, 31',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:30 (обед 13:00-13:30) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.900318,
        longitude: 27.420848,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 52,
        title: 'Пункт №12 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, Перекресток пер.1-й Короткий - ул. Гурского',
        schedule:
            'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.892931,
        longitude: 27.479354,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 53,
        title: 'Пункт №21 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Горецкого,10',
        schedule:
            'Пн-Пт: с 09:00 до 18:00 (обед 13:00-15:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.882614,
        longitude: 27.453656,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 54,
        title: 'Пункт №30 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Тимошенко (напротив Лынькова,119)',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.920771,
        longitude: 27.470066,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 55,
        title: 'Пункт №66 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск,  ул. Лидская, 22',
        schedule: 'Пн-Пт: с 9:00 до 17:00 (обед 13:00-14:00) Сб: с 9:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.922435,
        longitude: 27.424836,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 56,
        title: 'Пункт №51 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, проезд Масюковщина, 4',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.92572,
        longitude: 27.451446,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 57,
        title: 'Пункт №52 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, пер. Масюковщина, д.33',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.940064,
        longitude: 27.437369,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 58,
        title: 'Пункт №7 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Домбровская, 33',
        schedule: 'Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.913794,
        longitude: 27.456162,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 59,
        title: 'Пункт №54 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Панченко,78',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.893754,
        longitude: 27.414491,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 60,
        title: 'Пункт №70 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Лынькова (напротив ж/д 3)',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.927148,
        longitude: 27.501533,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 61,
        title: 'Пункт №71 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Пономаренко, 75',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.893604,
        longitude: 27.468778,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 62,
        title: 'Пункт №76 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Шаранговича, 79',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.879997,
        longitude: 27.425557,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 63,
        title: 'Пункт №82 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Притыцкого, 62',
        schedule: 'Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.909675,
        longitude: 27.462732,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    //Советский район
    {
        id: 64,
        title: 'Пункт №27 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Зеленолугская,44',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.968237,
        longitude: 27.58852,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 65,
        title: 'Пункт №43 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Некрасова, 109',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.94049,
        longitude: 27.572632,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 66,
        title: 'Пункт №42 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, 4 пер. Кольцова, 53/2',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:30) Сб: с 09:00 до 11:30; вых: Воскресенье',
        phone: '',
        latitude: 53.953315,
        longitude: 27.597728,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    // Центральный район
    {
        id: 67,
        title: 'Пункт №8 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Будславская, 4',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.959294,
        longitude: 27.537586,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },
    {
        id: 68,
        title: 'Пункт №77 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Нововиленская, 38',
        schedule:
            'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.938061,
        longitude: 27.532338,
        info: '',
        wasteTypes: [waste[5], waste[1], waste[6], waste[9], waste[4]],
        display: false
    },

    // Dana Mall, Green, Галерея (ветошь, одежда, обувь)
    {
        id: 69,
        title: 'Zara Home',
        website: 'http://zarahome.com',
        address: 'ул. Петра Мстиславца 11, Минск, ТЦ Dana Mall',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173179357',
        latitude: 53.93410387851436,
        longitude: 27.653298448346085,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 70,
        title: 'Bershka',
        website: 'https://www.bershka.com/by',
        address: 'ул. Петра Мстиславца 11, Минск, ТЦ Dana Mall',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173179357',
        latitude: 53.944316307444474,
        longitude: 27.652867166536645,
        info: '',
        wasteTypes: [waste[2], waste[7], waste[8]],
        display: false
    },
    {
        id: 71,
        title: 'Pull and Bear',
        website: 'https://www.pullandbear.com/by',
        address: 'ул. Петра Мстиславца 11, Минск, ТЦ Dana Mall',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173189561',
        latitude: 53.9416659363358,
        longitude: 27.649433092976533,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 72,
        title: 'Stradivarius',
        website: 'https://www.stradivarius.com/by',
        address: 'ул. Петра Мстиславца 11, Минск, ТЦ Dana Mall',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173179357',
        latitude: 53.9432018990384,
        longitude: 27.651417885973746,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 73,
        title: 'Zara',
        website: 'https://www.zara.com',
        address: 'ул. Петра Мстиславца 11, Минск, ТЦ Dana Mall',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173189508',
        latitude: 53.9432018990384,
        longitude: 27.651417885973746,
        info: '',
        wasteTypes: [waste[2], waste[7], waste[8]],
        display: false
    },
    {
        id: 74,
        title: 'Bershka',
        website: 'https://www.bershka.com/by',
        address: 'ул. Притыцкого 156, Минск, ТЦ Грин',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173182833',
        latitude: 53.913100900691404,
        longitude: 27.430417892986878,
        info: '',
        wasteTypes: [waste[2], waste[7], waste[8]],
        display: false
    },
    {
        id: 75,
        title: 'Stradivarius',
        website: 'https://www.stradivarius.com/by',
        address: 'ул. Притыцкого 156, Минск, ТЦ Грин',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173183964',
        latitude: 53.91745794066307,
        longitude: 27.426981925708215,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 76,
        title: 'Stradivarius',
        website: 'https://www.stradivarius.com/by',
        address: 'пр-т Победителей, 9, Минск, ТЦ Галерея',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173183973',
        latitude: 53.91732824203759,
        longitude: 27.54704776887465,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 77,
        title: 'Zara',
        website: 'https://www.zara.com',
        address: 'ул. Притыцкого 156, Минск, ТЦ Грин',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173184602',
        latitude: 53.91786014543953,
        longitude: 27.432454804524365,
        info: '',
        wasteTypes: [waste[2], waste[7], waste[8]],
        display: false
    },
    {
        id: 78,
        title: 'Pull and Bear',
        website: 'https://www.pullandbear.com/by',
        address: 'ул. Притыцкого 156, Минск, ТЦ Грин',
        schedule: 'Пн-вс: 10.00-22.00',
        phone: '80173184602',
        latitude: 53.91664913291397,
        longitude: 27.43041515324437,
        info: '',
        wasteTypes: [waste[2], waste[7]],
        display: false
    },
    {
        id: 79,
        title: 'Смартикон',
        website: 'https://Smartikon.by',
        address: 'пер. Калинина 5а, Минск',
        schedule: 'Пн.-Пт.: 8.00-18.00; Сб.-Вс.: выходные',
        phone: '+375 (44) 511-50-46 (для физических лиц) +375 (17) 399-26-20 (для юрид.лиц)',
        latitude: 53.93052962475156,
        longitude: 27.60463875287562,
        info: '',
        wasteTypes: [waste[2]],
        display: false
    },
    {
        id: 80,
        title: 'Kali Laska',
        website: 'https://www.instagram.com/kalilaska/',
        address: 'ул. Ольшевского 1к4, Минск',
        schedule: 'Пт, Сб: 12.00-20.00',
        phone: '',
        latitude: 53.91299586102698,
        longitude: 27.505796610546508,
        info: '',
        wasteTypes: [waste[9]],
        display: false
    },
    {
        id: 84,
        title: 'Католическое общество Сaritas',
        website: 'https://www.caritas.by/be/aboutus/mma',
        address: 'Мінскі р-н, в. Ляскоўка, вул. Карытас, 1',
        schedule: '',
        phone: '+ 375 (17) 515 31 08',
        latitude: 54.005936629253696,
        longitude: 27.719191582080125,
        info: '',
        wasteTypes: [waste[9]],
        display: false
    },
    {
        id: 85,
        title: 'Центр поддержки семьи и материнства Матуля',
        website: '',
        address: 'Минск, ул.Лидская 3',
        schedule: 'Церковь,  с 8.00-21.00',
        phone: '',
        latitude: 53.92126979056652,
        longitude: 27.435941483563354,
        info: '',
        wasteTypes: [waste[9]],
        display: false
    },
    {
        id: 87,
        title: 'Полигон "Тростенецкий"',
        website: 'https://ekores.by',
        address: 'г.Минск, ул.Павловского, 7',
        schedule: 'Ежедневно 8:00 – 20:00',
        phone: '+375 17 343-90-42, +375 17 342-60-32',
        latitude: 53.84776097130637,
        longitude: 27.751172309352977,
        info: '',
        wasteTypes: [waste[10]],
        display: false
    },
    {
        id: 88,
        title: 'Поликлиника №1 (контейнер)',
        website: '',
        address: 'Минск, ул. Сухая 6',
        schedule: '',
        phone: '',
        latitude: 53.90365771444158,
        longitude: 27.537873010545866,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 89,
        title: 'Поликлиника №3 (контейнер)',
        website: '',
        address: 'Минск, ул. Воронянского, 13/2',
        schedule: '',
        phone: '',
        latitude: 53.90365771444158,
        longitude: 27.537873010545866,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 90,
        title: 'Поликлиника №4 (контейнер)',
        website: '',
        address: 'Минск, пр-т Победителей, 93',
        schedule: '',
        phone: '',
        latitude: 53.93358713136268,
        longitude: 27.50108805287594,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 91,
        title: 'Поликлиника №5 (контейнер)',
        website: '',
        address: 'Минск, ул. Есенина, 21',
        schedule: '',
        phone: '',
        latitude: 53.8498495070768,
        longitude: 27.457682568214125,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 92,
        title: 'Поликлиника №7 (контейнер)',
        website: '',
        address: 'Минск, ул.Станиславского,32',
        schedule: '',
        phone: '',
        latitude: 53.88716576253266,
        longitude: 27.591821568216762,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 93,
        title: 'Поликлиника №8 (контейнер)',
        website: '',
        address: 'Минск, ул. Никифирова, 3',
        schedule: '',
        phone: '',
        latitude: 53.88261945678313,
        longitude: 27.608561539380435,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 94,
        title: 'Поликлиника №9 (контейнер)',
        website: '',
        address: 'Минск, ул. Щербакова, 1',
        schedule: '',
        phone: '',
        latitude: 53.88264475285694,
        longitude: 27.608561539380435,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 95,
        title: 'Поликлиника №10 (контейнер)',
        website: '',
        address: 'Минск, ул. Сухаревская, 19',
        schedule: '',
        phone: '',
        latitude: 53.88611624235541,
        longitude: 27.434805968216672,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 96,
        title: 'Поликлиника №12 (контейнер)',
        website: '',
        address: 'Минск, ул. Ольшевского, 61',
        schedule: '',
        phone: '',
        latitude: 53.92276876738205,
        longitude: 27.48963493938325,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 96,
        title: 'Поликлиника №13 (контейнер)',
        website: '',
        address: 'Минск, ул. Ломоносова, 3',
        schedule: '',
        phone: '',
        latitude: 53.931016389771585,
        longitude: 27.59762615472799,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 97,
        title: 'Поликлиника №14 (контейнер)',
        website: '',
        address: 'Минск, ул. Фроликова, 2',
        schedule: '',
        phone: '',
        latitude: 53.904391887062644,
        longitude: 27.610386097054022,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 98,
        title: 'Поликлиника №15 (контейнер)',
        website: '',
        address: 'Минск, ул. Р.Люксембург, 112',
        schedule: '',
        phone: '',
        latitude: 53.89141037104772,
        longitude: 27.515144713890265,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 99,
        title: 'Поликлиника №17 (контейнер)',
        website: '',
        address: 'Минск, ул. Герасименко, 49',
        schedule: '',
        phone: '',
        latitude: 53.884610723171996,
        longitude: 27.68034283938058,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 100,
        title: 'Поликлиника №19 (контейнер)',
        website: '',
        address: 'Минск, пр-т Независимости, 119',
        schedule: '',
        phone: '',
        latitude: 53.93450032832208,
        longitude: 27.635788568220185,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 101,
        title: 'Поликлиника №20 (контейнер)',
        website: '',
        address: 'Минск, пр-т Пушкина, 16',
        schedule: '',
        phone: '',
        latitude: 53.9002736995233,
        longitude: 27.498124739381677,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 102,
        title: 'Поликлиника №22 (контейнер)',
        website: '',
        address: 'Минск, ул. Ташкентская, 5',
        schedule: '',
        phone: '',
        latitude: 53.83609144902855,
        longitude: 27.629798139377097,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 103,
        title: 'Поликлиника №23 (контейнер)',
        website: '',
        address: 'Минск, пр-т Рокоссовского, 134',
        schedule: '',
        phone: '',
        latitude: 53.8545060096706,
        longitude: 27.60432995472259,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 104,
        title: 'Поликлиника №25 (контейнер)',
        website: '',
        address: 'Минск, ул. Рафиева, 60',
        schedule: '',
        phone: '',
        latitude: 53.86321809254135,
        longitude: 27.443969383559253,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 105,
        title: 'Поликлиника №30 (контейнер)',
        website: '',
        address: 'Минск, ул. Кольцова, 53/2',
        schedule: '',
        phone: '',
        latitude: 53.95154128518595,
        longitude: 27.60211763938522,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 106,
        title: 'Поликлиника №31 (контейнер)',
        website: '',
        address: 'Минск, ул. Бурдейного, 4',
        schedule: '',
        phone: '',
        latitude: 53.90457602435662,
        longitude: 27.458670683562236,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 107,
        title: 'Поликлиника №33 (контейнер)',
        website: '',
        address: 'Минск, ул. Сурганова, 45/4',
        schedule: '',
        phone: '',
        latitude: 53.926045639002126,
        longitude: 27.58669813938345,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 108,
        title: 'Поликлиника №34 (контейнер)',
        website: '',
        address: 'Минск, ул. Кульман, 22',
        schedule: '',
        phone: '',
        latitude: 53.92413948057831,
        longitude: 27.57746995287522,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 109,
        title: 'Поликлиника №35 (контейнер)',
        website: '',
        address: 'Минск, ул. Серова, 15',
        schedule: '',
        phone: '',
        latitude: 53.84800345762384,
        longitude: 27.54933136821407,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 110,
        title: 'Поликлиника №37 (контейнер)',
        website: '',
        address: 'Минск, ул. Янки Лучины, 28',
        schedule: '',
        phone: '',
        latitude: 53.839066215271835,
        longitude: 27.57728158355763,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    },
    {
        id: 111,
        title: 'Поликлиника №40 (контейнер)',
        website: '',
        address: 'Минск, ул. Люцинская, 3',
        schedule: '',
        phone: '',
        latitude: 53.93210930317946,
        longitude: 27.440373370072386,
        info: '',
        wasteTypes: [waste[11]],
        display: false
    }
];
