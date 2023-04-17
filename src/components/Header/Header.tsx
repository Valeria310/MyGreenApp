import {useEffect} from 'react';
import './Header.scss';
import { Navigation } from './../Navigation/Navigation';

export const Header = () => {
    let prevPos:number=0;
    let changeVisible:NodeJS.Timeout;
    let isStarted:boolean = false;
    let mousePosition = "out";
    const firtsBlockHeight = 902;

    const scrollHandler = () => {
        const elem = document.getElementById('header');
        elem?.addEventListener("mouseover", handleMouseover, false);
        elem?.addEventListener("mouseout", handleMouseout, false);
        let currentPos:number = window.pageYOffset;
        if((currentPos>=firtsBlockHeight) && (currentPos < prevPos) && !isStarted){
            elem?.classList.add('visible');
            isStarted = true;
            changeVisible = setTimeout(() => {
                if(mousePosition === "out") {
                    elem?.classList.remove('visible');
                    isStarted = false;
                } else {
                    elem?.addEventListener("mouseout", () => {
                        elem?.classList.remove('visible');
                        isStarted = false;
                    }, {once: true})
                }
            }, 3000);
        } else if((currentPos<firtsBlockHeight) || (currentPos > prevPos)) {
            isStarted = false;
            clearTimeout(changeVisible);
            elem?.classList.remove('visible');
        }
        prevPos=currentPos;
    }

    const handleClick = () => {
        window.location.reload();
    }

    const handleMouseover = () => {
        mousePosition = "over"
    }

    const handleMouseout = () => {
        mousePosition = "out"
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("scroll", scrollHandler, false)
        }, 1000);
        return () => window.removeEventListener("scroll", scrollHandler, false)
    })
    return (<header className='header visible' id='header'>
        <div className="container">
            <a href='#' className="logo" onClick={handleClick}></a>
            <Navigation />
        </div>
    </header>)
}