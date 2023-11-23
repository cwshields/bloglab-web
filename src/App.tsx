import "./sass/App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { useEffect } from "react";
import SideNav from "./components/SideNav/SideNav";

export default function App() {
  useEffect(() => {
    document.title = "BlogLab";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <SideNav />
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}
