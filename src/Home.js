import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/> */}
      {/* <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/02/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMjpg_.jpg"
        loading="eager"
      /> */}
      <img
        className="home__image"
        alt="Hear Neil Gaiman's DC masterpiece, The Sandman on Audible"
        src="https://www.amazon.com/images/G/01/Audible/en_US/images/TM_Sandman_Amazon_GRD_DesktopHero_Template_1500x600_V4._CB410283097_.jpg"
        data-a-hires="https://www.amazon.com/images/G/01/Audible/en_US/images/TM_Sandman_Amazon_GRD_DesktopHero_Template_3000x1200_V5._CB410326722_.jpg"
        width="1500px"
        height="600px"
      ></img>
      {/* <img
      className="home_image"
        alt="Alessia Cara - replay the livestream"
        src="https://www.amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/071720/071720_US_AlessiaCara_Live_GW_CL_1500x600-leadout._CB410853310_.jpg"
        data-a-hires="https://www.amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/071720/071720_US_AlessiaCara_Live_GW_CL_3000x1200-leadout._CB410853310_.jpg"
        width="1500px"
        height="600px"
      ></img> */}
      <h1>I am the home page</h1>
    </div>
  );
}

export default Home;
