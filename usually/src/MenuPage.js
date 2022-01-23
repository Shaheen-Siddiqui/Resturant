import React from 'react';
import Header from './header';
import Footer from './Footer';

const array=[
    {menuImg:"https://static.punjabkesari.in/multimedia/2016_7image_15_16_405779176lunch-ll.jpg",
menu:"Rice-chpati"},
    {menuImg:"https://cdn.sharechat.com/afternoonlunchtime_6b4f81cf-159f-464b-9361-ff763903e703-4a617106-f1bd-4a55-8c97-e5582872a21c_cmprsd_40.jpg",
menu:"shahi-sabzi"},
    {menuImg:"https://i.pinimg.com/736x/ef/7d/c4/ef7dc431b433906f4deacb302f16dfbe.jpg",
menu:"chhole-bhture"},
    {menuImg:"https://i.pinimg.com/originals/7b/61/de/7b61de433a105b546b4a742ab6693e8d.jpg",
menu:"pulse-verity"}

];
const array2=[
    {menuImg:"https://nowlucknow.com/wp-content/uploads/2018/08/2a-1.jpg",
menu:"Mix-veg"},
    {menuImg:"https://static.toiimg.com/thumb/imgsize-815370,msid-70156766,width-800,resizemode-4/70156766.jpg",
menu:"Rice-verity"},
    {menuImg:"https://b.zmtcdn.com/data/pictures/chains/2/91662/5c6f76bd1844f3814073926aadcb49ec.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
menu:"Handi-biryani"},
    {menuImg:"https://b.zmtcdn.com/data/pictures/chains/8/19232598/7c2a3a29ad8000830bf4433b8302802d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
menu:"Murg-musallam"}
    
];

const MenuPage=()=>{
return(<>
{/* <Header/> */}
<h2 className="Menu_Categories">Menu Categories</h2>
<p  className="Menu_pera">Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.</p>
<div className='container_of_LM'>
{array.map((props)=>(
    <div className="Lunch_menu">
    <img className="lunch_img" src={props.menuImg} />
    <div className="lunch_span">{props.menu}</div>
    </div>
))}
</div>
{/*  */}
<div className='container_of_LM'>
{array2.map((props)=>(
    <div className="Lunch_menu">
    <img className="lunch_img" src={props.menuImg} />
    <div className="lunch_span">{props.menu} </div>
    </div>
    

))}
</div>

{/* <Footer /> */}
</>)}


export default MenuPage;







































