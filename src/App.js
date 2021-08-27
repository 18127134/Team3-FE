import "./App.css";
import React, { Fragment } from "react";
import Customer from "./Component/Customer";
import Manager from "./Component/Manager";
import AuthContextProvider from "./Component/context/authContext";

function App() {
  const type = 1;

  return (
    <Fragment>
      <AuthContextProvider>
        {type === 1 ? <Customer /> : <Manager />}
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
