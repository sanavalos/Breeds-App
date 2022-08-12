import React from 'react';
import styled from 'styled-components';

const EmptyCard = styled.div`
    background-color: #ffaa00;
    max-width: 25vw;
    margin-top: 20vh;
    padding: 1.5vh;
    box-shadow: 6px 6px 10px 3px #190225;

`

function NoDog() {
  return (
    <EmptyCard>
        <h1>No dog has been found</h1>
        <h3>Try your luck again!</h3>
    </EmptyCard>
  )
}

export default NoDog