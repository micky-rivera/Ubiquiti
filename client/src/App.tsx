import React, { useEffect } from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { setFilters, setFormat } from './slices/slices';

function App() {
  const state = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.localStorage.format) {
      dispatch(setFormat(JSON.parse(window.localStorage.format).type));
    }
    if (window.localStorage.filters) {
      dispatch(setFilters(JSON.parse(window.localStorage.filters).terms));
    }
  }, [])

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
