import React from 'react';
import Header from './Components/Header/header';
import Infosection from './Components/InfoSection/infosection';
import HeaderPrimary from './Components/header-primary/HeaderPrimary';
import HeaderSecondary from './Components/header-secondary/HeaderSecondary';
import Footer from './Components/Footer/footer';
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeaderPrimary />
      <HeaderSecondary />
      <Infosection />
      <Footer />
    </div>
  );
};

export default App;
