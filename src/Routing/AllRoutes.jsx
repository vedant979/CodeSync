import React from 'react';
import { Routes, Route} from "react-router-dom";
import {HomePage} from "../Pages/HomePage/HomePage";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}
