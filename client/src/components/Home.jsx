import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperaments, sortDogsByWeight, sortDogsByName, filterDogsByDb, filterDogsByTemperament } from '../actions';
import Header from './Header';
import Card from './Card';
import Pagination from './Pagination';
import styled from 'styled-components';
import background from '../images/background.jpg'

const Page = styled.div`
    background-image: url(${background});
    .cards{
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction:row;
        flex-wrap:wrap;
        margin: 0 12.5vw;
    }
    .buttons{
        display:flex;
        width:fit-content;
        flex-direction: column;
        background-color: #ffaa00;
        height:40vh;
        position:fixed;
        margin-left: 0.25vw;
        top: 35vh;
        left: 2vw;
        border-radius: 10px;
        justify-content: space-evenly ;
    }
    .section{
        display:flex;
        flex-direction: column;
    }
    select{
        margin: 10px;
    }
    h3{
        margin-bottom: 0;
    }
    .content{
        display:flex;
        flex-direction: row;
    }
    .reset{
        padding: 0px 5px;
        margin: 0px 0.2vh;
        background-color: #F64F00;
        border-radius: 6px;
        color: white;
        font-size:1.8vh;
        cursor: pointer;
    }
    .setting{
        font-size: 3vh;
        width:fit-content;
        backdrop-filter: blur(10px);
        margin-left: 43vw;
    }
`

function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)
    const temperamentsApi = useSelector((state) => state.temperaments)


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getDogs())
        setCurrentPage(1)
        setTimeout(() => {
            setOrder('All sorts and filters were cleared successfully!')
        }, 1500);
    }

    const handleSortWeight = (e) => {
        e.preventDefault();
        dispatch(sortDogsByWeight(e.target.value))
        setCurrentPage(1)
        setOrder(`Sorted by ${e.target.value} weight`)
    }

    const handleSortName = (e) => {
        e.preventDefault();
        dispatch(sortDogsByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Sorted by ${e.target.value} name`)
    }
    
    const handleFilterDb = (e) => {
        e.preventDefault();
        dispatch(filterDogsByDb(e.target.value))
        setCurrentPage(1)
        setOrder(`Filtered by ${e.target.value}`)
    }


    const handleFilterTemp = (e) => {
        e.preventDefault();
        dispatch(filterDogsByTemperament(e.target.value))
        setCurrentPage(1)
        setOrder(`Filtered by ${e.target.value}`)
    }

    return (
        <Page>
            <Header/>
            
            <div className='content'>
                <div className='buttons'>
                    <button onClick={ e => {handleClick(e)}} className='reset'>
                        Reset sorts/filters
                    </button>

                    <div className='section'>
                    <h3>SORT BY</h3>
                    <select onChange={e => handleSortWeight(e)}>
                        <option value='all'> --WEIGHT-- </option>
                        <option value='descendant'>Descendant Weight</option>
                        <option value='ascendant'>Ascendant Weight</option>
                    </select>

                    <select onChange={e => handleSortName(e)}>
                        <option value='all'> --NAME-- </option>
                        <option value='descendant'>Descendant Name</option>
                        <option value='ascendant'>Ascendant Name</option>
                    </select>
                </div>

                <div className='section'>
                    <h3>FILTER BY</h3>
                    <select onChange={(e)=> handleFilterTemp(e)}>
                        <option value='all'>--TEMPERAMENTS--</option>
                        { temperamentsApi.map( t => (
                            <option value={t.name}>{t.name}</option>
                        ))}
                    </select>

                    <select onChange={e => handleFilterDb(e)}>
                        <option value='all'>--ALL BREEDS--</option>
                        <option value='api'>API breed</option>
                        <option value='db'>DataBase breed</option>
                    </select>
                </div>
                </div>

                <div>
                    <Pagination dogsPerPage={dogsPerPage} allDogs={allDogs.length} pagination={pagination}/>
                    <h3 className='setting'>{order}</h3>
                    <div className='cards'>
                    {
                        currentDogs?.map(dog =>{
                            return <Card key={dog.id} id={dog.id} image={dog.image} name={dog.name} temperaments={dog.temperaments} weight_min={dog.weight_min} weight_max={dog.weight_max}/>
                        })
                    }
                    </div>
                    <Pagination dogsPerPage={dogsPerPage} allDogs={allDogs.length} pagination={pagination}/>
                </div>
            </div>
        </Page>
    )
}

export default Home