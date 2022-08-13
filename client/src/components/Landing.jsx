import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import landing from '../images/dog_landing.png';

const Container = styled.div`
    height: 100vh;
    width:100%;
    display:flex;
    flex-direction:row;
    background-color: #FFAA00;
    font-family: 'Fredoka One', cursive;
    .title{
      text-align: left;
      width: fit-content;
      color: white;
    }
    h1{
      font-size: 16.5vh;
      font-weight: 400;
      margin: 0;
      left: 0;
      display:table-caption;
    }
    .button{
      margin-top: 45vh;
      margin-left: 12vw;
      font-size: 6vh;
      border: 2px solid black;
      border-radius: 10px;
      text-decoration: none;
      color: white;
      background-color: #F64F00;
      height: fit-content;
    }
`

function Landing() {
  return (
    <Container>
      <div className='title'>
        <h1>ALL 
          DOGS 
          ARE 
          GOOD 
          BOYS</h1>
      </div>
      <NavLink to='/home' className='button'>
          <span>Join the pack!</span>
      </NavLink>
      <img src={landing} alt='dog landing'/>
    </Container>
  )
}

export default Landing