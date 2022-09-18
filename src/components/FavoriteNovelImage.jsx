import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

const FavoriteNovelImage= ({SId})=> {
    //novel click function
    const novelClickFunction= ()=> {
        console.log("Math.floor((window.innerWidth- 395)/175)= "+ (Math.floor((window.innerWidth- 395)/175)).toString())
    }

    //novel image
    const favoritePosts= useSelector((state)=> state.posts);
    const imageString= favoritePosts.posts[SId]? favoritePosts.posts[SId].post_attribute_3 : "no-image";

    //useEffect
    useEffect(()=> {
    }, []);

    //rendering
    return (
        imageString!=="no-image"? <Image onClick= {novelClickFunction} src={"data:image/png;base64, "+ imageString}/> : <ImageDiv>No-Image</ImageDiv>
    );
}

export default FavoriteNovelImage

//...................styling.............//
const Image= styled.img`
    height: 100%;
    width: 120px;
    margin-right: 15px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: #400080;
`;
const ImageDiv= styled.div`
    height: 100%;
    width: 120px;
    margin-right: 15px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: #400080;
`;