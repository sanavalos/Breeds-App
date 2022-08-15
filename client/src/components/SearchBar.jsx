import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDogsByName } from '../actions';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  input{
    border-radius: 15px 0px 0px 15px;
    padding: 8px;
    font-size: 15px;
    font-weight: bold;
  }
  button{
    cursor: pointer;
    border-radius: 0px 15px 15px 0px;
  }
  input, button{
    border: none;
    outline-width: 0;
  }
  span{
    margin-left: 0.5vw;
    color: red;
    align-self:center;
  }
`

function SearchBar() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/home')
    if(name.length < 3){
      setErrors('Search is way too short')
      setTimeout(() => {
        setErrors('')
      }, 3500)
      return
    } else {
      dispatch(getDogsByName(name))
    }
  }

  return (
    <Bar>
      <input type='text' placeholder='Search by breed...' onChange={e => handleInputChange(e)} />
      <button type='submit' onClick={e => handleSubmit(e)}>SEARCH</button>
      {errors && <span>{errors}</span>}
    </Bar>
  )
}

export default SearchBar