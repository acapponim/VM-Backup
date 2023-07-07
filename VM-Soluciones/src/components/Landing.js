import React from 'react';
import HeaderLanding from './HeaderLanding';
import MainLanding from './MainLanding';
import Footer from "./Footer";
import "../styles/landing.css";

export default function App(){

    return (
      <div>
        <HeaderLanding />
        <MainLanding />
        <Footer />
      </div>
    )
  }