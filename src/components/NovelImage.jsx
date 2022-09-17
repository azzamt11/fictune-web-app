import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

const NovelImage= ({genre, SId})=> {
    //posts
    const posts= useSelector((state)=> state.posts);
    console.log("main genre= " + genre+ ", secondary id= "+ SId);

    //novel click function
    const novelClickFunction= ()=> {
        console.log(posts);
    }

    //content
    const [content, setContent]= useState(null);
    const idLoaded= useSelector((state)=> state.idloaded);
    const genreLoaded= useSelector((state)=> state.genreloaded);
    const post= useSelector((state)=> state.post);

    //useEffect
    useEffect(()=> {
    }, [idLoaded]);

    //rendering
    return (
        <Image onClick= {novelClickFunction}>{idLoaded===SId && genreLoaded===genre? post.toString().slice(100, 120) : "no-data"}</Image>
    );
}

export default NovelImage

//...................styling.............//
const Image= styled.div`
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