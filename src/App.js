import React from 'react';
import SliderArea from './components/slider-area/slider-area';
import './App.css';
// import BestBurgerArea from './components/best-burger-area/best-burger-area';
// import PresidentBurgerArea from './components/president-burger-area/president-burger-area';
import AboutArea from './components/about-area/about-area';
import {Switch, Route} from 'react-router-dom';
import Layout from './HOC/layout/layout';
import AllBurgersMenu from './components/all-menu/all-menu';
import Contact from './components/contact/contact';

function App() {
  
  return (
    <Layout>
        <Switch>
          <Route path='/' exact component={AboutArea} />
          <Route path='/home'><SliderArea /></Route>
          <Route path='/about'><AboutArea /></Route>
          <Route path='/menu'><AllBurgersMenu /></Route>
          <Route path='/contact'><Contact /></Route>
          {/* <Route component = {NotFound}/> */}
        </Switch>
   </Layout>
  );
}

export default App;
