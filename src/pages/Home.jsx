import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';

function Home({value}) {
    var RNLVParam= 445;
    const navigate= useNavigate();
    const {state}= useLocation();
    const coin= '2000';

    const onSearch= ()=> {
        //something to do on searching.
    }

    const logoutButtonFunction= ()=> {
        Cookies.remove('name');
        Cookies.remove('token');
        navigate("/login");
    }

    const alertButtonFunction= ()=> {
        document.getElementById('glass').style.cssText= 'display: none';
    }
    
    const RNLVRightArrowButtonFunction= ()=> {
        if (RNLVParam<= 445- 622*6) {
            RNLVParam= 445;
        } else {
            RNLVParam= RNLVParam- 622;
        }
        document.getElementById('rnlv').style.cssText= `left: ${RNLVParam}px`;
    }

    useEffect(() => {
        const token= Cookies.get('token');
        if (token==null) {
            navigate("/login");
        }
        window.addEventListener('scroll', function() {
            document.getElementById('header').style.cssText= window.scrollY>39? "height: 55px": "height: 90px";
        }, false);
        window.addEventListener('resize', function() {
            
        }, false); 
    }, []);

    return (
        <Container>
            <Glass id= 'glass'>
                <DevelopmentAlert id= 'alert'>
                    <AlertMainBody>
                        <AlertSymbol src= 'https://thumbs.dreamstime.com/b/warning-sign-yellow-exclamation-mark-icon-danger-sign-attention-sign-caution-alert-symbol-orange-isolated-white-background-144828378.jpg'/>
                        <AlertSpan>Mohon maaf, Aplikasi ini sedang dalam proses pengembangan.</AlertSpan>
                    </AlertMainBody>
                    <AlertButton onClick= {alertButtonFunction}>Biarkan Saya Mengamati</AlertButton>
                </DevelopmentAlert>
            </Glass>
            <Header id= 'header'>
                <SubHeader>
                    <SubHeaderComponent id= 'main-subheader'>
                        <Logo>Fictune</Logo>
                        <Search handleSubmit= {onSearch}>
                            <SearchField/>
                            <SearchButton>Go</SearchButton>
                        </Search>
                    </SubHeaderComponent>
                    <SubHeaderComponent id= 'logout-subheader'>
                        <LogoutText onClick= {logoutButtonFunction}>Logout</LogoutText>
                    </SubHeaderComponent>
                </SubHeader>
            </Header>
            <SideBodyContainer>
                <SideBodySubContainer>
                    <SideBodyHeader>
                        <TopMenuText>Beli Koin</TopMenuText>
                        <TopMenuText>Daftar Premium</TopMenuText>
                    </SideBodyHeader>
                    <UserProfileContainer>
                        <UserImage></UserImage>
                        <UserData>
                            <UserName>{state? state.name : value.name}</UserName>
                            <CoinImage src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZ1wn6hO_Ea4CIGhSrQeBeueUmgFr4Zs3qg&usqp=CAU'/>
                            <UserCoin>{coin}</UserCoin>
                        </UserData>
                    </UserProfileContainer>
                    <DividerLine></DividerLine>
                    <MenuText>Novel Favoritku</MenuText>
                    <DividerLine></DividerLine>
                    <MenuText>Novel Karanganku</MenuText>
                    <DividerLine></DividerLine>
                    <MenuText>Bantuan</MenuText>
                    <DividerLine></DividerLine>
                    <MenuText>Pengaturan</MenuText>
                    <DividerLine></DividerLine>
                    <MenuText>Tentang Developer</MenuText>
                </SideBodySubContainer>
            </SideBodyContainer>
            <MainBodyContainer>
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
                    <RNLVRightArrowButton onClick= {RNLVRightArrowButtonFunction}></RNLVRightArrowButton>
                    <NovelStack>
                        <SmallText>Romantis</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
                        </NovelListView>
                        <SmallText>Keluarga</SmallText>
                        <NovelListView>
                        <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
                        </NovelListView>
                        <SmallText>Misteri</SmallText>
                        <NovelListView>
                        <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
                        </NovelListView>
                        <SmallText>Religius</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
                        </NovelListView>
                        <SmallText>Fiksi Ilmiah</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
                        </NovelListView>
                        <SmallText>Traveling</SmallText>
                        <NovelListView>
                            <NovelImage>Novel 1</NovelImage>
                            <NovelImage>Novel 2</NovelImage>
                            <NovelImage>Novel 3</NovelImage>
                            <NovelImage>Novel 4</NovelImage>
                            <NovelImage>Novel 5</NovelImage>
                            <NovelImage>Novel 6</NovelImage>
                            <NovelImage>Novel 7</NovelImage>
                            <NovelImage>Novel 8</NovelImage>
                            <NovelImage>Novel 9</NovelImage>
                            <NovelImage>Novel 10</NovelImage>
                            <NovelImage>Novel 11</NovelImage>
                            <NovelImage>Novel 12</NovelImage>
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
    height: 2300px;
    overflow-x: hidden;
    overflow-y: hidden;
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
    width: max(70%, 900px);
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const SubHeaderComponent= styled.div`
    width: 50%;
    position: relative;
    margin: 0;
    height: 100%;
    padding: 0;
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
    width: 400px;
    background-color: white;
    display: flex;
    z-index: 5;
    box-shadow: 2px 0px 5px #888888;
`;
const SideBodySubContainer= styled.div`
    position: relative;
    height: 100vh- 90px;
    width: 100%;
    top: 90px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 15px;
    padding-top: 10px;
`;
const MainBodyContainer= styled.div`
    height: 2500px;
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
    top: 120px;
    left: 445px;
    font-size: 25px;
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
    top: 175px;
    left: 445px;
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
    top: 173px;
    left: 400px;
    height: 2000px;
    width: 50px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
`;
const RightBlock= styled.div`
    position: absolute;
    top: 173px;
    height: 2000px;
    right: 0px;
    width: 200px;
    z-index: 3;
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1));
`;
const NovelStack= styled.div`
    position: absolute;
    left: 445px;
    top: 467px;
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
const LogoutText= styled.button`
    font-size: 18px;
    color: #ffff00;
    font-weight: bold;
    border: none;
    border-style: none;
    height: 50px;
    width: 100px;
    background-color: #400080;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;
const SideBodyHeader= styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;  
const TopMenuText= styled.span`
    height: 30px;
    margin-left: 15px;
    color: #888888;
    cursor: pointer;
    &:hover {
        color: #400080;
        text-decoration: underline;
    }
`;
const UserProfileContainer= styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const UserImage= styled.button`
    height: 90px;
    width: 90px;
    border-radius: 45px;
    border-color: #cccccc;
    border-width: 2px;
    background-color: #400080;
    matgin-bottom: 15px;
`;
const UserData= styled.div`
    height: 40px;
    width : 100%;
    display: flex;
    flex-direciton: row;
    align-items: center;
    justify-content: center;
`;
const UserName= styled.span`
    font-size: 18px;
    color: #400080;
    margin-right: 10px;
`;
const UserCoin= styled.span`
    fonst-size: 18px;
    color: #400080;
    margin-left: 5px;
`;
const CoinImage= styled.img`
    padding-top: 2px;
    height: 30px;
    width: 25px;
    background-color: white;
`;
const DividerLine= styled.div`
    height: 1px;
    width: 90%;
    margin: 5px 5px;
    background-color: #cccccc;
`;
const MenuText= styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #909090;
    margin: 10px 0px 5px 15px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    &:hover {
        color: #400080;
    }
`;
const RNLVRightArrowButton= styled.button`
    position: absolute;
    z-index: 4;
    top: 262px;
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
    background-image: url("RightArrowIcon.png");
    cursor: pointer;
`;
const Glass= styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
`;
const DevelopmentAlert= styled.div`
    background-color: rgba(33, 33, 33, 0.4);
    height: 400px;
    width: 600px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AlertMainBody= styled.div`
    height: 200px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justofy-content: center;
    align-items: center;
`;
const AlertSpan= styled.span`
    height: 70px;
    display: flex;
    alin-items: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    overflow-wrap: normal;
    text-align: left;  
    margin-left: 15px;
`;
const AlertSymbol= styled.img`
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AlertButton= styled.button`
    height: 50px;
    width: 190px;
    color: #400080;
    font-weight: bold;
    background-color: #ffff00;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
`;


export default Home