import React from 'react';

import { Header } from 'src/components/Header/Header';
import Page404 from 'src/components/Page404';

import './PageNotFound.scss';

export const PageNotFound = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="page404-sticky-container">
                <Page404 />
            </div>
        </React.Fragment>
    );
};
