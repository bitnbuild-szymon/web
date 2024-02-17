import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';

import { init } from "bitnbuild-back"

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={Home}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
