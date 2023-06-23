import { useEffect } from 'react';

import { Navigation } from './../Navigation/Navigation';

import './Header.scss';


export const Header = () => {
    let prevPos = 0;
    let changeVisible: NodeJS.Timeout;
    let isStarted = false;
    let mousePosition = 'out';
    let isMenuOpen = false;
    const firtsBlockHeight = 902;
    let position=0;
    
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const scrollHandler = () => {
        const elem = document.getElementById('header');
        elem?.addEventListener('mouseover', handleMouseover, false);
        elem?.addEventListener('mouseout', handleMouseout, false);
        const currentPos:number = window.pageYOffset;
        if((currentPos>=firtsBlockHeight) && (currentPos < prevPos) && !isStarted){
            elem?.classList.add('visible');
            isStarted = true;
            changeVisible = setTimeout(() => {
                if(mousePosition === 'out') {
                    elem?.classList.remove('visible');
                    isStarted = false;
                } else {
                    elem?.addEventListener('mouseout', () => {
                        elem?.classList.remove('visible');
                        isStarted = false;
                    }, { once: true });
                }
            }, 3000);
        } else if((currentPos<firtsBlockHeight) || (currentPos > prevPos)) {
            isStarted = false;
            clearTimeout(changeVisible);
            elem?.classList.remove('visible');
        }
        prevPos=currentPos;
    };

    const handleMouseover = () => {
        mousePosition = 'over';
    };

    const handleMouseout = () => {
        mousePosition = 'out';
    };

    const clickHandler = () => {
        if(isMenuOpen === true ) {
            window.scrollTo({ top: position, behavior: 'auto' });
            setTimeout(() => {
                const burger = document.getElementById('burger');
                const menu = document.getElementById('menu');
                const header = document.getElementById('header');
                burger?.classList.remove('cross');
                menu?.classList.remove('opened');
                header?.classList.remove('fixed');
                header?.classList.remove('visible');
                isStarted = false;
                isMenuOpen = false;
                document.body.style.overflowY = 'auto';
                document.body.style.position = 'static';
                const container = header?.getElementsByClassName('container')[0];
                container?.classList.remove('opened-menu');
                mousePosition = 'out';
            }, 100);
        }
    };

    document.addEventListener('click', (e)=> {
        const plug = document.getElementsByClassName('plug')[0];
        const burger = document.getElementById('burger');
        const links = document.getElementsByClassName('navigation_link');
        if(e.target == plug && isMenuOpen === false) {
            position=window.pageYOffset;
            const menu = document.getElementById('menu');
            const header = document.getElementById('header');
            menu?.classList.add('opened');
            burger?.classList.add('cross');
            header?.classList.add('fixed');
            setTimeout(() => {
                isMenuOpen = true;
            }, 500);
            document.body.style.overflowY = 'hidden';
            const container = header?.getElementsByClassName('container')[0];
            container?.classList.add('opened-menu');
            setTimeout(() => {
                document.body.style.position = 'fixed';
            }, 500);
            plug?.addEventListener('click', clickHandler, { once: true });
        } else if(e.target == links[3] || e.target == links[4] || e.target == links[5] ) {
            const menu = document.getElementById('menu');
            const header = document.getElementById('header');
            menu?.classList.remove('opened');
            burger?.classList.remove('cross');
            header?.classList.remove('fixed');
            header?.classList.remove('visible');
            isStarted = false;
            isMenuOpen = false;
            document.body.style.overflowY = 'auto';
            document.body.style.position = 'static';
            const container = header?.getElementsByClassName('container')[0];
            container?.classList.remove('opened-menu');
            mousePosition = 'out';
        }
    });

    window.addEventListener('hashchange', ()=> {
        const menu = document.getElementById('menu');
        const burger = document.getElementById('burger');
        const header = document.getElementById('header');
        menu?.classList.remove('opened');
        burger?.classList.remove('cross');
        header?.classList.remove('fixed');
        header?.classList.remove('visible');
        isStarted = false;
        isMenuOpen = false;
        document.body.style.overflowY = 'auto';
        document.body.style.position = 'static';
        const container = header?.getElementsByClassName('container')[0];
        container?.classList.remove('opened-menu');
        mousePosition = 'out';
    });

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('scroll', scrollHandler, false);
        }, 1000);
        return () => window.removeEventListener('scroll', scrollHandler, false);
    });
    return (<header className='header visible' id='header'>
        <div className="container">
            <a className="logo" href='/'></a>
            <Navigation />
            <div className="header-mobile-burger" id='burger'>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <div className="plug"></div>
            <div className="header-mobile-menu" id='menu'>
                <Navigation />
                <span className='headrer-menu-text'>info@ecohub.by</span>
            </div>
        </div>
    </header>);
};
