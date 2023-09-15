import { Route, Routes } from 'react-router-dom';

import { Homepage } from 'src/pages/Homepage/Homepage';
import { RecyclePage } from 'src/pages/RecyclePage/RecyclePage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/recycle' element={<RecyclePage />} />
        </Routes>
    );
};
