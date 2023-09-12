import { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';

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

    const handleCardClick = () => {
        if (expandable) {
            setExpanded(!isExpanded);
        } else {
            navigate('/recycle');
        }
    };

    return (
        <div className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader}>
                <img src={card.image} alt={card.type} className={s.recycleCardImage} />
                <div className={s.recycleCardDescriptionWrapper}>
                    <div className={s.recycleCardDescription} onClick={handleCardClick}>
                        <div className={s.recycleCardInfo}>
                            <h3 className={s.recycleCardHeading}>{card.heading}</h3>
                        </div>
                        <RecycleCardButton
                            onClick={handleCardClick}
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
