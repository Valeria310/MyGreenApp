import './RecycleSection.scss';

import RecycleCard from '../RecycleCard';
import { VertBigRecycleCards } from '../../constants/RecycleCards';
import { VertSmallRecycleCards } from '../../constants/RecycleCards';
import { HoriSmallCard } from '../../constants/RecycleCards';
import { HoriBigCard } from '../../constants/RecycleCards';

export const RecycleSection = () => (
    <section className='recycle'>
        <div className="recycle-wrapper">
            <h2 className='recycle-heading'>Что перерабатываем?</h2>
            <div className="recycle-info">
                <div className="recycle-cards">
                    <div className="recycle-stack recycle-stack-vert-big">
                        {VertBigRecycleCards.map(card => 
                            <RecycleCard key={card.heading} card={card} />    
                        )}
                    </div>
                    <RecycleCard card={HoriBigCard} />
                </div>
                <div className="recycle-cards">
                    <RecycleCard card={HoriSmallCard} />
                    <div className="recycle-stack recycle-stack-vert-small">
                        {VertSmallRecycleCards.map(card => 
                            <RecycleCard key={card.heading} card={card} />    
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
)