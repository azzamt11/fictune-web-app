import React from 'react'
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

function Home({value}) {
    const {state}= useLocation();
    console.log(value);

    return (
        <Container>
            <Span>Token= {state? state.token : value.token}</Span>
            <Span>name= {state? state.name : value.name}</Span>
        </Container>
    )
}

const Container= styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #232896;
`;
const Span= styled.span`
    height: 100px;
    width: 80vw;
    padding: 20px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-width: 1;
    border-color: black;
    background-color: white;
`;
const Box= styled.div`
    height: 700px;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    border-width: 1;
    border-color: black;
    background-color: white;
    text-align: justify;
    inline-size: 80vw;
    overflow-wrap: break-word;
`;

export default Home