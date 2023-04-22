export const waste:Array<filterType> = ['пластик', 'бумага', 'стекло', 'электронная и бытовая техника', 'крупногабаритные отходы', 'опасные отходы', 'металл'];

export type filterType =
    'все'
    | 'пластик'
    | 'бумага'
    | 'стекло'
    | 'электронная и бытовая техника'
    | 'крупногабаритные отходы'
    | 'опасные отходы'
    | 'металл'



export const markers = [
    //заводской район

    {
        id: 1,
        title: 'Пункт №29 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Челюскинцев, 30',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 14:00-15:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.871875,
        longitude: 27.647768,
        info: 'Some info about point 1',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 2,
        title: 'Пункт №33 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Инженерная, 5',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 14:00-15:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.83348436563007,
        longitude: 27.68773289599531,
        info: 'Some info about point 1',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 3,
        title: 'Пункт №23 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Ротмистрова, 4',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.83799361094503,
        longitude: 27.692638669011455,
        info: 'Some info about point 1',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 4,
        title: 'Пункт №45 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Краснослабодская, 84',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.84620314128737,
        longitude: 27.6388538825039,
        info: 'Some info about point 1',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Ленинский район
    {
        id: 8,
        title: 'Пункт №56 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, 2-ой Велосипедный пер. 32а',
        schedule: 'Время работы: Пн-Пт: с 08:00 до 17:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.870835347987665,
        longitude: 27.59076809784901,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 9,
        title: 'Пункт №46 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, Дворищи, 27а',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.848007723926834,
        longitude: 27.59969916901198,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 10,
        title: 'Пункт №36 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Сырокомли,11а',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 12:00-12:30) Сб: с 09:00 до 11:30; вых: Воскресенье',
        phone: '',
        latitude: 53.84459152467073,
        longitude: 27.557944595995792,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Московский район
    {
        id: 18,
        title: 'Пункт №25 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Слободская, 137',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:35) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.845445843462734,
        longitude: 27.45891119784785,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 19,
        title: 'Пункт №59 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Слободская, 128',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.8479068071058,
        longitude: 27.442553040176,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 20,
        title: 'Пункт №24 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Харьковская,57б',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.8993626745654,
        longitude: 27.509934469014276,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Октябрьский район

    {
        id: 27,
        title: 'Пункт №2 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Левкова, 35 к.1',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.8752912331619,
        longitude: 27.556236297849225,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 28,
        title: 'Пункт №3 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Вирская, 17а',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.88085629033699,
        longitude: 27.53322079784939,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 29,
        title: 'Пункт №64 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Кижеватова,42а',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.86035402804197,
        longitude: 27.535030540176518,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Партизанский район

    {
        id: 34,
        title: 'Пункт №4 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Филимонова¸11/2',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.9114040326628,
        longitude: 27.632101155522825,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 35,
        title: 'Пункт №19 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Карвата,88',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.90386069643135,
        longitude: 27.679064126686466,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 36,
        title: 'Пункт №55 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Клумова,18',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.89185004599931,
        longitude: 27.605059942029996,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Первомайский район
    {
        id: 38,
        title: 'Пункт №5 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Никифорова, 20',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.93981381838715,
        longitude: 27.694878611344112,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 39,
        title: 'Пункт №44 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Основателей, 6',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.93950360398698,
        longitude: 27.725608724836096,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 40,
        title: 'Пункт №34 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Гинтовта, 51',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-14:00) вых: Суббота, Воскресенье',
        phone: '',
        latitude: 53.95461687669093,
        longitude: 27.68792590234492,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    // Фрунзенский район
    {
        id: 48,
        title: 'Пункт №6 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, н-в ж/д Лещинского, 17',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.910618,
        longitude: 27.452177,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 49,
        title: 'Пункт №14 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Бирюзова, 7',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 12:00-13:45) Сб: с 09:00 до 12:45; вых: Воскресенье',
        phone: '',
        latitude: 53.912526,
        longitude: 27.517221,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 50,
        title: 'Пункт №16 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Матусевича,44Б',
        schedule: 'Время работы: Пн-Пт: с 09:00 до 18:00 (обед 13:00-15:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.915944,
        longitude: 27.466638,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    //Советский район
    {
        id: 64,
        title: 'Пункт №27 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Зеленолугская,44',
        schedule: 'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.968237,
        longitude: 27.588520,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 65,
        title: 'Пункт №43 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Некрасова, 109',
        schedule: 'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.940490,
        longitude: 27.572632,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 66,
        title: 'Пункт №42 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, 4 пер. Кольцова, 53/2',
        schedule: 'Пн-Пт: с 09:00 до 17:00 (обед 13:00-13:30) Сб: с 09:00 до 11:30; вых: Воскресенье',
        phone: '',
        latitude: 53.953315,
        longitude: 27.597728,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },

    // Центральный район
    {
        id: 67,
        title: 'Пункт №8 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул. Будславская, 4',
        schedule: 'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.959294,
        longitude: 27.537586,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    },
    {
        id: 68,
        title: 'Пункт №77 ОАО "Белвторресурсы"',
        website: 'https://belvtorresurs.by/',
        address: 'г.Минск, ул.Нововиленская, 38',
        schedule: 'Пн-Пт: с 09:00 до 17:00 (обед 13:00-14:00) Сб: с 09:00 до 14:00; вых: Воскресенье',
        phone: '',
        latitude: 53.959294,
        longitude: 27.537586,
        info: '',
        wasteTypes: [waste[0], waste[1], waste[2], waste[3], waste[6]],
        display: false
    }


];


export type FilterButtonsObjType = {
    id: number,
    wasteTitle: filterType,
    isActive: boolean
}


export const filterButtons:Array<FilterButtonsObjType> = [
    { id: 1, wasteTitle: waste[0], isActive: true },
    { id: 2, wasteTitle: waste[1], isActive: false },
    { id: 3, wasteTitle:  waste[2], isActive: true },
    { id: 4, wasteTitle:  waste[3], isActive: true },
    { id: 5, wasteTitle:  waste[4], isActive: true },
    { id: 6, wasteTitle:  waste[5], isActive: true },
    { id: 7, wasteTitle:  waste[6], isActive: false }
];
