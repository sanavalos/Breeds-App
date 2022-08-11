import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDogsByName } from '../actions';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 42vw;
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
`

function SearchBar() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/home')
        dispatch(getDogsByName(name))
        setName('')
    }

  return (
    <Bar>
        <input type='text' placeholder='Search by name...' onChange={ e => handleInputChange(e)}/>
        <button type='submit' onClick={ e => handleSubmit(e)}>SEARCH</button>
    </Bar>
  )
}

export default SearchBar