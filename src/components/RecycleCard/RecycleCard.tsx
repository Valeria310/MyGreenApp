import { FC, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import RecycleCardButton from './Button';
import RecycleCardContent from './Content';
import s from './RecycleCard.module.scss';
import { RecycleCardProps } from './RecycleCardProps';
import { ReactComponent as IconArrowRight } from '../../assets/icons/recycle-arrow-right.svg';
import { ReactComponent as IconArrow } from '../../assets/icons/recycle-arrow.svg';
import { ReactComponent as IconCross } from '../../assets/icons/recycle-cross.svg';


export const RecycleCard: FC<RecycleCardProps> = ({ card, expandable }) => {
    const [isExpanded, setExpanded] = useState(false);
    const { content } = card;
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (state && card.heading === state) {
            setExpanded(true);
            const currentCard = document.getElementById(card.heading);
            if (currentCard) {
                currentCard.scrollIntoView({ behavior: 'smooth' });
            }
            window.history.replaceState(null, state);
        }
    }, []);

    const handleCardClick = (heading: string) => {
        if (expandable) {
            setExpanded(!isExpanded);
        } else {
            navigate('/recycle', { state: heading });
        }
    };

    return (
        <div id={card.heading} className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader} onClick={() => handleCardClick(card.heading)}>
                <img src={card.image} alt={card.type} className={s.recycleCardImage} />
                <div className={s.recycleCardDescriptionWrapper}>
                    <div className={s.recycleCardDescription}>
                        <div className={s.recycleCardInfo}>
                            <h3 className={s.recycleCardHeading}>{card.heading}</h3>
                        </div>
                        <RecycleCardButton
                            onClick={() => handleCardClick(card.heading)}
                            icon={(content && expandable) ? (isExpanded ? IconCross : IconArrow) : IconArrowRight}
                        />
                    </div>
                </div>
            </div>
            {content &&
                <RecycleCardContent content={content} />
            }
        </div>
    );
};
