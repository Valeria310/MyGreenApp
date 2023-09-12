import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import RecycleSection from '../../components/RecycleSection';

import './RecyclePage.scss';

export const RecyclePage = () => {
    return (
        <div className="App">
            <Header />
            <RecycleSection expandable={true} />
            <Footer />
        </div>
    );
};
