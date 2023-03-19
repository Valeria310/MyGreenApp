import NavCard from '../NavCard';
import { NavCards } from '../../constants/NavCards';
import s from './NavSection.module.scss';

export const NavSection = () => (
    <section className={s.navCards}>
        <div className={s.navCardsWrapper}>
            {NavCards.map(card => 
                <NavCard key={card.image} card={card} />   
            )}
        </div>
    </section>
)
