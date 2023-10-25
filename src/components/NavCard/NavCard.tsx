import { FC } from 'react';

import { useWindowWidth } from 'src/hooks/useWindowWidth';

import s from './NavCard.module.scss';
import { NavCardProps } from './NavCardProps';
import NavArrowDisabled from '../../assets/icons/nav-arrow-dis.svg';
import NavArrowMobileDisabled from '../../assets/icons/nav-arrow-mobile-dis.svg';
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
                <h2 className={s.navCardHeading}>{card.heading}</h2>
                <div className={s.navCardText}>
                    {card.content.map((content) => (
                        <p key={content.id}>{content.text}</p>
                    ))}
                </div>
                <div
                    className={
                        card.isDisabled
                            ? s.navCardButton + ' ' + s.navCardButton_disabled
                            : s.navCardButton
                    }
                >
                    <a href={card.isDisabled ? undefined : card.href}>
                        <span>{card.buttonValue}</span>
                        <img
                            src={
                                card.isDisabled
                                    ? width < 1200
                                        ? width < 768
                                            ? NavArrowMobileDisabled
                                            : NavArrowMobileDisabled
                                        : NavArrowDisabled
                                    : width < 1200
                                        ? width < 768
                                            ? NavArrowMobile
                                            : NavArrowTab
                                        : NavArrow
                            }
                            alt="arrow"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
