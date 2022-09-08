import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

function Home({value}) {
    const {state}= useLocation();
    const onSearch= ()=> {
        //something to do on searching.
    }

    console.log(value);
    console.log(state);

    const [scrollState, setScrollState]= useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', function() {
            document.getElementById('header').style.cssText= window.scrollY>39? "height: 55px": "height: 90px";
        }, false) 
    }, []);

    return (
        <Container>
            <Header id= 'header'>
                <SubHeader>
                    <SubHeaderComponent>
                        <Logo>Fictune</Logo>
                        <Search handleSubmit= {onSearch}>
                            <SearchField/>
                            <SearchButton>Go</SearchButton>
                        </Search>
                    </SubHeaderComponent>
                    <SubHeaderComponent>
                        <div>This is the right component</div>
                    </SubHeaderComponent>
                </SubHeader>
            </Header>
            <LeftBodyContainer>
                <div>This is left body container</div>
            </LeftBodyContainer>
        </Container>
    )
}

const Container= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
var Header= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    height: 90px;
    width: 100vw;
    padding: 0;
    background-color:#400080;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px #888888;
    z-index: 10;
    transition: all 0.5s ease 0s;  
`;
const SubHeader= styled.div`
    position: relative;
    margin: 0;
    height: 100%;
    width: min(1200px, 100vw);
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const SubHeaderComponent= styled.div`
    position: relative;
    margin: 0;
    height: 100%;
    width: 700px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Logo= styled.span`
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 27px;
    color: white;
`;
const Search= styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SearchField= styled.input.attrs({
    placeholder: "Cari",
    placeholderTextColor: "grey",
    type: "text"
})`
    color: black;
    font-size: 16px;
    beckground-color: white;
    border: none;
    height: 38px;
    width: 210px;
    padding-left: 19px;
    border-top-left-radius: 19px;
    border-bottom-left-radius: 19px;
    &:focus {
        border: none;
        outline: none;
    }
`;
const SearchButton= styled.button`
    height: 40px;
    width: 100px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
`;
const LeftBodyContainer= styled.div`
    height: 300vh;
    width: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
    box-shadow: 2px 0px 5px #888888;
`;

export default Home