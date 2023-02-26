import NavSection from '../NavSection';
import RecycleSection from '../RecycleSection';
import { Ticker } from '../Ticker/Ticker';
import { Footer } from './../Footer/Footer';

import './App.scss';

export const App = () => (
  <div className="App">
    <NavSection />
    <Ticker />
    <RecycleSection />
    <Footer />
  </div>
);
