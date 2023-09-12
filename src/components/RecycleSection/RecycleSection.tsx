import { FC } from 'react';

import s from './RecycleSection.module.scss';
import { RecycleSectionProps } from './RecycleSectionProps';
import { RecycleCards } from '../../constants/RecycleCards';
import RecycleCard from '../RecycleCard';


export const RecycleSection:FC<RecycleSectionProps> = ({ expandable }) => {
    return (
        <section className={s.recycle} id="recycle">
            <div className={s.recycleWrapper}>
                <h2 className={s.recycleHeading}>Что перерабатываем?</h2>
                <div className={s.recycleInfo}>
                    {RecycleCards.map(item => <RecycleCard key={item.heading} card={item} expandable={expandable} />)}
                </div>
            </div>
        </section>
    );
};
