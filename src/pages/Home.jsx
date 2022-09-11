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
        }, false);
        window.addEventListener('resize', function() {
            
        }, false); 
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
            <SideBodyContainer>
                <div>This is left body container</div>
            </SideBodyContainer>
            <MainBodyContainer>
                <MainBodySubContainer>
                    <TitleText>Rekomendasi hari ini</TitleText>
                    <RecomendedNovelListView>
                        <NovelImageView>Novel 1</NovelImageView>
                        <NovelImageView>Novel 2</NovelImageView>
                        <NovelImageView>Novel 3</NovelImageView>
                    </RecomendedNovelListView>
                    <LeftBlock></LeftBlock>
                    <RightBlock></RightBlock>
                    <NovelStack>
                        <SmallText>Romantis</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                        </NovelListView>
                        <SmallText>Keluarga</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                        </NovelListView>
                        <SmallText>Misteri</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                        </NovelListView>
                        <SmallText>Religius</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                        </NovelListView>
                    </NovelStack>
                </MainBodySubContainer>
            </MainBodyContainer>
        </Container>
    )
}

const Container= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 3000px;
    overflow-x: hidden;
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
const SideBodyContainer= styled.div`
    position: fixed;
    height: 100vh;
    width: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
    box-shadow: 2px 0px 5px #888888;
`;
const MainBodyContainer= styled.div`
    height: 3000px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;
const MainBodySubContainer= styled.div`
    margin-right: 25px;
    height: 3000px;
    width: 780px;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-top: 110px;
    padding: 0px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
const TitleText= styled.span`
    position: absolute;
    top: 120px;
    left: 545px;
    font-size: 25px;
    color: #400080;
    font-weight: bold;
    display: flex;
    height: 30px;
    margin-bottom: 35px;
    width: 400px;
`;
const RecomendedNovelListView= styled.div`
    position: absolute;
    top: 175px;
    left: 545px;
    height: 245px;
    width: 1860px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    z-index: 2;
    overflow-x: hidden;
`;
const LeftBlock= styled.div`
    position: absolute;
    top: 173px;
    left: 500px;
    height: 249px;
    width: 200px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
`;
const RightBlock= styled.div`
    position: absolute;
    top: 173px;
    height: 249px;
    right: 0px;
    width: 200px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1));
`;
const NovelStack= styled.div`
    position: absolute;
    left: 545px;
    top: 467px;
    height: 1200px;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: hidden;
`;
const NovelImageView= styled.div`
    height: 240px;
    width: 600px;
    background-color: white;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 20px;
    border-width: 1px;
    border-color: #400080;
`;
const SmallText= styled.span`
    font-size: 23px;
    color: #400080;
    font-weight: bold;
    display: flex;
    height: 30px;
    margin-bottom: 20px;
    width: 100%;
`;
const NovelListView= styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
`;
const NovelImage= styled.div`
    height: 200px;
    width: 150px;
    margin-right: 25px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    border-color: #400080;
`;


export default Home