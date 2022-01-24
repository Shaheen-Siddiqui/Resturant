import React from 'react';
import Dishes from './Dishes_div';
import Footer from './Footer';
import Header from './header';


const Home=(props)=>{
return(<>

<Header/>
<img className="main_img" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/m/o/p58789-15710497445da451106ae0b.jpg?tr=tr:n-large" />
<Dishes props={props}/>
<Footer/>
    </>
    )
}
export default Home;





