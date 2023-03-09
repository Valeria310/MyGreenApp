import img1 from '../assets/images/card1.jpg';
import img2 from '../assets/images/card2.jpg';

export interface NavCard {
    image: string;
    text: string;
    buttonValue: string;
    href: string;
}

export const NavCards: NavCard[] = [
    {
        image: img1,
        text: 'оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент',
        buttonValue: 'Куда сдать?',
        href: '#map'
    },
    {
        image: img2,
        text: 'оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент',
        buttonValue: 'Что перерабатываем?',
        href: '#recycle'
    }
]