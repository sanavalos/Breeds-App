import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const HeaderDiv = styled.div`
    background-color: #FFAA00;
    width:100%;
    height: 8vh;
    display: flex;
    align-items: center;
    font-family: 'Fredoka One', cursive;
        ul{
            width:100%;
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
    `
    
    const StyledLink = styled(NavLink)`
        text-decoration:none;
    `

function Header({showSearch}) {
    
    return (
        <HeaderDiv>
            {showSearch && <SearchBar/>}
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