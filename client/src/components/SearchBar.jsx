import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../actions';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
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
`

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getDogsByName(name))
        setName('')
    }

  return (
    <Bar>
        <input type='text' placeholder='Search by name' onChange={ e => handleInputChange(e)}/>
        <button type='submit' onClick={ e => handleSubmit(e)}>SEARCH</button>
    </Bar>
  )
}

export default SearchBar