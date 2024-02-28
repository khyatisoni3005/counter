import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/pages/Counter"
import TodoCrud from "./components/pages/TodoCrud"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Navbar from "./components/headers/Navbar"
import ViewTodo from "./components/pages/ViewTodo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" excate element={<Home />} />
        <Route path="/TodoCrud" element={<TodoCrud />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/view-todo/:id" element={<ViewTodo />} />

      </Routes>
    </>
  );
}

export default App;
