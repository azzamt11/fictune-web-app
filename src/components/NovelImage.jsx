import React from 'react';
import styled from 'styled-components';

const NovelImage= ({SId, genre, token, ...restProps})=> {
    //novel click function
    const novelClickFunction= ()=> {
        //nothing to do yet.
    };

    //rendering
    return (
        <Image onClick= {novelClickFunction}>
            <span>Novel</span>
        </Image>
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
    border-radius: 10px;
    border-width: 1px;
    border-color: #400080;
`;