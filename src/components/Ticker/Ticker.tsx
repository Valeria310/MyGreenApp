import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';

import c from './Ticker.module.scss';

export const Ticker = () => {
    const [ref] = useInView({
        threshold: 0,
        rootMargin: '0px',
        onChange: (inView) => {
            const button = document.getElementById('contact-btn');
            if (!button) return;
            if(inView) {
                button.style.display = 'none';
            } else {
                button.removeAttribute('style');
            }
        }
    });

    return (
        <div ref={ref} className={c.container}>
            <section className={c.ticker}>
                <Marquee speed={119} gradient={false}>
                    <span className={c.text}>присоединяйся к нашему эко-движению!</span>
                    <span className={c.text}>присоединяйся к нашему эко-движению!</span>
                    <span className={c.text}>присоединяйся к нашему эко-движению!</span>
                </Marquee>
            </section>
        </div>
    );
};
