import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
