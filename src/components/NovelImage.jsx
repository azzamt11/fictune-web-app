import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

const NovelImage= ({genre, SId})=> {
    //novel click function
    const novelClickFunction= ()=> {
        //to do something.
    }

    //novel image
    const posts= useSelector((state)=> state.posts);
    const imageString= genre<= posts.posts.length?(posts.posts[genre-1][SId]? posts.posts[genre-1][SId].post_attribute_3 : "no-string"): "no-string";

    //useEffect
    useEffect(()=> {
    }, []);

    //rendering
    return (
        imageString!=="no-image"? <Image onClick= {novelClickFunction} src={"data:image/png;base64, "+ imageString}/> : <ImageDiv>No-Image</ImageDiv>
    );
}

export default NovelImage

//...................styling.............//
const Image= styled.img`
    height: 200px;
    width: 150px;
    margin-right: 25px;
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
    height: 200px;
    width: 150px;
    margin-right: 25px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: #400080;
`;