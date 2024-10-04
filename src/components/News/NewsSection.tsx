import React from 'react';

import mainPhoto from './main_news.png';
import s from './NewsSection.module.scss';


export const NewsSection = () => {
    return (
        <section id="news">
            <div className={s.newsContainer}>
                <div className={s.newsHeader}>
                    <div>
                        <h3>Новости</h3>
                    </div>
                </div>
                <div className={s.newsContent}>
                    <div className={s.mainNews}>
                        <a href={'#'} className={s.newsTitleLink}><img alt={"Новость"} src={mainPhoto} className={s.mainNewsPhoto}/></a>
                        <h5><a href={'#'} className={s.newsTitleLink}>Новогодние экотрадиции: как отметить праздники без вреда для природы</a></h5>
                    </div>
                    <div className={s.newsColumn}>
                        <div className={s.newsWrapper}>
                            <div className={s.newsTitle}><a href={'#'} className={s.newsTitleLink}>В 2024 году Земля
                                перешагнет опасный предел – она уже не будет
                                прежней</a>
                            </div>
                            <div className={s.newsDate}>28.12.2023</div>
                        </div>
                        <div className={s.newsWrapper}>
                            <div className={s.newsTitle}><a href={'#'} className={s.newsTitleLink}>Первая в мире
                                скважина на вулкане может стать источником «неограниченной энергии»</a>
                            </div>
                            <div className={s.newsDate}>28.12.2023</div>
                        </div>
                        <div className={s.newsWrapper}>
                            <div className={s.newsTitle}><a href={'#'} className={s.newsTitleLink}>Новогодние
                                экотрадиции: как отметить праздники без вреда для природы</a>
                            </div>
                            <div className={s.newsDate}>28.12.2023</div>
                        </div>
                        <div className={s.seeMoreLinkWrapper}>
                            <a href={'#'} className={s.seeMoreLink}>Смотреть еще</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};