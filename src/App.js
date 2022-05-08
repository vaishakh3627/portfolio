import React from "react";

import "./App.scss";

import SideBar from "./common/sidebar";
import ApplicationRoutes from "./Routes";

function App() {
  return (
    <>
      <div className="app">
        <SideBar />
        <ApplicationRoutes />
      </div>
    </>
  );
}

export default App;
