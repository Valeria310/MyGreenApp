import { FC } from 'react';

import { useWindowWidth } from 'src/hooks/useWindowWidth';

import s from './RecycleCardContent.module.scss';
import { RecycleCardContentProps } from './RecycleCardContentProps';
import RecycleCardMobileList from '../MobileList';

export const RecycleCardContent: FC<RecycleCardContentProps> = ({ content }) => {
    const width = useWindowWidth();

    if (width < 768) {
        return (
            <div className={`${s.recycleCardContent} ${s[`${content.recycleType}CardContent`]}`}>
                <RecycleCardMobileList items={content.columns} />
            </div>
        );
    }

    return (
        <div className={s.recycleCardContent}>
            <table className={s.recycleTable}>
                <tbody>
                    {content.columns.map(col => {
                        const status = col.status === 'Не\u00A0подлежит переработке' ? 'Red' : 'Green';

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
};
