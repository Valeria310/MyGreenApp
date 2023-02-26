import NavSection from '../NavSection';
import RecycleSection from '../RecycleSection';
import { Ticker } from '../Ticker/Ticker';

import './App.scss';

export const App = () => (
  <div className="App">
    <NavSection />
    <Ticker />
    <RecycleSection />
  </div>
);
