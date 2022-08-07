import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';                
import { NavLink } from 'react-router-dom';
import { getTemperaments, postDog } from '../actions';
import Header from './Header';



function CreateDog() {

    const dispatch = useDispatch()

    const temperamentsApi = useSelector((state) =>state.temperaments)

    useEffect(() => {
        dispatch(getTemperaments())
    },[dispatch])

    const [input, setInput] = useState({
        name:'',
        height_min:'',
        height_max:'',
        weight_min:'',
        weight_max:'',
        span:'',
        image: '',
        temperaments:[]
    })

    const handleChange = (e) => {
        e.preventDefault()
            setInput({
                ...input,
                [e.target.name] : e.target.value
            }
        )
    }

    const handleSelect = (e) => {
            setInput({
                ...input,
                temperaments: [...input.temperaments, e.target.value]
            })
    }

    const handleDelete = (t) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter( temperament => temperament !== t)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch( postDog(input))
        setInput({
            name:'',
            height_min:'',
            height_max:'',
            weight_min:'',
            weight_max:'',
            span:'',
            image: '',
            temperaments:[]
        })
    }

    return (
        <div>
            <Header/>
            <NavLink to='/home'><button>Volver</button></NavLink>
            <h1>CREATE YOUR OWN BUDDY</h1>
            <p>Tell us a little bit about him...</p>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <div>
                        <label>Name:</label>
                        <input type='text' value={input.name} name='name' onChange={e => handleChange(e)} />
                    </div>

                    <div>
                        <select onChange={(e)=> handleSelect(e)}>
                            { temperamentsApi.map( t => (
                                <option value={t.name}>{t.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Life span:</label>
                        <input type='number' value={input.span} name='span' onChange={e => handleChange(e)} />
                    </div>

                    <div>
                        <label>Minimum Weight:</label>
                        <input type='number' value={input.weight_min} name='weight_min' onChange={e => handleChange(e)} />

                        <label>Maximum Weight:</label>
                        <input type='number' value={input.weight_max} name='weight_max' onChange={e => handleChange(e)} />
                    </div>

                    <div>
                        <label>Minimum Height:</label>
                        <input type='number' value={input.height_min} name='height_min' onChange={e => handleChange(e)} />

                        <label>Maximum Height:</label>
                        <input type='number' value={input.height_max} name='height_max' onChange={e => handleChange(e)} />
                    </div>

                    <div>
                        <label>Image:</label>
                        <input type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
                    </div>

                </div>
                    <button type='submit'>Create dog</button>
            </form>
            <ul>
                <li>
                    {input.temperaments.map( t =>
                        <div>
                            <p>{t}</p>
                            <button onClick={() => handleDelete(t)}>DELETE</button>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default CreateDog