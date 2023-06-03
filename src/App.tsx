import "./sass/App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "BlogLab";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  );
}
