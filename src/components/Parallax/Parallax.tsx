import {useEffect} from 'react';
import './Parallax.scss';

export const ParallaxSection = () => {    
    const scrollHandler = () => {
        const parallax = document.getElementsByClassName("parallax")[0];
        const parallaxImg = document.getElementsByClassName("parallax_img")[0];
        const infoTitle = document.getElementsByClassName("info_title")[0];
        const infoText = document.getElementsByClassName("info_text")[0];
        const hill = document.getElementsByClassName("hill")[0];
        const smallTrees = document.getElementsByClassName("small_trees")[0];
        const darkHill = document.getElementsByClassName("dark_hill")[0];
        const garbageL = document.getElementsByClassName("garbage_l")[0];
        const garbageR = document.getElementsByClassName("garbage_r")[0];
        const bigTrees = document.getElementsByClassName("big_trees")[0];
        const trees = document.getElementsByClassName("trees")[0];
        const about = document.getElementsByClassName("about")[0];
        const aboutBg = document.getElementsByClassName("about_bg")[0];
        parallax.className = 'parallax active';
        parallaxImg.className = 'parallax_img active';
        infoTitle.className = 'info_title active';
        infoText.className = 'info_text active';
        hill.className = 'hill active';
        smallTrees.className = 'small_trees active';
        darkHill.className = 'dark_hill active';
        garbageL.className = 'garbage_l active';
        garbageR.className = 'garbage_r active';
        bigTrees.className = 'big_trees active';
        trees.className = 'trees active';
        about.className = 'about active';
        aboutBg.className = 'about_bg active';
    }

    useEffect(() => {
            window.addEventListener("scroll", scrollHandler, {once: true})
    })

    return (
        <section className="parallax" id='about'>
            <div className="parallax_img"></div>
            <h1 className="info_title">My <span>Green</span></h1>
            <p className="info_text">У нас нет запасной планеты!</p>
            <div className="hill"></div>
            <div className="small_trees"></div>
            <div className="dark_hill"></div>
            <div className="garbage_l"></div>
            <div className="garbage_r"></div>
            <div className="trees"></div>
            <div className="big_trees"></div>
            <div className="about_bg">
                <div className="about">
                    <h3 className="about_title">Забота о чистоте &nbsp;планеты начинается с каждого из нас!</h3>
                    <p className="about_text">Здесь мы научим вас сортировать бытовые отходы в Беларуси и&nbsp;покажем на карте пункты приема для их последующей переработки. Вы поймете, что внедрить в свою жизнь эко-привычки — это проще, чем&nbsp;кажется.</p>
                </div>
            </div>
        </section>
    )
}