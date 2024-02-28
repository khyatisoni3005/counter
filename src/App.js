import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter"
import TodoCrud from "./components/TodoCrud";
function App() {
  return (
    <>


      <TodoCrud />

    </>
  );
}

export default App;
