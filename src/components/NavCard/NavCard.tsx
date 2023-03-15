import { FC } from 'react';
import { NavCardProps } from './NavCardProps';

import './NavCard.scss';
import NavArrow from '../../assets/icons/nav-arrow.svg';

export const NavCard: FC<NavCardProps> = ({card}) => (
    <div className="nav-card">
        <div className="nav-card__content">
            <h2 className="nav-card__heading">
                {card.heading}
            </h2>
            <div className="nav-card__text">
                { card.content.map(content => <p key={content.id}>{ content.text }</p>) }
            </div>
            <div className="nav-card__button">
                <a href={card.href}>
                    <span>{card.buttonValue}</span>
                    <img src={NavArrow} alt='arrow' />
                </a>
            </div>
        </div>
        <div className="nav-card__image">
            <img src={card.image} alt="card" />
        </div>
    </div>
)