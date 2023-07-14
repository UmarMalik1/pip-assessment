import React from 'react';
import Header from './Components/Header/header';
import CategoriesBar from './Components/CtegoriesBar/categoriesBar';
import SubHeader from './Components/SubHeader/subheader';
import Infosection from './Components/InfoSection/infosection';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <CategoriesBar />
      <Infosection/>
    </div>
  );
};

export default App;
