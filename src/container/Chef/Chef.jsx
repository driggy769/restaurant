import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What I believe</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I have always prided myself on my attention to culinary detail. Whether it is a simple burger or fine French cuisine.</p>
        </div>
        <p className="p__opensans">Working at Pearsteen's I get to blend my creativity with food every person loves. Creating elegant burgers, at affordable prices with gourmet farm to grill ingredients. It reignites my passion for cooking on a daily basis.</p>
      </div>

      <div className="app__chef-sign">
        <p>Ray Plenish</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;