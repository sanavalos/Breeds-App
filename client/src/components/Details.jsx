import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions';
import { useParams } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import paw from '../images/dog_paw_art.png'
import styled from 'styled-components';
import background from "../images/background.jpg";

const DetailCard = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url(${background});
  height: 92vh;
  .borderDetails{
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    background-color:#ffaa00;
    border-radius: 2vh;
    padding: 2vh 2vh 1vh 0;
  }
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
    margin: 1.2vh 2vw;
    padding: 0 ;
    border: 1px solid black;
    border-radius: 4px;
    p{
      font-size: 2.5vh;
    }
  }
  .tempsList{
    list-style-type: none;
    border-radius: 15px;
    width: fit-content;
    padding: 0;
    p{
      border-radius: 10px;
      font-size:2.5vh;
      border: 1px solid black;
      display:flex;
      flex-direction:row;
      align-items:center;
      margin: 1vh 0;
      padding: 0.5vh;
      width:fit-content;
      text-transform: uppercase;
    }
  }
`

function Details() {
  const dispatch = useDispatch()
  const { id } = useParams(state => state.detail);

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

  const myDog = useSelector((state) => state.details)

  return (
    <div>
      {
        myDog.id ?
          <div>
            <Header />
            <DetailCard>
              <div className='borderDetails'>
                <div>
                  <h1>{myDog.name}</h1>

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
                    !myDog.createdInDb ? myDog.temperaments.split(', ').map(t => <li className='tempsList' key={t}><p>{t}</p></li>) : myDog.temperaments.map(t => <li className='tempsList' key={t}><p>{t}</p></li>)
                  }
                </ul>
              </div>
            </DetailCard>
          </div>
          :
          <NotFound />
      }
    </div>
  )
}

export default Details