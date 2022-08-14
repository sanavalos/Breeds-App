import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';                
import { getTemperaments, postDog } from '../actions';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const CreateDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    p{
        font-size: 2vh;
    }
    .error{
        margin: 0;
        padding: 1vh 1.5vw;
        width:100%;
        text-decoration: underline;
        color: #de0000;
        font-weight: 900;
        font-size: 3vh;
        border: 1px solid #ff0000;
    }
    .success{
        margin: 0;
        padding: 1vh 1.5vw;
        width:100%;
        text-decoration: underline;
        color: #1e961e;
        font-weight: 900;
        font-size: 3vh;
        border: 1px solid #1e961e;
    }
`


const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    ul{
        list-style-type: none;
        border-radius: 15px;
        width: fit-content;
        font-size:2.5vh;
        padding: 0;
        margin-left: 2vw;
        li{
            div{
                background-color: #FFAA00;
                border-radius: 10px;
                border: 1px solid black;
                display:flex;
                flex-direction:row;
                align-items:center;
                margin: 1vh 0;
                padding: 0.5vh;
                width:fit-content;
                p{
                    margin: 0.2vh;
                }
                button{
                    background-color: #ED6A5E;
                    border: 0;
                    border-radius: 4px;
                    color: white;
                    cursor: pointer;
                }
                button:hover{
                    background-color: #FC440F;
                }
            }
        }
    }
`

const DogForm = styled.form`
    background-color: #FFAA00;
    border-radius: 50px 50px 0 0;
    width: fit-content;
    font-size: 3.5vh;
    .minMax{
        display:flex;
        justify-content:space-around;
    }
    label{
        text-align:left;
    }
    h3{
        font-size:3.25vh;
        margin: 3vh 0 0 0;
    }
    .numbers{
        width:4vw;
    }
    input{
        font-size:2.5vh;
        border: none;
        outline-width: 0;
        border-radius: 7px;
    }
    select{
        font-size:2.5vh;
    }
    button{
        width:100%;
        background-color: #1e961e;
        border-radius: 6px;
        color: white;
        font-size:3vh;
        cursor: pointer;
    }
    .buttonError{
        background-color:#FC440F
    }
    .formBorder{
        margin: 0 2vw;
    }
    .box{
        margin: 2vh 0px 0px 0px;
        text-align:left;
    }
`


function CreateDog() {

    const dispatch = useDispatch()
    const history = useHistory()
    const temperamentsApi = useSelector((state) =>state.temperaments)

    useEffect(() => {
        dispatch(getTemperaments())
    },[dispatch])

    const [input, setInput] = useState({
        name:'',
        span:'',
        weight_min:'',
        weight_max:'',
        height_min:'',
        height_max:'',
        image: '',
        temperaments:[]
    })
    
    const [error, setError] = useState('')

    useEffect(()=>{
        if(input.name === ''){
            setError('You must name the breed')
        }
        else if(input.temperaments.length === 0){
            setError('You must pick at least 1 temperamnt')
        }
        else if(input.span === '' || !input.span.includes('-')){
            setError('Need a realistic number')
        }
        else if(input.weight_min === '' || input.weight_max === '' || input.weight_min >= input.weight_max){
            setError('Something is wrong with the weight')
        }
        else if(input.height_min === '' || input.height_max === '' || input.height_min >= input.height_max){
            setError('Something is wrong with the height')          
        }
        else {
            setError('')
        }
    }, [input])

    const handleChange = (e) => {
        e.preventDefault()
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
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
        if(error !== ''){
            alert('Check the form for errors.')
            return true
        }
        dispatch(postDog(input))
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
        history.push('/home')
    }

    return (
        <div>
        <Header showSearch={false}/>
        <Content>
        <CreateDiv>
                <h1>CREATE YOUR OWN BUDDY</h1>
                {error ? <h3 className='error'>Oops! {error}</h3> : <h3 className='success'>You're good to go!</h3> }
                <p>Tell us a little bit more about him...</p>
                <DogForm onSubmit={e => handleSubmit(e)}>
                    <div className='formBorder'>
                        <div className='box'>
                            <div>
                                <label htmlFor='name'>Breed: </label>
                                <input type='text' value={input.name} id='name' name='name' onChange={e => handleChange(e)} />
                            </div>

                            <div>
                                <label htmlFor='temperaments'>Temperaments: </label>
                                <select onChange={(e)=> handleSelect(e)} id='temperaments'>
                                    { temperamentsApi.map( t => (
                                        <option value={t.name}>{t.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor='span'>Life Span: </label>
                                <input type='text' value={input.span} id='span' name='span' onChange={e => handleChange(e)} className='numbers'/>
                            </div>
                        </div>
                        
                        <div>
                            <h3>Weight</h3>
                            <div className='minMax'>
                                <div>
                                    <label>Min: </label>
                                    <input type='number' value={input.weight_min} name='weight_min' onChange={e => handleChange(e)} className='numbers'/>
                                </div>

                                <div>
                                    <label>Max: </label>
                                    <input type='number' value={input.weight_max} name='weight_max' onChange={e => handleChange(e)} className='numbers'/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>Height</h3>
                            <div className='minMax'>
                                <div>
                                    <label>Min: </label>
                                    <input type='number' value={input.height_min} name='height_min' onChange={e => handleChange(e)} className='numbers'/>
                                </div>
                                
                                <div>
                                    <label>Max: </label>
                                    <input type='number' value={input.height_max} name='height_max' onChange={e => handleChange(e)} className='numbers'/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor='image'>Image: </label>
                            <input type='text' value={input.image} id='image' name='image' onChange={e => handleChange(e)} />
                        </div>

                    </div>
                        {!error ? <button type='submit'>Create breed</button> : <button className='buttonError'>Complete the form!</button> }
                </DogForm>
            
        </CreateDiv>
            <ul>
                <li>
                    {input.temperaments.map( t =>
                        <div>
                            <p>{t}</p>
                            <button onClick={() => handleDelete(t)}>X</button>
                        </div>
                    )}
                </li>
            </ul>
        </Content>
        </div>
    )
}

export default CreateDog