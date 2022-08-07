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
            padding: 0px 5px;
            margin: 0px 0.2vh;
            font-size: 3vh;
            background-color: #F64F00;
            border-radius: 6px;
            color: white;
            cursor: pointer;
        }
    `


function Pagination({dogsPerPage, allDogs, pagination}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)        
    }

    
    return (
        <PagNumbers>
            <ul>
                {pageNumbers &&
                pageNumbers.map( pageNumber => (
                        <li key={pageNumber}>
                            <a onClick={() => pagination(pageNumber)}>{pageNumber}</a>
                        </li>
                ))
                }
            </ul>
        </PagNumbers>
    )
}

export default Pagination