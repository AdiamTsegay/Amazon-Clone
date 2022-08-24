import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="347698021"
            title="4moms mamaRoo Multi-Motion Baby Swing, Bluetooth Baby Swing with 5 Unique Motions, Grey"
            price={299}
            rating={5}
            image="https://m.media-amazon.com/images/I/7110r-WJGTL._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="347698067"
            title="Gerber Baby Cereal 1st Foods, Rice, 8 Ounce (Pack of 6)"
            price={16}
            rating={5}
            image="https://m.media-amazon.com/images/I/519C9e+-aVL._AC_SY580_.jpg"
          />
          <Product
            id="347698642"
            title="Mrs. Meyer's Multi-Surface Cleaner Concentrate"
            price={17.57}
            rating={4}
            image="https://m.media-amazon.com/images/I/81xit7dEj7L._AC_SL1500_.jpg"
          />
          <Product
            id="347698543"
            title="MyBaby SoundSpa On-The-Go-Portable White Noise Machine"
            price={19.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/51izt0lc50S._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="347697621"
            title="Threeking RC Cars Stunt car Remote Control Car Double Sided 360° Flips Rotating Outdoor Indoor car Toy Present Gift for Boys/Girls Ages 6+"
            price={26.23}
            rating={4}
            image="	https://m.media-amazon.com/images/I/71vT-bNjraL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home