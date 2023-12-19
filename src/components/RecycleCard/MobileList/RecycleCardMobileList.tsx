import { FC, useEffect, useRef } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import s from './RecycleCardMobileList.module.scss';
import { RecycleCardMobileListProps } from './RecycleCardMobileListProps';

export const RecycleCardMobileList: FC<RecycleCardMobileListProps> = ({ items }) => {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Swiper
            className={s.recycleRowList}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            pagination={{
                enabled: true,
                clickable: true
            }}
            modules={[Pagination]}
        >
            {items.map((item) => {
                const status = item.status === 'Не\u00A0подлежит переработке' ? 'Red' : 'Green';
                const tinyGap = item.images.length > 2;

                return (
                    <SwiperSlide key={item.id} className={s.recycleRow}>
                        <div className={s.recycleRowContent}>
                            <div className={s.recycleRowContentWrapper}>
                                <div className={s.recycleRowHeader}>
                                    <h4>{item.name}</h4>
                                    <div
                                        className={`${s.recycleRowImages}${
                                            tinyGap ? ' ' + s.recycleRowImagesTiny : ''
                                        }`}
                                    >
                                        {item.images.map((image) => (
                                            <img
                                                key={image.id}
                                                src={image.url}
                                                alt={image.id.toString()}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className={s.recycleRowMain}>
                                    <ul className={s.recycleRowMainList}>
                                        {item.description.map((descItem) => (
                                            <li key={descItem.id}>{descItem.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div
                                className={`${s.recycleRowFooter} ${
                                    s[`recycleRowFooter${status}`]
                                }`}
                            >
                                <div>{item.status}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
