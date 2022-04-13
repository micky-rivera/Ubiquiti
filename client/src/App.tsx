import React from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { useAppSelector } from './hooks/hooks';

function App() {
  const state = useAppSelector(state => state.app);

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
            <ProductPage
            name={state.chosenProduct.name}
            shortName={state.chosenProduct.shortName}
            line={state.chosenProduct.line}
            lineId={state.chosenProduct.lineId}
            deviceId={state.chosenProduct.deviceId}
            maxPower={state.chosenProduct.maxPower}
            speed={state.chosenProduct.speed}
            numOfPorts={state.chosenProduct.numOfPorts}
            />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
