import plasticIcon from '../assets/icons/plastic-icon.svg';

interface RecycleInfoDescription {
  id: number;
  text: string;
}

interface RecycleInfo {
  id: number;
  name: string;
  image: string;
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
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Большинство пластиковых бутылок для напитков и упаковки для пищевых продуктов.'
        },
        {
          id: 2,
          text: 'Упаковка косметической продукции.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 2,
      name: 'Полиэтилен низкого давления',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Многоразовая тара.'
        },
        {
          id: 2,
          text: 'Бутылки для шампуней и бытовой химии.'
        },
        {
          id: 3,
          text: 'Тара для пищевых продуктов и напитков.'
        },
        {
          id: 4,
          text: 'Детские игрушки.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 3,
      name: 'Поливинил-хлорид',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Строительные материалы (окна, трубы, шланги, натяжные потолки и т.д.).'
        },
        {
          id: 2,
          text: 'Детские игрушки.'
        },
        {
          id: 3,
          text: 'Автомобильные запчасти.'
        },
        {
          id: 4,
          text: 'Пищевая пленка.'
        },
        {
          id: 5,
          text: 'Искусственная кожа.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 4,
      name: 'Полиэтилен высокого давления',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Твердые пластмассовые изделия.'
        },
        {
          id: 2,
          text: 'Канистры, ведра.'
        },
        {
          id: 3,
          text: 'Пластиковые пакеты.'
        },
        {
          id: 4,
          text: 'Мусорные мешки.'
        },
        {
          id: 5,
          text: 'Пленки.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 5,
      name: 'Полипропилен',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Упаковки для йогуртов, молочных продуктов.'
        },
        {
          id: 2,
          text: 'Пленки.'
        },
        {
          id: 3,
          text: 'Корпуса техники.'
        },
        {
          id: 4,
          text: 'Пластиковое медицинское оборудование.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 6,
      name: 'Полистирол\nи прочие пластики\n(PC, O, OTHER)',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Одноразовая посуда. Стаканчики и контейнеры для быстрого питания. Термопосуда Пищевая упаковка.'
        },
        {
          id: 2,
          text: 'Пенопласт. Смеси пластиков. Поликарбонат.'
        },
        {
          id: 3,
          text: 'Детские бутылочки и грушки.'
        }
      ],
      status: 'Не подлежит переработке'
    }
  ]
}

export const PaperContent: RecycleContent = {
  recycleType: 'paper',
  columns: [
    {
      id: 1,
      name: 'Бумажная упаковка\nи Тетра-пак',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Картон (в т.ч. цветной).\nУпаковка без блестящих включений, липкой ленты, пленки.\nЧистая бумажная упаковка.\nБумажные пакеты (от муки и сахара)\nКоробки от косметики.\nБумажные конфети, из шредера.\nВтулки от туалетной бумаги и бумажных полотенец.\nУпаковка от соков и молока'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 2,
      name: 'Блокноты, тетради, книги, печатная\nи офисная продукция',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Блокноты\nТетради\nЕжедневники\nКниги\nГазеты'
        },
        {
          id: 2,
          text: 'Рекламные буклеты и брошюры'
        },
        {
          id: 3,
          text: 'Глянцевые\nжурналы'
        },
        {
          id: 4,
          text: 'Инструкции'
        },
        {
          id: 5,
          text: 'Писчая бумага'
        },
        {
          id: 6,
          text: 'Календари'
        },
        {
          id: 7,
          text: 'Конверты без пластиковых\nокошек'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 3,
      name: 'Ламинирован-\nная бумага',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Фотографии\nОбои'
        },
        {
          id: 2,
          text: 'Упаковка пищевых товаров (от сливочного масла, творога, конфет).'
        },
        {
          id: 3,
          text: 'Бумажный скотч.'
        },
        {
          id: 4,
          text: 'Стикеры для заметок.'
        },
        {
          id: 5,
          text: 'Твердые переплеты книг.'
        },
        {
          id: 6,
          text: 'Подарочные блестящие пакеты'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 4,
      name: 'Использован-\nная / грязная бумага',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Использованные салфетки,'
        },
        {
          id: 2,
          text: 'туалетная бумага, бумажные полотенца.'
        },
        {
          id: 3,
          text: 'Грязная или мокрая бумага, картон'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 5,
      name: 'Бумажные стаканы\nи посуда',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Одноразовые бумажные стаканчики.'
        },
        {
          id: 2,
          text: 'Одноразовая бумажная посуда'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 6,
      name: 'Чеки, фиксовая, пергаментная бумага',
      image: plasticIcon,
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
}

export const GlassContent: RecycleContent = {
  recycleType: 'glass',
  columns: [
    {
      id: 1,
      name: 'Бутылки',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Бутылки от:\nнапитков\nпива\nвина\nшампанского\nкрепкого алкоголя'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 2,
      name: 'Стекло',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Стеклянные банки от консерв (закаток и соков).'
        },
        {
          id: 2,
          text: 'Баночки от\nдетского питания,'
        },
        {
          id: 3,
          text: 'Баночки от лекарств.'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 3,
      name: 'Промышлен-ное стекло\nи зеркала',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Оконные'
        },
        {
          id: 2,
          text: 'Мебельные'
        },
        {
          id: 3,
          text: 'Автомобильные'
        },
        {
          id: 4,
          text: 'Армированные'
        },
        {
          id: 5,
          text: 'Зеркала'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 4,
      name: 'Посуда',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Стеклянная'
        },
        {
          id: 2,
          text: 'Жаропрочная'
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
      status: 'Подлежит переработке'
    },
    {
      id: 5,
      name: 'Экраны',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Мониторов'
        },
        {
          id: 2,
          text: 'Телевизоров'
        },
        {
          id: 3,
          text: 'Гаджетов'
        }
      ],
      status: 'Подлежит переработке'
    }
  ]
}

export const LargeContent: RecycleContent = {
  recycleType: 'large',
  columns: [
    {
      id: 1,
      name: 'Крупно-габаритные отходы',
      image: plasticIcon,
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
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Строительный мусор'
        }
      ],
      status: 'Подлежит переработке'
    }
  ]
}

export const DangerContent: RecycleContent = {
  recycleType: 'danger',
  columns: [
    {
      id: 1,
      name: 'Батарейки и аккумуляторы',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Пальчиковые батарейки.'
        },
        {
          id: 2,
          text: 'Многоразовые аккумуляторы.'
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
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Блистеры с лекарствами.'
        },
        {
          id: 2,
          text: 'Ампулы с лекарствами.'
        },
        {
          id: 3,
          text: 'Химические и лекарственнеы отходы'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 3,
      name: 'Автомобиль-ные отходы',
      image: plasticIcon,
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
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Люминесцентные'
        },
        {
          id: 2,
          text: 'Светодиодные'
        }
      ],
      status: 'Подлежит переработке'
    },
    {
      id: 5,
      name: 'Ртуть-содержащие',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Градусники'
        }
      ],
      status: 'Подлежит переработке'
    }
  ]
}

export const ElectroContent: RecycleContent = {
  recycleType: 'electro',
  columns: [
    {
      id: 1,
      name: 'Электронная и бытовая техника',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Стиральная машина'
        },
        {
          id: 2,
          text: 'Телевизор и компьютер.'
        },
        {
          id: 3,
          text: 'Холодильник, плита и другая кухонная техника.'
        },
        {
          id: 4,
          text: 'Музыкальная техника.'
        },
        {
          id: 5,
          text: 'Другая техника.'
        }
      ],
      status: 'Подлежит переработке'
    }
  ]
}

export const MetalContent: RecycleContent = {
  recycleType: 'metal',
  columns: [
    {
      id: 1,
      name: 'Металл',
      image: plasticIcon,
      description: [
        {
          id: 1,
          text: 'Цветной металл (медь, алюминий, цинк, серебро, золото).'
        },
        {
          id: 2,
          text: 'Лом и отходы черных металлов (чугунные изделия и ванны) '
        },
        {
          id: 3,
          text: 'Инструмент. '
        },
        {
          id: 4,
          text: 'Различное оборудование и его корпуса'
        }
      ],
      status: 'Подлежит переработке'
    }
  ]
}