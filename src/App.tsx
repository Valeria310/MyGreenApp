import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import { AppRoutes } from './app/AppRoutes';
import ScrollToTop from './app/ScrollToTop';

export const App = () => (
    <BrowserRouter>
        <ScrollToTop />
        <div className='App'>
            <AppRoutes />
        </div>
    </BrowserRouter>
);
