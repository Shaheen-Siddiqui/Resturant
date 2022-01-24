import React, { Component } from 'react';
import LuncMenu from './LuncMenu';
import Home from './home';
import SingleCategory from './single-category';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App(params) {
 return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="luncmenu" element={<LuncMenu />} />
  <Route path="single-category" element={<SingleCategory />} />
  </Routes>
</BrowserRouter>
 )
}
export default App;




















