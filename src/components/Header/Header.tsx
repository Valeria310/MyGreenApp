import { useEffect } from 'react';

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

    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const scrollHandler = () => {
        const elem = document.getElementById('header');
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

    const handlePlugClick = () => {
        if (isMenuOpen === true) {
            document.body.style.overflowY = 'auto';
            window.scrollTo(0, position);
            const burger = document.getElementById('burger');
            const menu = document.getElementById('menu');
            const bodyPlug = document.getElementById('body-plug');
            const header = document.getElementById('header');
            const container = header?.getElementsByClassName('container')[0];
            setTimeout(() => {
                burger?.classList.remove('cross');
                menu?.classList.remove('opened');
                bodyPlug?.classList.remove('opened');
                header?.classList.remove('fixed');
                header?.classList.remove('visible');
                isStarted = false;
                isMenuOpen = false;
                container?.classList.remove('opened-menu');
            }, 100);
            mousePosition = 'out';
        } else {
            const burger = document.getElementById('burger');
            position = window.pageYOffset;
            const menu = document.getElementById('menu');
            const bodyPlug = document.getElementById('body-plug');
            const header = document.getElementById('header');
            menu?.classList.add('opened');
            bodyPlug?.classList.add('opened');
            burger?.classList.add('cross');
            header?.classList.add('fixed');
            setTimeout(() => {
                isMenuOpen = true;
            }, 300);
            document.body.style.overflowY = 'hidden';
            const container = header?.getElementsByClassName('container')[0];
            container?.classList.add('opened-menu');
        }
    };

    const handleSearchClick = () => {
        const searchForm = document.getElementsByClassName('search-form');
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;

        if (searchForm[0]?.classList.contains('opened')) {
            searchForm[0]?.classList.remove('opened');
            searchForm[0]?.classList.remove('showes');
            searchBtn?.classList.remove('opened');
            searchInput?.blur();
        } else {
            searchForm[0]?.classList.add('opened');
            searchBtn?.classList.add('opened');
            searchInput?.focus();
        }
    };

    const handleBodyPlugClick = () => {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');
        const bodyPlug = document.getElementById('body-plug');
        const header = document.getElementById('header');
        const container = header?.getElementsByClassName('container')[0];

        burger?.classList.remove('cross');
        menu?.classList.remove('opened');
        bodyPlug?.classList.remove('opened');
        header?.classList.remove('fixed');
        header?.classList.remove('visible');
        isStarted = false;
        isMenuOpen = false;
        container?.classList.remove('opened-menu');
        document.body.style.overflowY = 'auto';
    };

    document.addEventListener('click', (e) => {
        const links = document.getElementsByClassName('navigation_link');
        const burger = document.getElementById('burger');
        if (e.target == links[3] || e.target == links[4] || e.target == links[5]) {
            const menu = document.getElementById('menu');
            const bodyPlug = document.getElementById('body-plug');
            const header = document.getElementById('header');
            menu?.classList.remove('opened');
            bodyPlug?.classList.remove('opened');
            burger?.classList.remove('cross');
            header?.classList.remove('fixed');
            header?.classList.remove('visible');
            isStarted = false;
            isMenuOpen = false;
            document.body.style.overflowY = 'auto';
            const container = header?.getElementsByClassName('container')[0];
            container?.classList.remove('opened-menu');
            mousePosition = 'out';
        }
    });

    window.addEventListener('hashchange', () => {
        const menu = document.getElementById('menu');
        const bodyPlug = document.getElementById('body-plug');
        const burger = document.getElementById('burger');
        const header = document.getElementById('header');
        menu?.classList.remove('opened');
        bodyPlug?.classList.remove('opened');
        burger?.classList.remove('cross');
        header?.classList.remove('fixed');
        header?.classList.remove('visible');
        isStarted = false;
        isMenuOpen = false;
        document.body.style.overflowY = 'auto';
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

    return (
        <header className="header visible" id="header">
            <div className="container">
                <a className="logo" href="/"></a>
                <div className="navigation-wrapper">
                    <Navigation />
                    <SearchForm />
                    <div className="search-btn" id="searchBtn" onClick={handleSearchClick}></div>
                </div>
                <div className="header-mobile-burger" id="burger">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <div className="plug" onClick={handlePlugClick}></div>
                <Link to={'/login'} className="logUp-btn desk">
                    Войти
                </Link>
                <div className="header-mobile-menu" id="menu">
                    <div className="header-mobile-menu-inner">
                        <Navigation />
                        <Link to={'/login'} className="logUp-btn mob">
                            Войти
                        </Link>
                    </div>
                    <span className="headrer-menu-text">info@ecohub.by</span>
                </div>
            </div>
            <div className="body-plug" id="body-plug" onClick={handleBodyPlugClick}></div>
        </header>
    );
};
