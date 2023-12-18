import React from 'react';

import classes from './Page404.module.scss';
import page404Image from '../../assets/images/404.svg';

const Page404 = () => {
    return (
        <div className={classes.page404}>
            <img className={classes.page404__image} src={page404Image} alt="404-image" />
            <p className={classes.page404__text}>Попробуйте позже или свяжитесь с нами</p>
            <a className={classes.page404__link} href="mailto:http://info@ecohub.by">
                info@ecohub.by
            </a>
        </div>
    );
};

export default Page404;
