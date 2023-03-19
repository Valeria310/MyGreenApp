import { FC, useState } from 'react';

import { RecycleCardProps } from './RecycleCardProps';

import s from './RecycleCard.module.scss';
import RecycleArrow from '../../assets/icons/recycle-arrow.svg';
import RecycleCross from '../../assets/icons/recycle-cross.svg';


export const RecycleCard: FC<RecycleCardProps> = ({card}) => {
    const { content } = card;
    const [isExpanded, setExpanded] = useState(false);
    
    return (
        <div className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader}>
                <img src={card.image} alt={card.type} />
                <div className={s.recycleCardDescription}>
                    <div className={s.recycleCardInfo}>
                        <h3 className={s.recycleCardHeading}>{card.heading}</h3>
                        <p className={s.recycleCardText}>{card.text}</p>
                    </div>
                    <button
                        type='button'
                        className={s.recycleCardButton}
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        <img src={isExpanded ? RecycleCross : RecycleArrow} alt={isExpanded ? 'recycle-cross' : 'recycle-arrow'} />
                    </button>
                </div>
            </div>
            { isExpanded &&
                <div className={s.recycleCardContent}>
                    <table className={s.recycleTable}>
                        <thead>
                            <tr>
                                {content.columns.map(col => 
                                    <th key={col.id}>{col.name}</th>    
                                )}
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                {content.columns.map(col => 
                                    <td key={col.id} className={s.recycleTableImage}>
                                        <img src={col.image} alt={card.type} />
                                    </td>
                                )}
                            </tr>
                            <tr>
                                {content.columns.map(col => 
                                    <td key={col.id} className={s.recycleTableDescription}>
                                        {col.description.map(par => 
                                            <p key={par.id}>{par.text}</p>    
                                        )}
                                    </td> 
                                )}
                            </tr>
                            <tr>
                                {content.columns.map(col => 
                                    <td key={col.id} className={`${s.recycleTableStatus} ${s[`recycleStatus${col.color}`]}`}>
                                        {col.status}
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
