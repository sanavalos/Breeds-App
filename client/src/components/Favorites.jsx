import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Card from './Card';
import ScrollUp from './ScrollUp';
import NoDog from './NoDog';
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
        margin: 15vh 12.5vw;
    }
    .buttons{
        display:flex;
        width:fit-content;
        flex-direction: column;
        background-color: #FFAA00;
        height:40vh;
        position:fixed;
        margin-left: 0.25vw;
        top: 35vh;
        left: 2vw;
        border-radius: 10px;
        justify-content: space-evenly;
    }
    .section{
        display:flex;
        flex-direction: column;
    }
    select{
        margin: 10px;
        outline-width: 0;
        text-align:center;
    }
    h3{
        margin-bottom: 0;
    }
    .content{
        display:flex;
        flex-direction: row;
        justify-content:center;
        min-height:92vh;
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
    .reset:hover{
        text-transform:uppercase;
        font-weight: 600;
    }
    .setting{
        font-size: 3vh;
        width: fit-content;
        background-color: #00000099;
        padding: 0 10px;
        color:#FFAA00;
    }
    .box{
        display:flex;
        justify-content: center;
        width:100%
    }
`

function Favorites() {
    const favoriteDogs = useSelector ((state) => state.favorites)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Page>
        <Header showSearch={false}/>
            <div className='content'>
                <div>
                    <div className='cards'>
                    {
                        favoriteDogs.length > 0 ? favoriteDogs.map(dog =>{
                            return <Card key={dog.id} id={dog.id} image={dog.image} name={dog.name} temperaments={dog.temperaments} weight_min={dog.weight_min} weight_max={dog.weight_max} favorite={true}/>
                        }) : <NoDog/>
                    }
                    </div>
                </div>
            </div>
            <ScrollUp/>
        </Page>
    )
}

export default Favorites