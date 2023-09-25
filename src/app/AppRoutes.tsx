import { Route, Routes } from 'react-router-dom';

import AdminPanel from 'src/pages/AdminPanel';
import CreatePointPage from 'src/pages/CreatePointPage';
import EditPointPage from 'src/pages/EditPointPage';
import { Homepage } from 'src/pages/Homepage/Homepage';
import LogInPage from 'src/pages/LogInPage';
import PointPage from 'src/pages/PointPage';
import { RecyclePage } from 'src/pages/RecyclePage/RecyclePage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recycle" element={<RecyclePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/create-new-point" element={<CreatePointPage />} />
            <Route path="/admin/point/:id" element={<PointPage />} />
            <Route path="/admin/point/:id/edit" element={<EditPointPage />} />
        </Routes>
    );
};
