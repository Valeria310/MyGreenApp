import './recycle-section.scss';

import plasticImg from '../../assets/images/plastic.png';
import paperImg from '../../assets/images/paper.png';
import largeImg from '../../assets/images/large.png';
import glassImg from '../../assets/images/glass.png';

export const RecycleSection = () => (
    <section className='recycle'>
        <div className="recycle-wrapper">
            <h2 className='recycle-heading'>Что перерабатываем?</h2>
            <div className="recycle-info">
                <div className="recycle-cards">
                    <div className="recycle-stack-large">
                        <div className="recycle-card plastic-card">
                            <div className='recycle-card__heading'>Пластик</div>
                            <div className="recycle-card__image">
                                <img className='plastic-image' src={plasticImg} alt='card1' />
                            </div>
                            <div className='underliner'></div>
                            <div className='recycle-card__text'>
                                оперативная информация, которая представляет политический
                            </div>
                            <button className='recycle-card__button' type='button'>Читать</button>
                        </div>
                        <div className="recycle-card paper-card">
                            <div className='recycle-card__heading'>Бумага</div>
                            <div className="recycle-card__image">
                                <img className='paper-image' src={paperImg} alt='card1' />
                            </div>
                            <div className='underliner'></div>
                            <div className='recycle-card__text'>
                                оперативная информация, которая представляет политический
                            </div>
                            <button className='recycle-card__button' type='button'>Читать</button>
                        </div>
                    </div>
                    <div className="recycle-card large-card">
                        <div className="recycle-card__large-image">
                            <img className='large-image' src={largeImg} alt='card' />
                        </div>
                        <div className="large-card__info">
                            <div className='recycle-card__heading'>Крупногабаритные отходы</div>
                            <div className='recycle-card__text'>
                                оперативная информация, которая представляет политический
                            </div>
                            <button className='recycle-card__button' type='button'>Читать</button>
                        </div>
                    </div>
                </div>
                <div className="recycle-cards">
                    <div className="recycle-card glass-card">
                            <div className="recycle-card__heading">Стекло</div>
                            <div className="recycle-card__glass-image">
                                <img className='glass-image' src={glassImg} alt='card' />
                            </div>
                            <div className="glass-card__info">
                                <div className='recycle-card__text'>
                                    оперативная информация, которая
                                </div>
                                <div className="recycle-card__button">Читать</div>
                            </div>
                    </div>
                    <div className="recycle-stack-small">
                        <div className="recycle-card small-card danger-card">
                            <div className="recycle-card__heading">Опасные отходы</div>
                            <div className='recycle-card__text'>
                                оперативная информация, которая представляет политический
                            </div>
                            <div className="recycle-card__button">Читать</div>
                        </div>
                        <div className="recycle-card small-card metal-card">
                            <div className="recycle-card__heading">Металл</div>
                            <div className='recycle-card__text'>
                                оперативная информация, которая представляет политический
                            </div>
                            <div className="recycle-card__button">Читать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)