import { DangerContent, ElectroContent, GlassContent, LargeContent, MetalContent, PaperContent, PlasticContent, RecycleContent } from './RecycleContent';
import dangerImg from '../assets/images/recycle-danger.jpg';
import electroImg from '../assets/images/recycle-electro.jpg';
import glassImg from '../assets/images/recycle-glass.jpg';
import largeImg from '../assets/images/recycle-large.jpg';
import metalImg from '../assets/images/recycle-metal.jpg';
import paperImg from '../assets/images/recycle-paper.jpg';
import plasticImg from '../assets/images/recycle-plastic.jpg';



export interface RecycleCard {
    heading: string;
    image: string;
    type: 'plastic' | 'paper' | 'glass' | 'large' | 'electro' | 'danger' | 'metal';
    content: RecycleContent | null;
}

export const RecycleCards: RecycleCard[] = [
    {
        heading: 'Пластик',
        image: plasticImg,
        type: 'plastic',
        content: PlasticContent
    },
    {
        heading: 'Бумага',
        image: paperImg,
        type: 'paper',
        content: PaperContent
    },
    {
        heading: 'Стекло',
        image: glassImg,
        type: 'glass',
        content: GlassContent
    },
    {
        heading: 'Крупногабаритные отходы',
        image: largeImg,
        type: 'large',
        content: LargeContent
    },
    {
        heading: 'Электронная, бытовая техника',
        image: electroImg,
        type: 'electro',
        content: ElectroContent
    },
    {
        heading: 'Опасные отходы',
        image: dangerImg,
        type: 'danger',
        content: DangerContent
    },
    {
        heading: 'Металл',
        image: metalImg,
        type: 'metal',
        content: MetalContent
    }
];
