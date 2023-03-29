import img1 from '../assets/images/card1.jpg';
import img2 from '../assets/images/card2.jpg';

interface NavCardContent {
    id: number;
    text: string;
}

export interface NavCard {
    heading: string;
    image: string;
    content: NavCardContent[];
    buttonValue: string;
    href: string;
}

export const NavCards: NavCard[] = [
    {
        heading: 'Сортировка отходов',
        image: img1,
        content: [
            {
                id: 1,
                text: 'Сортировка отходов очень важна — она позволяет более эффективно использовать и перерабатывать отходы. Это позволяет сократить потребление природных ресурсов и снизить выбросы загрязняющих веществ в атмосферу.'
            },
            {
                id: 2,
                text: 'Ознакомившись с правилами и рекомендациями, которые мы подготовили для вас в удобном формате, вам нужно придерживаться их при каждой сортировке ваших отходов.'
            }
        ],
        buttonValue: 'Куда сдать',
        href: '#map'
    },
    {
        heading: 'Переработка отходов',
        image: img2,
        content: [
            {
                id: 1,
                text: 'Чтобы защитить нашу природу — важно брать на себя ответственность за управление своими отходами.'
            },
            {
                id: 2,
                text: 'Вывоз отходов в специальные точки приема — один из способов сделать это.'
            }
        ],
        buttonValue: 'Что перерабатываем',
        href: '#recycle'
    }
]