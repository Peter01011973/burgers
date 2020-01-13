import React from 'react';
import SwitcherBar from './components/header/header'
import SliderArea from './components/slider-area/slider-area';
import './App.css';
import BestBurgeArea from './components/best-burger-area/best-burger-area';
import PresidentBurgerArea from './components/president-burger-area/president-burger-area';
import AboutArea from './components/about-area/about-area';

function App() {
  return (
    <div>
      <SliderArea>
        <SwitcherBar />
      </SliderArea>
      <BestBurgeArea />
      <PresidentBurgerArea />
      <AboutArea />
    </div>
  );
}

export default App;
