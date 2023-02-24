import { FC } from 'react';
import { NavCardProps } from './NavCardProps';

import './NavCard.scss';

export const NavCard: FC<NavCardProps> = ({card}) => (
    <div className="nav-card">
        <div className="nav-card__image">
            <img src={card.image} alt="card" />
        </div>
        <div className="nav-card__text">
            {card.text}
        </div>
        <button type='button' className="button nav-card__button">
            {card.buttonValue}
        </button>
    </div>
)