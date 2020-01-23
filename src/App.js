import React from 'react';
import Home from './containers/Home/home';
import './App.css';
import About from './containers/About/about';
import {Switch, Route} from 'react-router-dom';
import Layout from './HOC/layout/layout';
import Menu from './containers/Menu/menu';
import NotFound from './components/not-found/not-found';
import Contact from './containers/contact/contact';

function App() {
  
  return (
     <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component = {About} />
          <Route path='/menu' component = {Menu} />
          <Route path='/contact' component = {Contact} />
          <Route component = {NotFound}/>
        </Switch>
   </Layout>
  );
}

export default App;
