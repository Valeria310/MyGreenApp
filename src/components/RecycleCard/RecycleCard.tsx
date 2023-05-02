import { FC, useState } from 'react';

import { RecycleButton } from './RecycleButton';
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
                    <RecycleButton
                        onClick={() => setExpanded(!isExpanded)}
                        icon={content && isExpanded ? IconCross : IconArrow}
                    />
                </div>
            </div>
            {content &&
                <div className={s.recycleCardContent}>
                    <table className={s.recycleTable}>
                        <tbody>
                            {content.columns.map(col => {
                                const status = col.status === 'Не подлежит переработке' ? 'Red' :
                                    col.status === 'Подлежит переработке' ? 'Green' : 'SubGreen';

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
                                );}
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};
