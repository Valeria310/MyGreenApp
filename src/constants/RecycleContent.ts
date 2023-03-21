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
  status: string;
  color: 'Red' | 'Green';
}

export interface RecycleContent {
  recycleType: string;
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
      status: 'Подлежит переработке',
      color: 'Green'
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
      status: 'Подлежит переработке',
      color: 'Green'
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
      status: 'Подлежит переработке',
      color: 'Green'
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
      status: 'Подлежит переработке',
      color: 'Green'
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
      status: 'Подлежит переработке',
      color: 'Green'
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
      status: 'Не подлежит переработке',
      color: 'Red'
    }
  ]
}
