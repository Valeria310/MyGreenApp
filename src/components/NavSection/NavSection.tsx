import './NavSection.scss';

import { NavCards } from '../../constants/NavCards';
import NavCard from '../NavCard';

export const NavSection = () => (
    <section className="nav-cards">
        <div className="nav-cards-wrapper">
            {NavCards.map(card => 
                <NavCard key={card.image} card={card} />   
            )}
        </div>
    </section>
)