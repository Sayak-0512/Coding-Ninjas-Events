import React from 'react';
import './App.css';
import Events from './Events';
import Footer from './Footer';
import ImpLinks from './ImpLinks';
import Appbar from './Appbar';

function App() {
  return (
    <div>
      <Appbar />
      <div className="container-class">
        <Events />
        <Footer />
        <ImpLinks />
      </div>
    </div>
  );
}

export default App;
