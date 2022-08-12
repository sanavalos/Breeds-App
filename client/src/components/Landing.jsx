import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import landing from '../images/landing.jpg';

const Container = styled.div`
    height: 100vh;
    width:100%;
    background-image: url(${landing});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display:flex;
    flex-direction:row;
    font-family: 'Raleway', sans-serif;
    .title{
      text-align: left;
      width: fit-content;
      color: white;
    }
    h1{
      font-size: 17vh;
      font-weight: 700;
      margin: 0;
      left: 0;
      display:table-caption;
    }
    .button{
      margin-top: 50vh;
      margin-left: 10vw;
      font-size: 6vh;
      border: 2px solid black;
      border-radius: 10px;
      text-decoration: none;
      color: white;
      background-color: #F64F00;
      height:fit-content;
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
    </Container>
  )
}

export default Landing