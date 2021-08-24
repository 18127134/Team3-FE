import "./App.css";
import React, { Fragment } from "react";
import Customer from "./Component/Customer";
import Manager from "./Component/Manager";

function App() {
  const type = 0;

  return <Fragment>{type === 1 ? <Customer /> : <Manager />}</Fragment>;
}

export default App;
