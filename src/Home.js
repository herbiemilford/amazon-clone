import React from "react";
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        
        src="https://www.amazon.com/images/G/01/Audible/en_US/images/TM_Sandman_Amazon_GRD_DesktopHero_Template_1500x600_V4._CB410283097_.jpg"
    
      />

<div className="home__row">
<Product 
      id="12321341"
      title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Sandstone"
      price={79.99}
      rating={2}
      image="https://m.media-amazon.com/images/I/61KgbvNhh6L._AC_UY327_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />

      <Product 
      id="12321341"
      title="Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player, released 2019"
      price={119.99}
      rating={5}
      image="https://m.media-amazon.com/images/I/41fziVetM7L._AC_UY327_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />
</div>

<div className="home__row">
<Product 
      id="12321341"
      title="KitchenAid KSM7586PSR 7-Quart Pro Line Stand Mixer Sugar Pearl Silver"
      price={544.95}
      rating={3}
      image="https://m.media-amazon.com/images/I/71DnucdeYpL._AC_UL480_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />

      <Product 
      id="12321341"
      title="KitchenAid KSM7586PSR 7-Quart Pro Line Stand Mixer Sugar Pearl Silver"
      price={11.96}
      rating={5}
      image="https://m.media-amazon.com/images/I/71kLrGElbOL._AC_UY327_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />


      <Product 
      id="12321341"
      title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)"
      price={198.95}
      rating={5}
      image="https://m.media-amazon.com/images/I/71jiGaztijL._AC_UY327_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />
</div>
<Product 
      id="12321341"
      title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
      price={999.99}
      rating={4}
      image="https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UY327_FMwebp_QL65_.jpg" 
    
      class="s-image" 
      alt="" 
      
      />
<div>


</div>
  

      <h1>I am the home page</h1>
    </div>
  );
}

export default Home;
