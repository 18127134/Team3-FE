// Import module
import Header from "./Customer/header";
import Navbar from "./Customer/navbar";
import Formsignup from "./Customer/form_signup";
import Footer from "./Customer/footer";
import Formsignin from "./Customer/form_signin";
import Homepage from "./Customer/homepage";
import React, { Fragment } from "react";
import Calendarbook from "./Customer/booking/calendar";
import Chooseservice from "./Customer/booking/chooseservice";
import Bookinginformation from "./Customer/booking/information";
import Payment from "./Customer/booking/payment";
import Mngbooking from "./Customer/mngbooking/Mngbooking";
import AuthContextProvider from "./context/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Customer() {
  let itemcheck = [];

  return (
    <Fragment>
      <AuthContextProvider>
        <Router>
          <Header />
          <Navbar status={1} />
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
      </AuthContextProvider>
    </Fragment>
  );
}

export default Customer;
