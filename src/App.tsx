import React from 'react';
import Header from './Components/Header/header';
import Infosection from './Components/InfoSection/infosection';
import HeaderPrimary from './Components/header-primary/HeaderPrimary';
import HeaderSecondary from './Components/header-secondary/HeaderSecondary';
import Footer from './Components/Footer/footer';
import { Routes, Route } from 'react-router-dom'
import OffMenu from './Components/off-menu/offMenu';
import Sidebar from './Components/side-bar-session/sidebar';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeaderPrimary />
      <HeaderSecondary />
      <Infosection />
      <OffMenu />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
