import React from 'react';
import logo from './assets/logo.svg';
import './sass/App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {routes}
      </BrowserRouter>
    </>
  );
}

export default App;
