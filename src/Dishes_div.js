import React from 'react';

function Dishes() {
    let dishes = [
        {
            imgsrc:"https://m.economictimes.com/thumb/msid-70143550,width-1200,height-900,resizemode-4,imgsize-1479961/zomato-indias-initial-tweet-was-liked-by-over-19000-users-and-re-tweeted-nearly-4000-times-.jpg",
            manu_name:"menu",
        },
        {
            imgsrc:"https://thumbs.dreamstime.com/b/channa-poori-chana-salad-achaar-pickle-divided-plate-breakfast-37674842.jpg",
            manu_name:"specials",
        },
        {
            imgsrc:"https://www.locusmap.app/wp-content/uploads/2020/11/banner-w2-1024x512.jpg",
            manu_name:"our way",
        }];
        
return(
    <div className="menu__container">
            {dishes.map((dishe)=>(
                <div className="down_div">
                <div className="first_down_div">

                    <img 
                    src={dishe.imgsrc}
                    alt="food-plaza"
                    className="down_img"/>
                    </div>
                    <div className="manu_span"> {dishe.manu_name} </div>
                </div>
            ))}
        </div>
    )
}
export default Dishes;











