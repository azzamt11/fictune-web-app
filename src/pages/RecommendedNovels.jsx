import React from 'react';
import styled from 'styled-components';
import NovelImage from '../components/NovelImage';
import axios from 'axios';
import SomethingIsWrong from './SomethingIsWrong';

const RecommendedNovels= ({token})=> {
    const novelNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const novelList= (number, genre)=> {
        return <NovelImage SId= {number} genre= {genre} token= {token} id= {"number" + {number}+ "-genre" + {genre}}/>
    };
    var RNLVParam= 395;
    const RNLVRightArrowButtonFunction= ()=> {
        if (RNLVParam<= 395- 622*6) {
            RNLVParam= 395;
        } else {
            RNLVParam= RNLVParam- 622;
        }
        document.getElementById('rnlv').style.cssText= `left: ${RNLVParam}px`;
    }

    return (
        <MainBodySubContainer>
            <TitleText>Rekomendasi hari ini</TitleText>
            <RecomendedNovelListView id= 'rnlv'>
                <NovelImageView>Novel 1</NovelImageView>
                <NovelImageView>Novel 2</NovelImageView>
                <NovelImageView>Novel 3</NovelImageView>
                <NovelImageView>Novel 4</NovelImageView>
                <NovelImageView>Novel 5</NovelImageView>
                <NovelImageView>Novel 6</NovelImageView>
                <NovelImageView>Novel 7</NovelImageView>
            </RecomendedNovelListView>
            <LeftBlock></LeftBlock>
            <RightBlock></RightBlock>
            <RNLVRightArrowButton id= 'rnlv-button' onClick= {RNLVRightArrowButtonFunction}></RNLVRightArrowButton>
            <NovelStack>
                <SmallText>Romantis</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 1))}
                </NovelListView>
                <SmallText>Keluarga</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 2))}
                </NovelListView>
                <SmallText>Misteri</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 3))}
                </NovelListView>
                <SmallText>Religius</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 4))}
                </NovelListView>
                <SmallText>Fiksi Ilmiah</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 5))}
                </NovelListView>
                <SmallText>Traveling</SmallText>
                <NovelListView>
                    {novelNumbers.map((number)=>novelList(number, 6))}
                </NovelListView>
            </NovelStack>
        </MainBodySubContainer>
    );
  
    
}

const MainBodySubContainer= styled.div`
    margin-right: 25px;
    height: 2500px;
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
    top: 90px;
    left: 395px;
    font-size: 20px;
    color: #400080;
    font-weight: bold;
    display: flex;
    height: 30px;
    margin-bottom: 35px;
    width: 400px;
    overflow-y: hidden;
`;
const RecomendedNovelListView= styled.div`
    position: absolute;
    top: 145px;
    left: 395px;
    height: 245px;
    width: 10000px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    z-index: 2;
    overflow-x: hidden;
    transition: all 0.5s ease 0s;
`;
const LeftBlock= styled.div`
    position: absolute;
    top: 143px;
    left: 350px;
    height: 2000px;
    width: 50px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
`;
const RightBlock= styled.div`
    position: absolute;
    top: 143px;
    height: 2000px;
    right: 0px;
    width: 200px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1));
`;
const NovelStack= styled.div`
    position: absolute;
    left: 395px;
    top: 427px;
    height: 1700px;
    width: 10000px;
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
    font-size: 20px;
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
const RNLVRightArrowButton= styled.button`
    position: absolute;
    z-index: 4;
    top: 232px;
    right: 50px;
    height: 70px;
    width: 70px;
    background-color: white;
    border-radius: 35px;
    border-width: 1px;
    border-color: #400080;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
`;

export default RecommendedNovels