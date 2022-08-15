import React from 'react';
import styled from 'styled-components';

const PagNumbers = styled.div`
    ul{
        display:flex;
        justify-content:center;
        flex-direction:row;
    }
    li{
        list-style: none;
        height: fit-content;
        padding: 0px 5px;
        margin: 0px 0.3vh;
        font-size: 3vh;
        background-color: #F64F00;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        font-family: 'Fredoka One', cursive;
        button{
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
        }
    }
    li:hover{
        border: 2px solid black;
        font-size: 3.2vh;
    }
`


function Pagination({ dogsPerPage, allDogs, pagination }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <PagNumbers>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(pageNumber => (
                        <li key={pageNumber}>
                            <button onClick={() => pagination(pageNumber)}>{pageNumber}</button>
                        </li>
                    ))
                }
            </ul>
        </PagNumbers>
    )
}

export default Pagination