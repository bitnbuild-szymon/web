import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import { NavbarContextProvider } from './contexts/NavbarContext';
import { init } from "./lib/firebase/module.ts";
import { useEffect } from 'react';
import SignIn from './views/auth/sign-in/SignIn.jsx';
import SignUp from './views/auth/sign-up/SignUp.jsx';
import Exercises from './views/Exercises/Exercises.jsx';

function App() {

  useEffect(() => {
    init();
  }, []);

  return (
    <NavbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/auth/sign-in' element={<SignIn />} />
            <Route path='/auth/sign-up' element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NavbarContextProvider>
  );
}

export default App;
