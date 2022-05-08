import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./container/Home";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default ApplicationRoutes;
