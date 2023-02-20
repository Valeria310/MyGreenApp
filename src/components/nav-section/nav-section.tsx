import './nav-section.scss';

import img1 from '../../assets/images/card1.jpg';
import img2 from '../../assets/images/card2.jpg';

export const NavSection = () => (
    <section className="news">
        <div className="news-wrapper">
            <div className="news-card">
                <div className="news-image">
                    <img src={img1} alt="card1" />
                </div>
                <div className="news-text">
                    оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент
                </div>
                <button type='button' className="news-button">
                    Куда сдать?
                </button>
            </div>
            <div className="news-card">
                <div className="news-image">
                    <img src={img2} alt="card2" />
                </div>
                <div className="news-text">
                    оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент
                </div>
                <button type='button' className="news-button">
                    Что перерабатываем?
                </button>
            </div>
        </div>
    </section>
)