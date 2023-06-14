import { FC } from 'react';

import s from './RecycleCardMobileList.module.scss';
import { RecycleCardMobileListProps } from './RecycleCardMobileListProps';

export const RecycleCardMobileList: FC<RecycleCardMobileListProps> = ({ items }) => {

    return (
        <ul className={s.recycleRowList}>
            {items.map(item => {
                const status = item.status === 'Не\u00A0подлежит переработке' ? 'Red' : 'Green';
                const tinyGap = item.images.length > 2; 

                return (
                    <li key={item.id} className={s.recycleRow}>
                        <div className={s.recycleRowContentWrapper}>
                            <div className={s.recycleRowHeader}>
                                <h4>{item.name}</h4>
                                <div className={`${s.recycleRowImages}${tinyGap ? ' ' + s.recycleRowImagesTiny : ''}`}>
                                    {item.images.map(image => 
                                        <img key={image.id} src={image.url} alt={image.id.toString()} />
                                    )}
                                </div>
                            </div>
                            <div className={s.recycleRowMain}>
                                <ul className={s.recycleRowMainList}>
                                    {item.description.map(descItem => 
                                        <li key={descItem.id}>{descItem.text}</li>    
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.recycleRowFooter} ${s[`recycleRowFooter${status}`]}`}>
                            <div>{item.status}</div>
                        </div>
                    </li>
                );    
            })}
        </ul>
    );
};
