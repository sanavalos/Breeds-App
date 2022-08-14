import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions';
import { useParams } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
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
    max-height: 50vh;
    max-width: 35vw;
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
      background-color: #FFAA00;
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
      {
        myDog.id ?
        <div>
          <Header/>
          <DetailCard>
            <div>
              <h1>Breed: {myDog.name}</h1>

              <div className='measures'>
                <div className='amount'>
                  <h3>Height</h3>
                  <p>Minimum: {myDog.height_min}</p>
                  <p>Maximum: {myDog.height_max}</p>
                </div>

                <div className='amount'>
                  <h3>Weight</h3>
                  <p>Minimum: {myDog.weight_min}</p>
                  <p>Maximum: {myDog.weight_max}</p>
                </div>
              </div>
            </div>

            <div>
              <img src={myDog.image ? myDog.image : paw} alt={`${myDog.name}'s breed example`}></img>
              <p>Life Span: {myDog.span}</p>
            </div>

            <ul>
              
                {
                  !myDog.createdInDb ? myDog.temperaments.split(', ').map(t => <li className='tempsList' key={t}><p>{t}</p></li>) : myDog.temperaments.map( t => <li className='tempsList' key={t}><p>{t}</p></li>)
                }
              
            </ul>
          </DetailCard>
        </div>
        :
          <NotFound/>
      } 
    </div>
  )
}

export default Details