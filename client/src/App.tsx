import React from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ProductDisplay />
    </div>
  );
}

export default App;
