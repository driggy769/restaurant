import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="From Farm to Grill" />
      <h1 className='app__header-h1'>
        Burgers Done Gourmet
      </h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
        Introducing Pearsteen's, a gourmet burger restaurant that offers a unique and extraordinary dining experience for burger enthusiasts. Our establishment is built upon the principles of quality, creativity, and unparalleled flavor. From the moment you step through our doors, you will be captivated by the inviting atmosphere, attentive service, and an array of tantalizing burger creations.
      </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="hero"  />
    </div>
  </div>
);

export default Header;
