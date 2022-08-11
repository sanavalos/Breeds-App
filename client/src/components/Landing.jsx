import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import landing from '../images/dogs_pack.png';

const Container = styled.div`
    height: 100vh;
    background-image: url(${landing});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Raleway', sans-serif;
    .title{
      text-align: left;
      width: fit-content;
      color:#ffaa00;
    }
    h1{
      font-size: 15vh;
      font-weight: 700;
      margin: 0;
      -webkit-text-stroke: 1px #fff;
    }
    .button{
      margin-top: 30vh;
      font-size: 6vh;
      border: 2px solid black;
      border-radius: 10px;
      text-decoration: none;
      color: white;
      background-color: #F64F00;

    }
    `

function Landing() {
  return (
    <Container>
      <div className='title'>
        <h1>ALL DOGS ARE GOOD BOYS</h1>
      </div>
        <NavLink to='/home' className='button'>
            <span>Join the pack!</span>
        </NavLink>
    </Container>
  )
}

export default Landing