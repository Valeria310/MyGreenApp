import { Route, Routes } from 'react-router-dom';

import CreatePointPage from 'src/pages/adminPanel/CreatePointPage';
import EditPointPage from 'src/pages/adminPanel/EditPointPage';
import LogInPage from 'src/pages/adminPanel/LogInPage';
import ManagePoints from 'src/pages/adminPanel/ManagePoints';
import PointPage from 'src/pages/adminPanel/PointPage';
import { Homepage } from 'src/pages/Homepage/Homepage';
import { PrivacyPolicyPage } from 'src/pages/PrivacyPolicy/PrivacyPolicyPage';
import { RecyclePage } from 'src/pages/RecyclePage/RecyclePage';
import { SearchResultsList } from 'src/pages/SearchResultsList/SearchResultsList';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recycle" element={<RecyclePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/admin" element={<ManagePoints />} />
            <Route path="/admin/create-new-point" element={<CreatePointPage />} />
            <Route path="/admin/point/:id" element={<PointPage />} />
            <Route path="/admin/point/:id/edit" element={<EditPointPage />} />
            <Route path="/search-results" element={<SearchResultsList />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
    );
};
