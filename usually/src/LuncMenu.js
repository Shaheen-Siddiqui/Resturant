import React from "react";
const lunchArray=[
    {itemImage:"http://www.spiceindiaonline.com/wp-content/uploads/Lunch-Dinner-Menu-7-%E2%80%93-South-Indian-Vegetarian-Lunch-Menu_-copy.jpg",
    itemName:"Veal with Mixed Vegetables",
     Ditems:"D01",
     itemPera:'A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice. It is originally developed in Kerala and then got familiarity in Tamilnadu state. However, somewhat similar to a crepe in appearance, although savoury flavours are generally emphasized (sweet variants also exist). Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented. Dosas '},
     
    {itemImage:"https://i.ytimg.com/vi/o8lDCY2_jyw/maxresdefault.jpg",
    itemName:"Fried Fish",
    Ditems:"D02",
    itemPera:'A fish fry is a meal containing battered or breaded fried fish. It usually also includes french fries, coleslaw, hushpuppies, lemon slices, tartar sauce, hot sauce, malt vinegar and dessert. Some Native American versions are cooked by coating fish with semolina and egg yolk.Fish is often served on Friday nights during Lent, the Christian season of repentance, as a restaurant special or through church fundraisers.[1] A fish fry may include potato pancakes (with accompanying side dishes of sour cream or applesauce) and sliced caraway rye bread if served in a German restaurant or area.A shore lunch is traditional in the northern United States and Canada. For decades, outdoor enthusiasts have been cooking their catch on the shores of their favourite lakes.'},
     
    {itemImage:"https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg",
    itemName:"spicy Nudels",
    Ditems:"D03",
    itemPera:'Korean Spicy Noodles are characterized by the spicy savory sauce, the use of glass noodles (more on noodles below), thinly sliced protein (usually steak) and vegetables, usually thinly sliced onions, carrots, mushroom, spinach and sometimes bell peppers.Korean Spicy Noodles are characterized by the spicy savory sauce, the use of glass noodles (more on noodles below), thinly sliced protein (usually steak) and vegetables, usually thinly sliced onions, carrots, mushroom, spinach and sometimes bell peppers.Korean Spicy Noodles are characterized by the spicy savory sauce, the use of glass noodles (more on noodles below), thinly sliced protein (usually steak) and vegetables, usually thinly sliced onions, carrots, mushroom, spinach and sometimes bell peppers.'},
     
    {itemImage:"https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/master/pass/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg",
    itemName:"Daal Bati",
    Ditems:"D04",
    itemPera:'Daal is prepared using tuvaar dal, chana daal (prepared by removing skin of split chickpeas), mung dal, moth dal, or urad dal. The pulses or lentils are cooked together after being soaked in water for a few hours. First, a small amount of vegetable oil is heated in a frying pan and then the seasoning rai-jeera (mustard and cumin seeds) is added into the hot oil. Then green chilli, garlic and some spices including asafoetida, red chilli, turmeric, coriander, ginger are added. There may be a sweet and sour version of dal in some regions. Finally, the boiled daal is added and cooked.Baati is a hard bread made up of wheat flour commonly known as aata. Wheat flour is kneaded with little bit of salt, dahi (yogurt) and water.'},
    
    {itemImage:"https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Goan-Fish-Curry-800x530.png",
    itemName:"Veal with Mixed Vegetables",
    Ditems:"D05",
    itemPera:'to ready to use combination of cut vegetables. The vegetables may be chopped, sliced, cubed or in juliennes. The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, French beans and peas.to ready to use combination of cut vegetables. The vegetables may be chopped, sliced, cubed or in juliennes. The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, French beans and peas.to ready to use combination of cut vegetables. The vegetables may be chopped, sliced, cubed or in juliennes. The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, French beans and peas.'},
     
    {itemImage:"https://i.ytimg.com/vi/SzWXwAEmNyw/hqdefault.jpg",
    itemName:"Msaledar chhole",
    Ditems:"D06",
    itemPera:'Chhole Masala (Chole Chana Masala), a delicious chana curry from Punjabi cuisine is popular in all over India. A spicy and tempting curry is prepared from white chickpeas (kabuli chana), tomatoes, onion and basic Indian spices and best enjoyed with bhatura (deep fried puffed Indian bread) as evening snack or dinner. In this recipe, channa are boiled with tea powder to get darken color and fresh chhole masala powder is prepared to get restaurant style flavor. Learn how to make this delicious curry at your home with this easy step by step recipe.'},
    
];




const LunchMenu = () => {
  return (
    <>
      <h2 className="lunch_heading">Lunch Menu</h2>
      <p className="lunch_heading pera-pe">Lunch is not served until after 1pm.</p><br /><br />
      {lunchArray.map((props)=>(

        <div className="outer_lunchMenu">

        <div className="inner_lunchMenu">
        <img className="inner_lunchMenu_img" src={props.itemImage} />
        <span className="lunchMenu_span">{props.Ditems}</span>
         
         <div>
          <p className="lunchMenu_pera">
            <h3>{props.itemName}, </h3><br />{props.itemPera}
          </p>
        </div>
        </div>


    </div>
    ))}
    
    </>
  );
};
export default LunchMenu;
