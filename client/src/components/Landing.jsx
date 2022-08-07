import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import landing from '../images/landing.jpg';

const Container = styled.div`
    height: 100vh;
    background-image: url(${landing});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display:flex;
    align-items:center;
    font-family: 'Raleway', sans-serif;
    .title{
      text-align:left;
      width:fit-content;
      
    }
    h1{
      font-size: 15vh;
      font-weight: 700;
      margin: 0;
    }
    .button{
      margin-left: 15vw;
      font-size: 6vh;
      border: 5px solid black;
      border-radius: 10px;
      text-decoration: none;
      color: inherit;
    }
    `

function Landing() {
    

  return (
    <Container>
      <div className='title'>
        <h1>ALL<br/>
          DOGS<br/>
          ARE<br/>
          GOOD<br/>
          BOYS</h1>
      </div>
        <NavLink to='/home' className='button'>
            <span>Ingresar</span>
        </NavLink>
    </Container>
  )
}

export default Landing