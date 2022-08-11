import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions';
import { useParams } from 'react-router-dom';
import Header from './Header';
import paw from '../images/dog_paw_art.png'
import styled from 'styled-components';

const DetailCard = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  background-color:blue;
  height: 92vh;
  img{
    height:50vh;
  }
  h1{
    font-size: 5vh;
  }
  p, h3{
    margin: 0;
  }
  p{
    font-size: 3.2vh;
  }
  h3{
    font-size: 4vh;
  }
  .measures{
    display:flex;
    flex-direction: row;
    justify-content:center;
  }
  .amount{
    margin: 1.2vh 0;
    padding: 0 2vw;
  }
  .tempsList{
    list-style-type: none;
    border-radius: 15px;
    width: fit-content;
    font-size:2vh;
    padding: 0;
    p{
      background-color: #ffaa00;
      border-radius: 10px;
      border: 1px solid black;
      display:flex;
      flex-direction:row;
      align-items:center;
      margin: 1vh 0;
      padding: 0.5vh;
      width:fit-content;
    }
  }
`

function Details() {
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
        myDog.length > 0 ?<DetailCard>
          <div>
            <h1>Breed/Name: {myDog[0].name}</h1>

            <div className='measures'>
              <div className='amount'>
                <h3>Height</h3>
                <p>Minimum: {myDog[0].height_min}</p>
                <p>Maximum: {myDog[0].height_max}</p>
              </div>

              <div className='amount'>
                <h3>Weight</h3>
                <p>Minimum: {myDog[0].weight_min}</p>
                <p>Maximum: {myDog[0].weight_max}</p>
              </div>
            </div>
          </div>

          <div>
            <img src={myDog[0].image ? myDog[0].image : paw} alt={`${myDog[0].name}'s breed example`}></img>
            <p>Life span: {myDog[0].span}</p>
          </div>

          <ul>
            <li className='tempsList'>
              {
                !myDog[0].createdInDb ? myDog[0].temperaments.split(', ').map(t => <p>{t}</p>) : myDog[0].temperaments.map( t => <p>{t}</p>)
              }
            </li>
          </ul>

        </DetailCard>
        :
        setTimeout(() => {
          <h1>Dog not found!</h1>
        }, 1500)
      } 
    </div>
  )
}

export default Details