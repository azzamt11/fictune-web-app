import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import FavoriteNovelImage from "../components/FavoriteNovelImage";

function MyFavoriteNovels() {
  //initial state
  const [numberOfNovelsOnRender, setNumberOfNovelsOnRender]= useState((Math.floor((window.innerWidth- 395)/175)));

  //liked post
  const likedPosts= useSelector((state)=> state.likedPosts);

  //mapping the posts
  const likedPostsNumber= (index)=> {
    if(likedPosts!==undefined) {
      const postNumber= index<=Math.floor(likedPosts.posts.length/numberOfNovelsOnRender)? numberOfNovelsOnRender : likedPosts.posts.length%numberOfNovelsOnRender;
      return postNumber;
    } else {
      return 0;
    }
  }

  //novel list generator
  const novelList= (number, index)=> {
    const postIndex= (index-1)*numberOfNovelsOnRender+ number;
    return <FavoriteNovelImage SId= {postIndex} id= {"liked-novel-number" + {postIndex}}/>
  };

  //useEffect
  useEffect(()=> {
    window.addEventListener('resize', function() {
        setNumberOfNovelsOnRender((Math.floor((window.innerWidth- 395)/175)));
    }, false);
  }, []);

  //novel stack generator
  const novelStackGenerator= ()=> {
    if(likedPosts) {
      if (likedPosts.posts.length!==0) {
        return (
          <NovelStack>
           <NovelListView>
             {Array.from(Array(likedPostsNumber(1)).keys()).map((number)=>novelList(number, 1))}
            </NovelListView> 
            <NovelListView>
              {Array.from(Array(likedPostsNumber(2)).keys()).map((number)=>novelList(number, 2))}
            </NovelListView> 
            <NovelListView>
              {Array.from(Array(likedPostsNumber(3)).keys()).map((number)=>novelList(number, 3))}
            </NovelListView> 
            <NovelListView>
              {Array.from(Array(likedPostsNumber(4)).keys()).map((number)=>novelList(number, 4))}
            </NovelListView> 
            <NovelListView>
              {Array.from(Array(likedPostsNumber(5)).keys()).map((number)=>novelList(number, 5))}
            </NovelListView> 
          </NovelStack>
        );
      } else {
        return (
          <LoadingNovelStack>Sepertinya kamu belum meyukai novel apapun.</LoadingNovelStack>
        );
      }
    } else {
      return (
        <LoadingNovelStack>Loading...</LoadingNovelStack>
      );
    }
  }

  //rendering
  return (
    <MainBodySubContainer>
      <TitleText>Novel Favoritmu</TitleText>
      {novelStackGenerator()}
    </MainBodySubContainer>
  )
}

const MainBodySubContainer= styled.div`
    margin-right: 25px;
    height: 100%;
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
    margin-bottom: 20px;
    width: 400px;
    overflow-y: hidden;
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
const LoadingNovelStack= styled.div`
    position: absolute;
    left: 395px;
    top: 427px;
    height: 1700px;
    width: 10000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fonst-size: 25px;
    background-color: white;
    color: #dddddd;
    overflow-x: hidden;
    overflow-y: hidden;
`;
const NovelListView= styled.div`
    height: 170px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
`;

export default MyFavoriteNovels