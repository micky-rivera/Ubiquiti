import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <nav className='nav-bar'>
        <Form />
      </nav>
      <List />
    </div>
  );
}

export default App;
