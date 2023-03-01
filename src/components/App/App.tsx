import NavSection from '../NavSection';
import RecycleSection from '../RecycleSection';
import { Ticker } from '../Ticker/Ticker';
import { Footer } from './../Footer/Footer';
import { ParallaxSection } from './../Parallax/Parallax';
import { Header } from './../Header/Header';

import './App.scss';

export const App = () => (
  <div className="App">
    <Header />
    <ParallaxSection />
    <NavSection />
    <Ticker />
    <RecycleSection />
    <Footer />
  </div>
);
