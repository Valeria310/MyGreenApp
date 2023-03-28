    import { FC, useState } from 'react';

import { RecycleCardProps } from './RecycleCardProps';
import { RecycleButton } from './RecycleButton';

import s from './RecycleCard.module.scss';


export const RecycleCard: FC<RecycleCardProps> = ({card}) => {
    const [isExpanded, setExpanded] = useState(false);
    const { content } = card;

    return (
        <div className={`${s.recycleCard} ${card.type}Card ${isExpanded ? s.recycleCardExpanded : ''}`}>
            <div className={s.recycleCardHeader}>
                <img src={card.image} alt={card.type} className={s.recycleCardImage} />
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
                    <table className={s.recycleTable}>
                        <tbody>
                        {content.columns.map(col => {
                            const status = col.status === 'Подлежит переработке' ? 'Green' : 'Red';

                            return (
                                <tr key={col.id} className={`${s.recycleTableRow} ${s[`recycleTableRow${card.type}`]}`}>
                                    <th className={s.recycleTableHeading}>{col.name}</th>
                                    <td className={s.recycleTableData}>
                                        <div className={s.recycleTableImages}>
                                            {col.images.map(image => 
                                                <img key={image.id} src={image.url} alt={card.type} />
                                            )}
                                        </div>
                                    </td>
                                    <td className={`${s.recycleTableData} ${s.recycleTableDescription}`}>
                                        <ul>
                                            {col.description.map(item => 
                                                <li key={item.id}>{item.text}</li>    
                                            )}
                                        </ul>
                                    </td>
                                    <td className={`${s.recycleTableData} ${s.recycleTableStatus} ${s[`recycleStatus${status}`]}`}>
                                        {col.status}
                                    </td>     
                                </tr>
                            )}
                        )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
