import React, { useEffect } from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { useAppSelector, useAppDispatch } from './hooks/hooks';

function App() {
  const state = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Nav />
            <ProductDisplay />
          </>
        }/>
        <Route path='/product' element={
          <>
            <ProductPage />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
