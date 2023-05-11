import { FC, useState } from 'react';

import RecycleCardButton from './Button';
import RecycleCardContent from './Content';
import s from './RecycleCard.module.scss';
import { RecycleCardProps } from './RecycleCardProps';
import { ReactComponent as IconArrow } from '../../assets/icons/recycle-arrow.svg';
import { ReactComponent as IconCross } from '../../assets/icons/recycle-cross.svg';


export const RecycleCard: FC<RecycleCardProps> = ({ card }) => {
    const [isExpanded, setExpanded] = useState(false);
    const { content } = card;

    return (
        <div className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader}>
                <img src={card.image} alt={card.type} className={s.recycleCardImage} />
                <div className={s.recycleCardDescription}>
                    <div className={s.recycleCardInfo}>
                        <h3 className={s.recycleCardHeading}>{card.heading}</h3>
                    </div>
                    <RecycleCardButton
                        onClick={() => setExpanded(!isExpanded)}
                        icon={content && isExpanded ? IconCross : IconArrow}
                    />
                </div>
            </div>
            {content &&
                <RecycleCardContent content={content} />
            }
        </div>
    );
};
