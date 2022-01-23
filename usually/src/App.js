import React, { Component } from 'react';
import Header from './header';
import Dishes from './Dishes_div';
import Footer from './Footer';
import MenuPage from './MenuPage';
import LuncMenu from './LuncMenu';

import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Home from './home';
import SingleCategory from './single-category';


function App(params) {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LuncMenu/>} />
    <Route path="home" element={<Home/>} />

    <Route path="single-category" element={<SingleCategory />} />
  </Routes>
</BrowserRouter>
 )
}
export default App;




















