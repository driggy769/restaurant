import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="P Letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>
          About Us
        </h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'>
          Welcome to our gourmet burger haven, where culinary artistry meets casual indulgence. Led by the extraordinary Michelin-starred chef Ray Plenish, our restaurant redefines the burger experience. Savor every bite of our meticulously crafted creations, blending exceptional flavors with a touch of gastronomic brilliance. Prepare for a burger revelation like no other.
        </p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>
          Our History
        </h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className='p__opensans'>
          In 2020, a gourmet burger restaurant emerged, blending culinary artistry with premium ingredients. With bold flavors and meticulous craftsmanship, it swiftly captured hearts and palates. By 2023, its exceptional dedication was rewarded with a prestigious Michelin star, forever cementing its place in culinary history.
        </p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
