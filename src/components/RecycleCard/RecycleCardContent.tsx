import { FC } from 'react';

import s from './RecycleCardContent.module.scss';
import { RecycleCardContentProps } from './RecycleCardContentProps';

export const RecycleCardContent: FC<RecycleCardContentProps> = ({ content }) => (
    <div className={s.recycleCardContent}>
        <table className={s.recycleTable}>
            <tbody>
                {content.columns.map(col => {
                    const status = col.status === 'Не подлежит переработке' ? 'Red' :
                        col.status === 'Подлежит переработке' ? 'Green' : 'SubGreen';

                    return (
                        <tr key={col.id} className={`${s.recycleTableRow} ${s[`recycleTableRow${content.recycleType}`]}`}>
                            <th className={s.recycleTableHeading}>{col.name}</th>
                            <td className={s.recycleTableData}>
                                <div className={s.recycleTableImages}>
                                    {col.images.map(image => 
                                        <img key={image.id} src={image.url} alt={content.recycleType} />
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
);

