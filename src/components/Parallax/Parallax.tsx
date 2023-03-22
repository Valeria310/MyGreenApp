import c from './Parallax.module.scss';

export const ParallaxSection = () => (
    <section className={c.parallax} id='about'>
        <div className={c.parallax_img}></div>
        <h1 className={c.info_title}>My <span>Green</span></h1>
        <p className={c.info_text}>У нас нет запасной планеты!</p>
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
                <h3 className={c.about_title}>Забота о чистоте  планеты начинается с каждого из нас!</h3>
                <p className={c.about_text}>Здесь мы научим вас сортировать бытовые отходы в Беларуси и&nbsp;покажем на карте пункты приема для их последующей переработки. Вы поймете, что внедрить в свою жизнь эко-привычки — это проще, чем&nbsp;кажется.</p>
            </div>
        </div>
    </section>
)