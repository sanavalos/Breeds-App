import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import cheems from '../images/cheems.png'

const ErrorPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFAA00;
  height:100vh;
  h1{
    font-size:6vh;
    margin: 0;
  }
  h1,h2{
    text-align:left;
  }
  .button{
    font-size: 3vh;
    border: 2px solid black;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    background-color: #F64F00;
    height: fit-content;
  }
  img{
    height:80vh;
  }
`

function NotFound() {
  return (
    <ErrorPage>
      <div>
        <h1>404 WOOF!</h1>
        <h2>You got lost! Nothing to be ashamed of...</h2>
        <NavLink to='/home' className='button'>
          <span>Back to the pack</span>
        </NavLink>
      </div>
      <img src={cheems} alt="Cheems error" />
    </ErrorPage>
  )
}

export default NotFound