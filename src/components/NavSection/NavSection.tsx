import s from './NavSection.module.scss';
import { NavCards } from '../../constants/NavCards';
import NavCard from '../NavCard';


export const NavSection = () => (
    <section className={s.navCards}>
        <div className={s.navCardsWrapper}>
            {NavCards.map(card => 
                <NavCard key={card.image} card={card} />   
            )}
        </div>
    </section>
);
