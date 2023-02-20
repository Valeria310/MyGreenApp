import './nav-section.scss';

import img1 from '../../assets/images/card1.png';
import img2 from '../../assets/images/card2.png';

export const NavSection = () => (
    <section className="news">
        <div className="news-wrapper">
            <div className="news-card">
                <div className="card-image">
                    <img src={img1} alt="card1" />
                </div>
                <div className="card-text">
                    оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент
                </div>
                <div className="card-button">
                    <a href='#' className="card-button">Куда сдать?</a>
                </div>
            </div>
            <div className="news-card">
                <div className="card-image">
                    <img src={img2} alt="card2" />
                </div>
                <div className="card-text">
                    оперативная информация, которая представляет политический, социальный или экономический интерес для аудитории в своей свежести, то есть сообщения о событиях, произошедших недавно или происходящих в данный момент
                </div>
                <div className="card-button">
                    <a href='#' className="card-button">Что перерабатываем?</a>
                </div>
            </div>
        </div>
    </section>
)