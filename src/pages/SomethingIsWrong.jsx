import React from 'react';
import styled from 'styled-components';


function SomethingIsWrong() {
  return (
    <SubContainer>Sepertinya terdapat masalah pada aplikasi atau sambungan internet!</SubContainer>
  )
}

const SubContainer= styled.div`
    padding: 10%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8000d0;
    font-weight: bold;
    font-size: 30px;
`; 

export default SomethingIsWrong