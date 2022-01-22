import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MenuPage from './MenuPage';

const Header=()=>{
    return(<>

<header className="header"> 
<div className="Leftside_div">
<img className="logo_img" src="https://www.bismillahrestaurant.com/wp-content/uploads/2020/07/Bismillah-Logo.png" />
<p className="pera1">Mohammed Aadil Raza</p>
<i className="fa fa-star"></i><span className="srat_text">US CERTIFIED</span>
</div>
<div className="Rightside_div">
<div className="for_icons">




<Router>
<Link to="/MenuPage"><i className="fa fa-cutlery"></i></Link>

<Routes>
<Route path="/MenuPage" component={<MenuPage />} />
</Routes>
</Router>

<span className="menu_icons">Menu</span>
<i className="fa fa-info-circle"></i>
<span className="menu_icons">About</span>
<i className="fa fa-asterisk"></i>
<span className="menu_icons">Awards</span>
</div>
<div className="for_num">
<span className="number">762-487-4172 </span>
<span className="delever">* We deliver</span>
</div>
</div>

</header>

        </>
    )
}
export default Header;




