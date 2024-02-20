import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import { AppRoutes } from './app/AppRoutes';

export const App = () => {

    return (
        <BrowserRouter>
            <div className='App'>
                <AppRoutes/>
            </div>
        </BrowserRouter>
    );
};