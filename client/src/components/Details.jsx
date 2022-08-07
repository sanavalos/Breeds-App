import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Details(props) {
  const dispatch = useDispatch()
  const { id } = useParams(state => state.detail);

  useEffect(() => {
    dispatch(getDetails(id))
  },[dispatch, id])

  const myDog = useSelector((state) => state.details)

  return (
    <div>
      <Header/>
      {
        myDog.length > 0 ?<div>
          <h1>Name: {myDog[0].name}</h1>

          <div>
            <p>Minimum Height: {myDog[0].height_min}</p>
            <p>Maximum Height: {myDog[0].height_max}</p>
          </div>

          <div>
            <p>Minimum Weight: {myDog[0].weight_min}</p>
            <p>Maximum Weight: {myDog[0].weight_max}</p>
          </div>

          <p>Life span: {myDog[0].span}</p>

          <p>Temperaments: {!myDog[0].createdInDb ? myDog[0].temperaments : myDog[0].temperaments.map( t => t.name + ', ')}</p>
        
          <img src={myDog[0].image} alt={`${myDog[0].name}'s breed example`}></img>
        </div>
        :
        setTimeout(() => {
          <h1>Dog not found!</h1>
        }, 1000)
      } 
    </div>
  )
}

export default Details