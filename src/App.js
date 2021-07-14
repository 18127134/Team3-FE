import './App.css';
import Header from './Component/header';
import Navbar from './Component/navbar';
import Formsignup from './Component/form_signup';
import Footer from './Component/footer';
import Formsignin from './Component/form_signin';
import Homepage from './Component/homepage';
import React from 'react';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Homepage />

      <Footer />
    </div>

  );
}

export default App;
