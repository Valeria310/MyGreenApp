import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { Navigation } from './../Navigation/Navigation';
import { SearchForm } from './SearchForm';
import './Header.scss';

export const Header = () => {
    let prevPos = 0;
    let changeVisible: NodeJS.Timeout;
    let isStarted = false;
    let mousePosition = 'out';
    let isMenuOpen = false;
    const firtsBlockHeight = 902;
    let position = 0;

    const headerElem = useRef<HTMLElement>(null);
    const burger = useRef<HTMLDivElement>(null);
    const menu = useRef<HTMLDivElement>(null);
    const bodyPlug = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const scrollHandler = (elem: HTMLElement | null) => {
        elem?.addEventListener('mouseover', handleMouseover, false);
        elem?.addEventListener('mouseout', handleMouseout, false);
        const currentPos: number = window.pageYOffset;
        if (currentPos >= firtsBlockHeight && currentPos < prevPos && !isStarted) {
            elem?.classList.add('visible');
            isStarted = true;
            changeVisible = setTimeout(() => {
                if (mousePosition === 'out') {
                    elem?.classList.remove('visible');
                    isStarted = false;
                } else {
                    elem?.addEventListener(
                        'mouseout',
                        () => {
                            elem?.classList.remove('visible');
                            isStarted = false;
                        },
                        { once: true }
                    );
                }
            }, 3000);
        } else if (currentPos < firtsBlockHeight || currentPos > prevPos) {
            isStarted = false;
            clearTimeout(changeVisible);
            elem?.classList.remove('visible');
        }
        prevPos = currentPos;
    };

    const handleMouseover = () => {
        mousePosition = 'over';
    };

    const handleMouseout = () => {
        mousePosition = 'out';
    };

    const closeBurgerMenu = () => {
        burger?.current?.classList.remove('cross');
        menu?.current?.classList.remove('opened');
        bodyPlug?.current?.classList.remove('opened');
        headerElem?.current?.classList.remove('fixed');
        headerElem?.current?.classList.remove('visible');
        container?.current?.classList.remove('opened-menu');
        isStarted = false;
        isMenuOpen = false;
        document.body.style.overflowY = 'auto';
    };

    const handlePlugClick = () => {
        if (isMenuOpen === true) {
            window.scrollTo(0, position);
            document.body.style.overflowY = 'auto';
            setTimeout(() => {
                closeBurgerMenu();
            }, 100);
            mousePosition = 'out';
        } else {
            position = window.pageYOffset;
            menu?.current?.classList.add('opened');
            bodyPlug?.current?.classList.add('opened');
            burger?.current?.classList.add('cross');
            headerElem?.current?.classList.add('fixed');
            setTimeout(() => {
                isMenuOpen = true;
            }, 300);
            document.body.style.overflowY = 'hidden';
            container?.current?.classList.add('opened-menu');
        }
    };

    const handleBodyPlugClick = () => {
        closeBurgerMenu();
    };

    document.addEventListener('click', (e) => {
        const links = document.getElementsByClassName('navigation_link');
        if (e.target == links[3] || e.target == links[4] || e.target == links[5]) {
            closeBurgerMenu();
            container?.current?.classList.remove('opened-menu');
            mousePosition = 'out';
        }
    });

    window.addEventListener('hashchange', () => {
        closeBurgerMenu();
        mousePosition = 'out';
    });

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener(
                'scroll',
                () => {
                    scrollHandler(headerElem.current);
                },
                false
            );
        }, 1000);

        return () =>
            window.removeEventListener(
                'scroll',
                () => {
                    scrollHandler(headerElem.current);
                },
                false
            );
    });

    return (
        <header className="header visible" id="header" ref={headerElem}>
            <div ref={container} className="container">
                <a className="logo" href="/"></a>
                <div className="navigation-wrapper">
                    <Navigation />
                    <div className="search-plug"></div>
                    <SearchForm />
                </div>
                <div ref={burger} className="header-mobile-burger" id="burger">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <div className="plug" onClick={handlePlugClick}></div>
                <Link to={'/login'} className="logUp-btn desk">
                    Войти
                </Link>
                <div ref={menu} className="header-mobile-menu" id="menu">
                    <div className="header-mobile-menu-inner">
                        <Navigation />
                        <Link to={'/login'} className="logUp-btn mob">
                            Войти
                        </Link>
                    </div>
                    <span className="headrer-menu-text">info@ecohub.by</span>
                </div>
            </div>
            <div ref={bodyPlug} className="body-plug" id="body-plug" onClick={handleBodyPlugClick}></div>
        </header>
    );
};
