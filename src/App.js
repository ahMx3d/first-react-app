import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

import './App.css';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route
            exact
            path="/"
            component={Home} />
          <Route
            path="/services"
            component={Services} />
          <Route
            path="/products"
            component={Products} />
          <Route
            path="/sign-up"
            component={SignUp} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
