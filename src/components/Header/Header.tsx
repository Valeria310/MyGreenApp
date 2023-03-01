import React, {useEffect} from 'react';
import './Header.scss';
import { Navigation } from './../Navigation/Navigation';

export const Header = () => {
    let prevPos:number=0;
    let changeVisible:NodeJS.Timeout;
    let isStarted:boolean = false;
    const firtsBlockHeight = 1024;

    const scrollHandler = () => {
        const elem = document.getElementById('header');
        let currentPos:number = window.pageYOffset;
        if((currentPos>=firtsBlockHeight) && (currentPos < prevPos) && !isStarted){
            elem?.classList.add('visible');
            isStarted = true;
            changeVisible = setTimeout(() => {
                elem?.classList.remove('visible');
                isStarted = false;
            }, 3000);
        } else if((currentPos<firtsBlockHeight) || (currentPos > prevPos)) {
            isStarted = false;
            clearTimeout(changeVisible);
            elem?.classList.remove('visible');
        }
        prevPos=currentPos;
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("scroll", scrollHandler, false)
        }, 1000);
        return () => window.removeEventListener("scroll", scrollHandler, false)
    }, [])
    return (<header className='header' id='header'>
        <div className="container">
            <a href='#about' className="logo"></a>
            <Navigation />
        </div>
    </header>)
}