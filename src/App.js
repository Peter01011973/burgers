import React from 'react';
import Home from './components/Home/home';
import './App.css';
// import BestBurgerArea from './components/best-burger-area/best-burger-area';
// import PresidentBurgerArea from './components/president-burger-area/president-burger-area';
import About from './components/About/about';
import {Switch, Route} from 'react-router-dom';
import Layout from './HOC/layout/layout';
import Menu from './components/Menu/menu';
import Contact from './components/contact/contact';
import NotFound from './components/not-found/not-found';

function App() {
  
  return (
     <Layout>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/home'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/menu'><Menu /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route component = {NotFound}/>
        </Switch>
   </Layout>
  );
}

export default App;
