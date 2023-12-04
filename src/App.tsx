import "./sass/App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { useEffect } from "react";
import SideNav from "./components/SideNav/SideNav";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  useEffect(() => {
    document.title = "BlogLab";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="bloglab container">
          <SideNav />
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}
