import React from 'react';
import c from './Parallax.module.scss';

export const ParallaxSection = () => (
    <section className={c.parallax} id='about'>
        <div className={c.parallax_img}></div>
        <h1 className={c.info_title}>My <span>Green</span></h1>
        <p className={c.info_text}>У нас нет запасной<br />планеты!</p>
        <div className={c.hill}></div>
        <div className={c.small_trees}></div>
        <div className={c.darh_hill}></div>
        <div className={c.garbage_l}></div>
        <div className={c.garbage_r}></div>
        <div className={c.big_trees}></div>
        <div className={c.trees}>
            <div className={c.trees_l}></div>
            <div className={c.trees_r}></div>
        </div>
        <div className={c.about_bg}>
            <div className={c.about}>
                <p className={c.about_title}>Твои эко-принципы помогут миру стать чище!</p>
                <p className={c.about_text}>Присоединяйся к нам и пользуйся сервисом удобной сортировки бытовых отходов.</p>
                <ul className={c.about_list}>
                    <p>Здесь мы пишем:</p>
                    <li>- что и как перерабатывается в Беларуси, а что нет;</li>
                    <li>- куда это нести;</li>
                    <li>- как сократить количество мусора и с чего начать;</li>
                    <li>- про экологичные альтернативы привычным решениям;</li>
                    <li>- про многое другое, что сделает ваш дом и наш мир чище и безопаснее.</li>
                </ul>
            </div>
        </div>
    </section>
)