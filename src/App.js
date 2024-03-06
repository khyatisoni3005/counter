import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/pages/Counter"
import Medicine from "./components/pages/Medicine"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Navbar from "./components/headers/Navbar"
import ViewMedicine from "./components/pages/ViewMedicine";
import Login from "./components/pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/login" excate element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/view-medicine/:id" element={<ViewMedicine />} />
        <Route path="/Medicine" element={<Medicine />} />

      </Routes>
    </>
  );
}

export default App;
