import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
    const HeaderDiv = styled.div`
    background-color: #ffaa00;
    width:100%;
    height: 8vh;
    display: flex;
    align-items: center;

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
        font-size: 15px;
        color: white;
        font-weight: bold;
    `
    
    const StyledLink = styled(NavLink)`
        text-decoration:none;
    `
    return (
        <HeaderDiv>
            <SearchBar/>
            <ul>
                <li>
                    <StyledLink to="/" ><Buttons>LANDING</Buttons></StyledLink>
                </li>
                <li>
                    <StyledLink to="/home" ><Buttons>HOME</Buttons></StyledLink>
                </li>
                <li>
                    <StyledLink to="/create" ><Buttons>CREATE</Buttons></StyledLink>
                </li>
            </ul>
        </HeaderDiv>
    );
}

export default Header