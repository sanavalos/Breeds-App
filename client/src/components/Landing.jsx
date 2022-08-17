import React from 'react';
import { NavLink } from 'react-router-dom';
import { LandingStyle } from './Styles';
import landing from '../images/dog_landing.png';


function Landing() {
  return (
    <LandingStyle>
      <div className='title'>
        <h1>ALL
          DOGS
          ARE
          GOOD
          BOYS</h1>
      </div>
      <NavLink to='/home' className='button'>
        <div className='buttonEffect'>
              <p>
                JOIN THE PACK
                <span></span><span></span><span></span><span></span>
              </p>
        </div>
      </NavLink>
      <img src={landing} alt='dog landing' />
    </LandingStyle>
  )
}

export default Landing