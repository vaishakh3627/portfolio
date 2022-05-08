import React from "react";

import "./App.scss";

import SideBar from "./common/sidebar";
import Home from "./container/Home";

function App() {
  return (
    <>
      <div className="app">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default App;
