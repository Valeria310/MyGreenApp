import React from 'react';
import Marquee from 'react-double-marquee';
import c from './Ticker.module.scss';

export const Ticker = () => (
    <div className={c.container}>
        <section className={c.ticker}>
            <Marquee className={c.aaa} speed="0.15" delay="0" direction="left" childMargin="0">
                <span className={c.text}> <span className={c.text__bold}>присоединяйся</span> к нашему <span className={c.text__italic_bold}> эко-движению!</span></span>
                <span className={c.text}> <span className={c.text__bold}>присоединяйся</span> к нашему <span className={c.text__italic_bold}> эко-движению!</span></span>
            </Marquee>
        </section>
    </div>
)