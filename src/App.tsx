import './sass/App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Router from "./pages/router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  );
}
