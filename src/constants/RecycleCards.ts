import plasticImg from '../assets/images/plastic.png';
import paperImg from '../assets/images/paper.png';
import sofaImg from '../assets/images/sofa.png';
import glassImg from '../assets/images/glass.png';

export interface RecycleCard {
    direction: 'hori' | 'vert';
    size: 'small' | 'big';
    tone: 'light' | 'dark' | 'bright';
    heading: string;
    image?: string;
    text: string;
    buttonValue: string;
}

export const VertBigRecycleCards: RecycleCard[] = [
    {
        direction: 'vert',
        size: 'big',
        tone: 'light',
        heading: 'Пластик',
        image: plasticImg,
        text: 'оперативная информация, которая представляет политический',
        buttonValue: 'Читать'
    },
    {
        direction: 'vert',
        size: 'big',
        tone: 'dark',
        heading: 'Бумага',
        image: paperImg,
        text: 'оперативная информация, которая представляет политический',
        buttonValue: 'Читать'
    }
];

export const VertSmallRecycleCards: RecycleCard[] = [
    {
        direction: 'vert',
        size: 'small',
        tone: 'bright',
        heading: 'Опасные отходы',
        text: 'оперативная информация, которая представляет политический',
        buttonValue: 'Читать'
    },
    {
        direction: 'vert',
        size: 'small',
        tone: 'light',
        heading: 'Металл',
        text: 'оперативная информация, которая представляет политический',
        buttonValue: 'Читать'
    }
];

export const HoriSmallCard: RecycleCard = {
    direction: 'hori',
    size: 'small',
    tone: 'light',
    heading: 'Стекло',
    image: glassImg,
    text: 'оперативная информация, которая',
    buttonValue: 'Читать'
}

export const HoriBigCard: RecycleCard = {
    direction: 'hori',
    size: 'big',
    tone: 'bright',
    heading: 'Крупногабаритные  отходы, электронная, бытовая техника',
    image: sofaImg,
    text: 'оперативная информация, которая представляет политический',
    buttonValue: 'Читать'
}