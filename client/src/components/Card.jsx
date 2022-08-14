import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import paw from '../images/dog_paw_art.png'
import heart from '../images/favorite.png'
import { addFavorite } from '../actions';


const Dog = styled.div`
  background-color: #FFAA00;
  max-width: 25vw;
  margin: 1.5vh 0;
  box-shadow: 6px 6px 10px 3px #190225;
  button{
    bottom: 0px;
    height:30%;
    background: none;
    color: white;
    border: none;
    padding: 0 5px;
    margin: 5px;
    cursor: pointer;
    outline: inherit;
    background-color: #F64F00;
    border-radius: 5px;
  }
  .name{
    display:flex;
    flex-direction:row;
    align-items:center;
    max-width: 70%;
    max-height: 11vh;
    img{
      width:1.2vw;
      height:2.4vh
    }
  }
  .link{
    text-decoration: none;
    color: inherit;
  }
  img{
    height: 40vh;
    width: 25vw;
  }
  .info{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .weight{
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
padding-bottom: 1vh;
`

function Card({image, id, name, temperaments, weight_min, weight_max, favorite}) {
  const dispatch = useDispatch()

  const handleFavorite = () => {
    dispatch(addFavorite(id))
}

  return (
    <Dog>
      <NavLink to={`/home/${id}`} className='link'>
        <img src={image ? image : paw} alt={`${name}'s breed example`}/>
        </NavLink>
        <div className='info'>
          <div className='name'>
            <h1>{name}</h1>
            {favorite ? <img src={heart}/> : <button onClick={() => handleFavorite()}>Add to fav</button>}
          </div>
          <div className='weight'>
            <h4>METRICS</h4>
            <div><span>Min Weight:</span> {weight_min}</div>
            <div><span>Max Weight:</span> {weight_max}</div>
          </div>
        </div>
        <Temperaments>{
          typeof temperaments === 'object' ? `${temperaments.join(', ')}` : `${temperaments}`
        }</Temperaments>
      
    </Dog>
  )
}

export default Card