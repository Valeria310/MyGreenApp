import './RecycleSection.scss';

import RecycleCard from '../RecycleCard';
import { RecycleCards } from '../../constants/RecycleCards';

export const RecycleSection = () => (
    <section className='recycle' id="recycle">
        <div className="recycle-wrapper">
            <h2 className='recycle-heading'>Что перерабатываем?</h2>
            <div className="recycle-info">
                { RecycleCards.map(item => <RecycleCard key={item.heading} card={item} />) }
            </div>
        </div>
    </section>
)