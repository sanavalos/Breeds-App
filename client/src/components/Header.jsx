import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import face from '../images/dog_face.png'

const HeaderDiv = styled.div`
    background-color: #FFAA00;
    width:100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Fredoka One', cursive;
        ul{
            display: flex;
            list-style: none;
            flex-direction: row;
            justify-content: right;
        }
    `

const Buttons = styled.span`
        background-color: #F64F00;
        border-radius: 10px;
        padding: 8px;
        margin: 0 1vw;
        font-size: 17px;
        color: white;
        font-weight: bold;
        img{
            max-height: 3vh;
        }
    `

const StyledLink = styled(NavLink)`
        text-decoration:none;
    `

function Header({ showSearch }) {

    return (
        <HeaderDiv>
            {showSearch ? <SearchBar/> : <StyledLink to="/" ><Buttons> LANDING<img src={face} alt='favorite heart'/> </Buttons></StyledLink>}
            <ul>
                <li>
                    <StyledLink to="/home" ><Buttons>HOME</Buttons></StyledLink>
                </li>
                <li>
                    <StyledLink to="/create" ><Buttons>CREATE</Buttons></StyledLink>
                </li>
                <li>
                    <StyledLink to="/favorites" ><Buttons>FAVORITES</Buttons></StyledLink>
                </li>
            </ul>
        </HeaderDiv>
    );
}

export default Header