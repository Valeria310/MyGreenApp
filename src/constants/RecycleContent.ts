import accumulator from '../assets/icons/danger/1_accumulator.svg';
import pills from '../assets/icons/danger/2_pills.svg';
import tires from '../assets/icons/danger/3_tires.svg';
import lamp from '../assets/icons/danger/4_lamp.svg';
import thermometer from '../assets/icons/danger/5_thermometer.svg';
import appliance from '../assets/icons/electro/1_appliance.svg';
import glBottles from '../assets/icons/glass/1_bottles.svg';
import jar from '../assets/icons/glass/2_jar.svg';
import mirror from '../assets/icons/glass/3_mirror.svg';
import utensil from '../assets/icons/glass/4_utensil.svg';
import display from '../assets/icons/glass/5_display.svg';
import sofa from '../assets/icons/large/1_sofa.svg';
import garbage from '../assets/icons/large/2_garbage.svg';
import metal from '../assets/icons/metal/1_metal.svg';
import box from '../assets/icons/paper/1_box.svg';
import pack from '../assets/icons/paper/1_pack.svg';
import notepad from '../assets/icons/paper/2_notepad.svg';
import laminated from '../assets/icons/paper/3_laminated.svg';
import used from '../assets/icons/paper/4_used.svg';
import cup from '../assets/icons/paper/5_cup.svg';
import check from '../assets/icons/paper/6_check.svg';
import plBottles from '../assets/icons/plastic/1_bottles.svg';
import PETE from '../assets/icons/plastic/1_PETE.svg';
import HDPE from '../assets/icons/plastic/2_HDPE.svg';
import shampoo from '../assets/icons/plastic/2_shampoo.svg';
import hose from '../assets/icons/plastic/3_hose.svg';
import PVC from '../assets/icons/plastic/3_PVC.svg';
import canister from '../assets/icons/plastic/4_canister.svg';
import LDPE from '../assets/icons/plastic/4_LDPE.svg';
import PP from '../assets/icons/plastic/5_PP.svg';
import yogurt from '../assets/icons/plastic/5_yogurt.svg';
import babyBottle from '../assets/icons/plastic/6_baby-bottle.svg';
import PS from '../assets/icons/plastic/6_PS.svg';
import OTHER from '../assets/icons/plastic/7_OTHER.svg';

interface RecycleInfoDescription {
  id: number;
  text: string;
}

interface RecycleInfoImage {
  id: number;
  url: string;
}

interface RecycleInfo {
  id: number;
  name: string;
  images: RecycleInfoImage[];
  description: RecycleInfoDescription[];
  status: 'Подлежит переработке' | 'Не подлежит переработке';
}

export interface RecycleContent {
  recycleType: 'plastic' | 'paper' | 'glass' | 'large' | 'electro' | 'danger' | 'metal';
  columns: RecycleInfo[];
}

export const PlasticContent: RecycleContent = {
    recycleType: 'plastic',
    columns: [
        {
            id: 1,
            name: 'Полиэтилен-терефталат',
            images: [
                {
                    id: 1,
                    url: PETE
                },
                {
                    id: 2,
                    url: plBottles
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Большинство пластиковых бутылок для напитков и упаковки для пищевых продуктов'
                },
                {
                    id: 2,
                    text: 'Упаковка косметической продукции'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 2,
            name: 'Полиэтилен высокой плотности',
            images: [
                {
                    id: 1,
                    url: HDPE
                },
                {
                    id: 2,
                    url: shampoo
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Многоразовая тара'
                },
                {
                    id: 2,
                    text: 'Бутылки для шампуней и бытовой химии'
                },
                {
                    id: 3,
                    text: 'Тара для пищевых продуктов и напитков'
                },
                {
                    id: 4,
                    text: 'Детские игрушки'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 3,
            name: 'Поливинил-хлорид',
            images: [
                {
                    id: 1,
                    url: PVC
                },
                {
                    id: 2,
                    url: hose
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Строительные материалы (окна, трубы, шланги, натяжные потолки и т.д.)'
                },
                {
                    id: 2,
                    text: 'Детские игрушки'
                },
                {
                    id: 3,
                    text: 'Автомобильные запчасти'
                },
                {
                    id: 4,
                    text: 'Пищевая пленка'
                },
                {
                    id: 5,
                    text: 'Искусственная кожа'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 4,
            name: 'Полиэтилен низкой плотности',
            images: [
                {
                    id: 1,
                    url: LDPE
                },
                {
                    id: 2,
                    url: canister
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Твердые пластмассовые изделия'
                },
                {
                    id: 2,
                    text: 'Канистры, ведра'
                },
                {
                    id: 3,
                    text: 'Пластиковые пакеты'
                },
                {
                    id: 4,
                    text: 'Мусорные мешки'
                },
                {
                    id: 5,
                    text: 'Пленки'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 5,
            name: 'Полипропилен',
            images: [
                {
                    id: 1,
                    url: PP
                },
                {
                    id: 2,
                    url: yogurt
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Упаковки для йогуртов, молочных продуктов'
                },
                {
                    id: 2,
                    text: 'Пленки'
                },
                {
                    id: 3,
                    text: 'Корпуса техники'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 6,
            name: 'Полистирол\nи прочие пластики\n(PC, O, OTHER)',
            images: [
                {
                    id: 1,
                    url: PS
                },
                {
                    id: 2,
                    url: OTHER
                },
                {
                    id: 3,
                    url: babyBottle
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Одноразовая посуда'
                },
                {
                    id: 2,
                    text: 'Стаканчики и контейнеры для быстрого питания'
                },
                {
                    id: 3,
                    text: 'Термопосуда'
                },
                {
                    id: 4,
                    text: 'Пищевая упаковка'
                },
                {
                    id: 5,
                    text: 'Пенопласт'
                },
                {
                    id: 6,
                    text: 'Смеси пластиков'
                },
                {
                    id: 7,
                    text: 'Поликарбонат'
                },
                {
                    id: 8,
                    text: 'Детские бутылочки и грушки'
                }
            ],
            status: 'Не подлежит переработке'
        }
    ]
};

export const PaperContent: RecycleContent = {
    recycleType: 'paper',
    columns: [
        {
            id: 1,
            name: 'Бумажная упаковка\nи Тетра-пак',
            images: [
                {
                    id: 1,
                    url: box
                },
                {
                    id: 2,
                    url: pack
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Картон, в т.ч. цветной'
                },
                {
                    id: 2,
                    text: 'Упаковка без блестящих включений, липкой ленты, пленки'
                },
                {
                    id: 3,
                    text: 'Чистая бумажная упаковка'
                },
                {
                    id: 4,
                    text: 'Бумажные пакеты (от муки и сахара)'
                },
                {
                    id: 5,
                    text: 'Коробки от косметики'
                },
                {
                    id: 6,
                    text: 'Бумажные конфетти, из шредера'
                },
                {
                    id: 7,
                    text: 'Втулки от туалетной бумаги и бумажных полотенец'
                },
                {
                    id: 8,
                    text: 'Упаковка от соков и молока'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 2,
            name: 'Блокноты, тетради, книги, печатная\nи офисная продукция',
            images: [
                {
                    id: 1,
                    url: notepad
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Блокноты'
                },
                {
                    id: 2,
                    text: 'Тетради'
                },
                {
                    id: 3,
                    text: 'Ежедневники'
                },
                {
                    id: 4,
                    text: 'Книги'
                },
                {
                    id: 5,
                    text: 'Газеты'
                },
                {
                    id: 6,
                    text: 'Рекламные буклеты и брошюры'
                },
                {
                    id: 7,
                    text: 'Глянцевые журналы'
                },
                {
                    id: 8,
                    text: 'Инструкции'
                },
                {
                    id: 9,
                    text: 'Писчая бумага'
                },
                {
                    id: 10,
                    text: 'Календари'
                },
                {
                    id: 11,
                    text: 'Конверты без пластиковых окошек'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 3,
            name: 'Ламинирован-\nная бумага',
            images: [
                {
                    id: 1,
                    url: laminated
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Фотографии'
                },
                {
                    id: 2,
                    text: 'Обои'
                },
                {
                    id: 3,
                    text: 'Упаковка пищевых товаров (от сливочного масла, творога, конфет)'
                },
                {
                    id: 4,
                    text: 'Бумажный скотч'
                },
                {
                    id: 5,
                    text: 'Стикеры для заметок'
                },
                {
                    id: 6,
                    text: 'Твердые переплеты книг'
                },
                {
                    id: 7,
                    text: 'Подарочные блестящие пакеты'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 4,
            name: 'Использованная или грязная бумага',
            images: [
                {
                    id: 1,
                    url: used
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Использованные салфетки'
                },
                {
                    id: 2,
                    text: 'Туалетная бумага, бумажные полотенца'
                },
                {
                    id: 3,
                    text: 'Грязная или мокрая бумага, картон'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 5,
            name: 'Бумажные стаканы\nи посуда',
            images: [
                {
                    id: 1,
                    url: cup
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Одноразовые бумажные стаканчики'
                },
                {
                    id: 2,
                    text: 'Одноразовая бумажная посуда'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 6,
            name: 'Чеки, факсовая, пергаментная бумага',
            images: [
                {
                    id: 1,
                    url: check
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Чеки'
                },
                {
                    id: 2,
                    text: 'Факсовая бумага'
                },
                {
                    id: 3,
                    text: 'Пергаментная бумага'
                }
            ],
            status: 'Не подлежит переработке'
        }
    ]
};

export const GlassContent: RecycleContent = {
    recycleType: 'glass',
    columns: [
        {
            id: 1,
            name: 'Бутылки',
            images: [
                {
                    id: 1,
                    url: glBottles
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Бутылки от напитков, пива, вина, шампанского, крепкого алкоголя'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 2,
            name: 'Стекло',
            images: [
                {
                    id: 1,
                    url: jar
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Стеклянные банки от консервов (закаток и соков)'
                },
                {
                    id: 2,
                    text: 'Баночки от детского питания'
                },
                {
                    id: 3,
                    text: 'Баночки от лекарств'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 3,
            name: 'Промышленное стекло и зеркала',
            images: [
                {
                    id: 1,
                    url: mirror
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Оконные стекла'
                },
                {
                    id: 2,
                    text: 'Мебельные стекла'
                },
                {
                    id: 3,
                    text: 'Автомобильные стекла'
                },
                {
                    id: 4,
                    text: 'Армированные стекла'
                },
                {
                    id: 5,
                    text: 'Зеркала'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 4,
            name: 'Посуда',
            images: [
                {
                    id: 1,
                    url: utensil
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Стеклянная посуда'
                },
                {
                    id: 2,
                    text: 'Жаропрочная посуда'
                },
                {
                    id: 3,
                    text: 'Хрусталь'
                },
                {
                    id: 4,
                    text: 'Керамика'
                },
                {
                    id: 5,
                    text: 'Фарфор'
                }
            ],
            status: 'Не подлежит переработке'
        },
        {
            id: 5,
            name: 'Экраны',
            images: [
                {
                    id: 1,
                    url: display
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Экраны мониторов'
                },
                {
                    id: 2,
                    text: 'Экраны телевизоров'
                },
                {
                    id: 3,
                    text: 'Экраны телефонов'
                },
                {
                    id: 4,
                    text: 'Экраны планшетов'
                }
            ],
            status: 'Не подлежит переработке'
        }
    ]
};

export const LargeContent: RecycleContent = {
    recycleType: 'large',
    columns: [
        {
            id: 1,
            name: 'Крупно-габаритные отходы',
            images: [
                {
                    id: 1,
                    url: sofa
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Диваны'
                },
                {
                    id: 2,
                    text: 'Шкафы'
                },
                {
                    id: 3,
                    text: 'Другие габаритные предметы'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 2,
            name: 'Строительный мусор',
            images: [
                {
                    id: 1,
                    url: garbage
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Строительный мусор'
                }
            ],
            status: 'Подлежит переработке'
        }
    ]
};

export const DangerContent: RecycleContent = {
    recycleType: 'danger',
    columns: [
        {
            id: 1,
            name: 'Батарейки и аккумуляторы',
            images: [
                {
                    id: 1,
                    url: accumulator
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Пальчиковые батарейки'
                },
                {
                    id: 2,
                    text: 'Многоразовые аккумуляторы'
                },
                {
                    id: 3,
                    text: 'Литий-ионные батареи'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 2,
            name: 'Лекарства',
            images: [
                {
                    id: 1,
                    url: pills
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Блистеры с лекарствами'
                },
                {
                    id: 2,
                    text: 'Ампулы с лекарствами'
                },
                {
                    id: 3,
                    text: 'Химические и лекарственные отходы'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 3,
            name: 'Автомобильные отходы',
            images: [
                {
                    id: 1,
                    url: tires
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Шины'
                },
                {
                    id: 2,
                    text: 'Масла'
                },
                {
                    id: 3,
                    text: 'Аккумуляторы'
                },
                {
                    id: 4,
                    text: 'Катализаторы'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 4,
            name: 'Лампы',
            images: [
                {
                    id: 1,
                    url: lamp
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Люминесцентные лампы'
                },
                {
                    id: 2,
                    text: 'Светодиодные лампы'
                }
            ],
            status: 'Подлежит переработке'
        },
        {
            id: 5,
            name: 'Ртуть-содержащие',
            images: [
                {
                    id: 1,
                    url: thermometer
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Градусники'
                }
            ],
            status: 'Подлежит переработке'
        }
    ]
};

export const ElectroContent: RecycleContent = {
    recycleType: 'electro',
    columns: [
        {
            id: 1,
            name: 'Электронная и бытовая техника',
            images: [
                {
                    id: 1,
                    url: appliance
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Стиральная машина'
                },
                {
                    id: 2,
                    text: 'Телевизор и компьютер'
                },
                {
                    id: 3,
                    text: 'Холодильник, плита и другая кухонная техника'
                },
                {
                    id: 4,
                    text: 'Музыкальная техника'
                },
                {
                    id: 5,
                    text: 'Другая техника'
                }
            ],
            status: 'Подлежит переработке'
        }
    ]
};

export const MetalContent: RecycleContent = {
    recycleType: 'metal',
    columns: [
        {
            id: 1,
            name: 'Металл',
            images: [
                {
                    id: 1,
                    url: metal
                }
            ],
            description: [
                {
                    id: 1,
                    text: 'Цветной металл (медь, алюминий, цинк, серебро, золото)'
                },
                {
                    id: 2,
                    text: 'Лом и отходы черных металлов (чугунные изделия и ванны)'
                },
                {
                    id: 3,
                    text: 'Инструмент'
                },
                {
                    id: 4,
                    text: 'Аллюминивые банки'
                },
                {
                    id: 5,
                    text: 'Различное оборудование и его корпуса'
                }
            ],
            status: 'Подлежит переработке'
        }
    ]
};
