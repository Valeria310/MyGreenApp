import RecycleCard from '../RecycleCard';
import s from './RecycleSection.module.scss';
import { RecycleCards } from '../../constants/RecycleCards';

export const RecycleSection = () => (
    <section className={s.recycle} id="recycle">
        <div className={s.recycleWrapper}>
            <h2 className={s.recycleHeading}>Что перерабатываем?</h2>
            <div className={s.recycleInfo}>
                { RecycleCards.map(item => <RecycleCard key={item.heading} card={item} />) }
            </div>
        </div>
    </section>
)
