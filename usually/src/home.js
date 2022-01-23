import React from 'react';
import Dishes from './Dishes_div';
import Footer from './Footer';
import Header from './header';


const Home=(props)=>{
    return(<>

<Header/>
<Dishes props={props}/>
<Footer/>
        </>
    )
}
export default Home;





