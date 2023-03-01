import Marquee from "react-fast-marquee";
import c from './Ticker.module.scss';

export const Ticker = () => (
    <div className={c.container}>
        <section className={c.ticker}>
            <Marquee speed={200} gradient={false}>
                <span className={c.text}> <span className={c.text__bold}>присоединяйся</span> к нашему <span className={c.text__italic_bold}> эко-движению!</span></span>
                <span className={c.text}> <span className={c.text__bold}>присоединяйся</span> к нашему <span className={c.text__italic_bold}> эко-движению!</span></span>
            </Marquee>
        </section>
    </div>
)