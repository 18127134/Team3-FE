import './App.css';
import Header from './Component/header';
import Navbar from './Component/navbar';
import Formsignup from './Component/form_signup';
import Footer from './Component/footer';
import Formsignin from './Component/form_signin';
import Homepage from './Component/homepage';
import React from 'react';
import Calendarbook from './Component/booking/calendar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/signin">
          <Formsignin />
        </Route>
        <Route path="/signup">
          <Formsignup />
        </Route>
        <Route path="/booking">
          <Calendarbook />
        </Route>
        <Route path="/booking/chooseservice">
          <Calendarbook />
        </Route>
      </Switch>



      <Footer />
    </Router>

  );
}

export default App;

