import React, { Component } from 'react';
import Header from './header';
import Dishes from './Dishes_div';
import Footer from './Footer';
import MenuPage from './MenuPage';
import LuncMenu from './LuncMenu';

function App(params) {
return(
  <>
  <Header />
  <img className="main_img" src="https://wallpaperaccess.com/full/3014609.jpg" />
  <Dishes />
  <Footer /> 

  {/* Saprate pages have to link these pages "MenuPage","LuncMenu" to home page*/}

  {/* <MenuPage /> */}
  {/* <LuncMenu /> */}

  </>)
}
export default App;




















