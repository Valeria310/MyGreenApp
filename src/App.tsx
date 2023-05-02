import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import MapSection from './components/MapSection/MapSection';
import NavSection from './components/NavSection';
import { ParallaxSection } from './components/Parallax/Parallax';
import RecycleSection from './components/RecycleSection';
import { Ticker } from './components/Ticker/Ticker';

import './App.scss';


export const App = () => (
    <div className="App">
        <Header/>
        <ParallaxSection/>
        <NavSection/>
        <RecycleSection/>
        <MapSection/>
        <Ticker/>
        <Footer/>
    </div>
);