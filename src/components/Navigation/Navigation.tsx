import { Link, useNavigate } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => {
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url, { state: url.slice(url.indexOf('#') + 1) });
        const section=document.getElementById(location.hash.slice(1));
        section?.scrollIntoView({ behavior:'smooth' });
    };
    return (
        <nav className="navigation">
            <div
                className="navigation_link"
                onClick={() => handleClick('/#map')}
            >
                Куда сдать
            </div>
            <Link
                to={'/recycle'}
                className={
                    window.window.location.pathname == '/recycle' ? 'navigation_link disabled' : 'navigation_link'
                }
            >
                Что перерабатываем
            </Link>
            <div
                className="navigation_link"
                onClick={() => handleClick('/#about')}
            >
                О нас
            </div>
        </nav>
    );
};
