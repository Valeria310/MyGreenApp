import { FC } from 'react';

import { useWindowWidth } from 'src/hooks/useWindowWidth';

import s from './NavCard.module.scss';
import { NavCardProps } from './NavCardProps';
import NavArrowMobile from '../../assets/icons/nav-arrow-mobile.svg';
import NavArrowTab from '../../assets/icons/nav-arrow-tab.svg';
import NavArrow from '../../assets/icons/nav-arrow.svg';

export const NavCard: FC<NavCardProps> = ({ card }) => {
    const width = useWindowWidth();

    return (
        <div className={s.navCard}>
            <div className={s.navCardImage}>
                <img src={card.image} alt="card" />
            </div>
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
                        <img src={width < 1200 ? (width < 768 ? NavArrowMobile : NavArrowTab) : NavArrow} alt='arrow' />
                    </a>
                </div>
            </div>
        </div>
    );
};
