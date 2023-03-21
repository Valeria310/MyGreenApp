import { FC, useState } from 'react';

import { RecycleCardProps } from './RecycleCardProps';
import { RecycleButton } from './RecycleButton';

import s from './RecycleCard.module.scss';


export const RecycleCard: FC<RecycleCardProps> = ({card}) => {
    const [isExpanded, setExpanded] = useState(false);
    const { content } = card;
    const tableClassName = content && content.columns.length < 6 ? `${s.recycleTable} ${s.recycleTableRightBorder}` : s.recycleTable;

    return (
        <div className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader}>
                <img src={card.image} alt={card.type} />
                <div className={s.recycleCardDescription}>
                    <div className={s.recycleCardInfo}>
                        <h3 className={s.recycleCardHeading}>{card.heading}</h3>
                        <p className={s.recycleCardText}>{card.text}</p>
                    </div>
                    <RecycleButton
                        onClick={() => setExpanded(!isExpanded)}
                        state={content && isExpanded ? 'cross' : 'arrow'}
                    />
                </div>
            </div>
            {content &&
                <div className={s.recycleCardContent}>
                    <table className={tableClassName}>
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
                                    <td key={col.id} className={`${s.recycleTableDescription} ${s[`recycleTableDescription${card.type}`]}`}>
                                        {col.description.map(par => 
                                            <p key={par.id}>{par.text}</p>    
                                        )}
                                    </td> 
                                )}
                            </tr>
                            <tr>
                                {content.columns.map(col => {
                                    const status = col.status === 'Подлежит переработке' ? 'Green' : 'Red';
                                    
                                    return (
                                        <td key={col.id} className={`${s.recycleTableStatus} ${s[`recycleStatus${status}`]}`}>
                                            {col.status}
                                        </td>
                                    )}
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
