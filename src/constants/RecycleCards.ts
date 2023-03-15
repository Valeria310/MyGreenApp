import plasticImg from '../assets/images/recycle-plastic.jpg';
import paperImg from '../assets/images/recycle-paper.jpg';
import glassImg from '../assets/images/recycle-glass.jpg';
import largeImg from '../assets/images/recycle-large.jpg';
import electroImg from '../assets/images/recycle-electro.jpg';
import dangerImg from '../assets/images/recycle-danger.jpg';
import metalImg from '../assets/images/recycle-metal.jpg';
import { PlasticContent, RecycleContent } from './RecycleContent';


export interface RecycleCard {
    heading: string;
    image: string;
    text: string;
    type: string;
    content: RecycleContent;
}

export const RecycleCards: RecycleCard[] = [
    {
        heading: 'Пластик',
        image: plasticImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'plastic',
        content: PlasticContent
    },
    {
        heading: 'Бумага',
        image: paperImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'paper',
        content: PlasticContent
    },
    {
        heading: 'Стекло',
        image: glassImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'glass',
        content: PlasticContent
    },
    {
        heading: 'Крупногабаритные отходы',
        image: largeImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'large',
        content: PlasticContent
    },
    {
        heading: 'Электронная, бытовая техника',
        image: electroImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'electro',
        content: PlasticContent
    },
    {
        heading: 'Опасные отходы',
        image: dangerImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'danger',
        content: PlasticContent
    },
    {
        heading: 'Металл',
        image: metalImg,
        text: 'оперативная информация, которая представляет политический',
        type: 'metal',
        content: PlasticContent
    }
];
