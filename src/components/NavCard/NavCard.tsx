import { FC } from 'react';

import s from './NavCard.module.scss';
import NavArrow from '../../assets/icons/nav-arrow.svg';

import { NavCardProps } from './NavCardProps';


export const NavCard: FC<NavCardProps> = ({card}) => (
    <div className={s.navCard}>
        <div className={s.navCardContent}>
            <h2 className={s.navCardHeading}>
                {card.heading}
            </h2>
            <div className={s.navCardText}>
                { card.content.map(content => <p key={content.id}>{ content.text }</p>) }
            </div>
            <div className={s.navCardButton}>
                <a href={card.href}>
                    <span>{card.buttonValue}</span>
                    <img src={NavArrow} alt='arrow' />
                </a>
            </div>
        </div>
        <div className={s.navCardImage}>
            <img src={card.image} alt="card" />
        </div>
    </div>
)
