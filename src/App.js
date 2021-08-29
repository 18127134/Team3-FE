// Import modules
import "./App.css";
import React, { Fragment } from "react";
import Customer from "./Component/Customer";
import Manager from "./Component/Manager";
import AuthContextProvider from "./Component/context/authContext";

// Main func
function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <Manager />
        <Customer />
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
