import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../actions';
import { SearchStyle } from './Styles';

function SearchBar() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
    <SearchStyle>
      <input type='text' placeholder='Search by breed...' onChange={e => handleInputChange(e)} />
      <button type='submit' onClick={e => handleSubmit(e)}>SEARCH</button>
      {errors && <span>{errors}</span>}
    </SearchStyle>
  )
}

export default SearchBar