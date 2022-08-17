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
    text-decoration: none;
  }
  .buttonEffect{
    list-style-type: none;
    margin: 0;
    padding: 0;
    p:hover {
      color: black;
    }
    p:hover span {
      transform: translateY(0) scale(2);
    }
    p {
      --c: #F64F00;
      color: var(--c);
      font-size: 3vh;
      border: 0.3em solid var(--c);
      border-radius: 0.5em;
      width: 12em;
      height: 3em;
      text-transform: uppercase;
      font-weight: bold;
      font-family: sans-serif;
      letter-spacing: 0.1em;
      text-align: center;
      line-height: 3em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.5s;
      margin: 1em;
    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: var(--c);
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      z-index: -1;
      }
    span:nth-child(1) {
    --n: 1;
    }
    span:nth-child(2) {
        --n: 2;
    }
    span:nth-child(3) {
        --n: 3;
    }
    span:nth-child(4) {
        --n: 4;
    }
  }
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
        <div className='buttonEffect'>
              <p>
                JOIN THE PACK
                <span></span><span></span><span></span><span></span>
              </p>
        </div>
      </NavLink>
      <img src={landing} alt='dog landing' />
    </Container>
  )
}

export default Landing