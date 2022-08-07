import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import paw from '../images/dog_paw_art.png'

const Dog = styled.div`
background-color: red;
width: 25vw;
margin: 1.5vh 0;
box-shadow: 6px 6px 10px 3px #190225;
  .link{
    text-decoration: none;
    color: inherit;
  }
  h1{
    display:flex;
    flex-wrap: wrap;
  }
  img{
    height: 40vh;
    width: 20vw;
  }
  .info{
    background-color:yellow;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .weight{
    background-color:blue;
  width:fit-content;
  display:flex;
  flex-direction:column;
      justify-content: center;
    div{
      border: black 1px solid;
      padding: 0px 5px;
      margin: 0.3vh 0.2vw;
      border-radius: 5px;
    }
    span{
      font-weight: 500;
    }
    h4{
      margin: 0;
    }
}
`

const Temperaments = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
`

function Card({image, id, name, temperaments, weight_min, weight_max}) {

  return (
    <Dog>
    <NavLink to={`/home/${id}`} className='link'>
      
        <div className='info'>
          <h1>{name}</h1>
          <div className='weight'>
            <h4>METRICS</h4>
            <div><span>Max Weight:</span> {weight_max}</div>
            <div><span>Min Weight:</span> {weight_min}</div>
          </div>
        </div>
        <Temperaments>{
          typeof temperaments === 'object' ? `Temperaments: ${temperaments.join(', ')}` : `Temperaments: ${temperaments}`
        }</Temperaments>
        <img src={image ? image : paw} alt={`${name}'s breed example`}/>
        </NavLink>
      </Dog>
    
  )
}

export default Card