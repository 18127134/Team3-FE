import './App.css';
import Header from './Component/header';
import Navbar from './Component/navbar';
import Formsignup from './Component/form_signup';
import Footer from './Component/footer';
import Formsignin from './Component/form_signin';
import Homepage from './Component/homepage';
import React from 'react';
import Calendarbook from './Component/booking/calendar';
import Chooseservice from './Component/booking/chooseservice';
import Bookinginformation from './Component/booking/information';
import Payment from './Component/booking/payment';
import Mngbooking from './Component/Mngbooking';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  let itemcheck = [];

  return (
    <Router>
      <Header />
      <Navbar status={0} />
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
        <Route path="/booking" exact>
          <Calendarbook />
        </Route>
        <Route path="/booking/chooseservice">
          <Chooseservice itemcheck={itemcheck} />
        </Route>
        <Route path="/booking/information">
          <Bookinginformation />
        </Route>
        <Route path="/booking/payment">
          <Payment />
        </Route>

        <Route path="/managementbooking">
          <Mngbooking />
        </Route>

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;

